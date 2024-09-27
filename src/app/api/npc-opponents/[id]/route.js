import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req, { params }) {
  try {
    const npcOpponent = await prisma.nPCOpponent.findUnique({
      where: { id: params.id },
    });
    if (!npcOpponent) {
      return NextResponse.json({ error: 'NPCOpponent not found' }, { status: 404 });
    }
    return NextResponse.json(npcOpponent);
  } catch (error) {
    console.error('Error fetching NPCOpponent:', error);
    return NextResponse.json({ error: 'Error fetching NPCOpponent' }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const data = await req.json();
    const updatedNPCOpponent = await prisma.nPCOpponent.update({
      where: { id: params.id },
      data,
    });
    return NextResponse.json(updatedNPCOpponent);
  } catch (error) {
    console.error('Error updating NPCOpponent:', error);
    return NextResponse.json({ error: 'Error updating NPCOpponent' }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await prisma.nPCOpponent.delete({
      where: { id: params.id },
    });
    return NextResponse.json({ message: 'NPCOpponent deleted successfully' });
  } catch (error) {
    console.error('Error deleting NPCOpponent:', error);
    return NextResponse.json({ error: 'Error deleting NPCOpponent' }, { status: 500 });
  }
}
