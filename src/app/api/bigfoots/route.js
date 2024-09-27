import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const bigfoots = await prisma.bigfoot.findMany();
    return NextResponse.json(bigfoots);
  } catch (error) {
    console.error('Error fetching Bigfoots:', error);
    return NextResponse.json({ error: 'Error fetching Bigfoots' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const data = await req.json();
    const newBigfoot = await prisma.bigfoot.create({ data });
    return NextResponse.json(newBigfoot, { status: 201 });
  } catch (error) {
    console.error('Error creating Bigfoot:', error);
    return NextResponse.json({ error: 'Error creating Bigfoot' }, { status: 500 });
  }
}
