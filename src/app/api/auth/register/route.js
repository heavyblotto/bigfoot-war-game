import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function POST(request) {
  try {
    const { username, password, email } = await request.json();
    
    if (!username || !password) {
      return NextResponse.json({ error: 'Username and password are required' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        email,
        player: {
          create: {
            xp: 0,
            level: 1
          }
        }
      },
      include: {
        player: true
      }
    });

    return NextResponse.json({ 
      user: { 
        id: user.id, 
        username: user.username, 
        email: user.email,
        player: {
          id: user.player.id,
          xp: user.player.xp,
          level: user.player.level
        }
      } 
    });
  } catch (error) {
    if (error.code === 'P2002') {
      return NextResponse.json({ error: 'Username or email already exists' }, { status: 400 });
    }
    console.error('Registration error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
