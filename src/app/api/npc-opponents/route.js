import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const npcOpponents = await prisma.nPCOpponent.findMany();
    return NextResponse.json(npcOpponents);
  } catch (error) {
    console.error('Error fetching NPCOpponents:', error);
    return NextResponse.json({ error: 'Error fetching NPCOpponents' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const data = await req.json();
    const newNPCOpponent = await prisma.nPCOpponent.create({ data });
    return NextResponse.json(newNPCOpponent, { status: 201 });
  } catch (error) {
    console.error('Error creating NPCOpponent:', error);
    return NextResponse.json({ error: 'Error creating NPCOpponent' }, { status: 500 });
  }
}
