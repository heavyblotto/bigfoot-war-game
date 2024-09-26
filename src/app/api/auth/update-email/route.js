import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { verifyAuth } from '@/lib/auth';

export async function POST(request) {
  console.log('Received request to update email');
  console.log('Request headers:', Object.fromEntries(request.headers.entries()));
  
  try {
    const authHeader = request.headers.get('Authorization');
    console.log('Auth header:', authHeader);

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      console.log('Missing or invalid token');
      return NextResponse.json({ error: 'Missing or invalid token' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    console.log('Token received:', token);

    const decodedToken = await verifyAuth(token);
    console.log('Decoded token:', decodedToken);

    if (!decodedToken) {
      console.log('Token verification failed');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { email } = await request.json();
    console.log('New email:', email);

    const userId = decodedToken.userId;
    console.log('User ID:', userId);

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { email },
      include: { player: true }
    });

    console.log('Updated user:', updatedUser);

    return NextResponse.json({ 
      user: {
        id: updatedUser.id,
        username: updatedUser.username,
        email: updatedUser.email,
        player: updatedUser.player ? {
          id: updatedUser.player.id,
          xp: updatedUser.player.xp,
          level: updatedUser.player.level
        } : null
      }
    });
  } catch (error) {
    console.error('Error in update-email route:', error);
    return NextResponse.json({ error: 'An error occurred while updating the email' }, { status: 500 });
  }
}
