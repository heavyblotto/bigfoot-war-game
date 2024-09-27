import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const bigfootPlayers = await prisma.bigfootPlayer.findMany({
      include: { bigfoot: true }
    });
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

export async function PUT(req) {
  try {
    const { id, isSelected } = await req.json();
    
    // First, unselect all BigfootPlayers
    await prisma.bigfootPlayer.updateMany({
      data: { isSelected: false }
    });

    // Then, select the specified BigfootPlayer
    const updatedBigfootPlayer = await prisma.bigfootPlayer.update({
      where: { id },
      data: { isSelected },
      include: { bigfoot: true }
    });

    return NextResponse.json(updatedBigfootPlayer);
  } catch (error) {
    console.error('Error updating BigfootPlayer:', error);
    return NextResponse.json({ error: 'Error updating BigfootPlayer' }, { status: 500 });
  }
}
