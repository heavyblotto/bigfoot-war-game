import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const bigfootPlayers = await prisma.bigfootPlayer.findMany();
    return NextResponse.json(bigfootPlayers);
  } catch (error) {
    console.error('Error fetching BigfootPlayers:', error);
    return NextResponse.json({ error: 'Error fetching BigfootPlayers' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const data = await req.json();
    const newBigfootPlayer = await prisma.bigfootPlayer.create({ data });
    return NextResponse.json(newBigfootPlayer, { status: 201 });
  } catch (error) {
    console.error('Error creating BigfootPlayer:', error);
    return NextResponse.json({ error: 'Error creating BigfootPlayer' }, { status: 500 });
  }
}
