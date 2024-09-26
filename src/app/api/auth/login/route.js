import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(request) {
  console.log('Environment variables:', process.env);
  console.log('JWT_SECRET:', process.env.JWT_SECRET);
  if (!process.env.JWT_SECRET) {
    console.error('JWT_SECRET is not set');
    return NextResponse.json({ error: 'JWT_SECRET is not set' }, { status: 500 });
  }

  try {
    const { username, password } = await request.json();
    console.log('Login attempt for username:', username);

    const user = await prisma.user.findUnique({
      where: { username },
      include: { player: true } // Include the associated Player data
    });

    if (!user) {
      console.log('User not found:', username);
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log('Invalid password for user:', username);
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log('Login successful for user:', username);

    // Make sure this token is being returned to the client and stored in the auth store
    console.log('Token being sent after login:', token);
    return NextResponse.json({ 
      token, 
      user: { 
        id: user.id, 
        username: user.username, 
        email: user.email,
        player: user.player
      } 
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
