import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { verifyAuth } from '@/lib/auth';

export async function POST(request) {
  try {
    const authHeader = request.headers.get('Authorization');
    console.log('Authorization Header:', authHeader);

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Missing or invalid token' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    console.log('Token:', token);

    const decodedToken = await verifyAuth(token);
    console.log('Decoded Token:', decodedToken);

    if (!decodedToken) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { email } = await request.json();
    console.log('New Email:', email);

    const userId = decodedToken.userId;
    console.log('User ID:', userId);

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { email },
    });

    console.log('Updated User:', updatedUser);

    return NextResponse.json({ user: updatedUser });
  } catch (error) {
    console.error('Error updating email:', error);
    return NextResponse.json({ error: 'An error occurred while updating the email' }, { status: 500 });
  }
}
