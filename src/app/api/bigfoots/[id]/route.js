import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req, { params }) {
  try {
    const bigfoot = await prisma.bigfoot.findUnique({
      where: { id: params.id },
    });
    if (!bigfoot) {
      return NextResponse.json({ error: 'Bigfoot not found' }, { status: 404 });
    }
    return NextResponse.json(bigfoot);
  } catch (error) {
    console.error('Error fetching Bigfoot:', error);
    return NextResponse.json({ error: 'Error fetching Bigfoot' }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const data = await req.json();
    const updatedBigfoot = await prisma.bigfoot.update({
      where: { id: params.id },
      data,
    });
    return NextResponse.json(updatedBigfoot);
  } catch (error) {
    console.error('Error updating Bigfoot:', error);
    return NextResponse.json({ error: 'Error updating Bigfoot' }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await prisma.bigfoot.delete({
      where: { id: params.id },
    });
    return NextResponse.json({ message: 'Bigfoot deleted successfully' });
  } catch (error) {
    console.error('Error deleting Bigfoot:', error);
    return NextResponse.json({ error: 'Error deleting Bigfoot' }, { status: 500 });
  }
}
