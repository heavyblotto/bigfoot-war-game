import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req, { params }) {
  try {
    const bigfootPlayer = await prisma.bigfootPlayer.findUnique({
      where: { id: params.id },
      include: { bigfoot: true }
    });
    if (!bigfootPlayer) {
      return NextResponse.json({ error: 'BigfootPlayer not found' }, { status: 404 });
    }
    return NextResponse.json(bigfootPlayer);
  } catch (error) {
    console.error('Error fetching BigfootPlayer:', error);
    return NextResponse.json({ error: 'Error fetching BigfootPlayer' }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const data = await req.json();
    
    if (data.isSelected) {
      // If this bigfoot is being selected, unselect all others first
      await prisma.bigfootPlayer.updateMany({
        where: { NOT: { id: params.id } },
        data: { isSelected: false }
      });
    }

    const updatedBigfootPlayer = await prisma.bigfootPlayer.update({
      where: { id: params.id },
      data,
      include: { bigfoot: true }
    });
    return NextResponse.json(updatedBigfootPlayer);
  } catch (error) {
    console.error('Error updating BigfootPlayer:', error);
    return NextResponse.json({ error: 'Error updating BigfootPlayer' }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await prisma.bigfootPlayer.delete({
      where: { id: params.id },
    });
    return NextResponse.json({ message: 'BigfootPlayer deleted successfully' });
  } catch (error) {
    console.error('Error deleting BigfootPlayer:', error);
    return NextResponse.json({ error: 'Error deleting BigfootPlayer' }, { status: 500 });
  }
}
