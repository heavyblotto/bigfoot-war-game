import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import prisma from '@/lib/prisma';
import { processBigfootData } from '@/utils/bigfoots';

export async function GET() {
  try {
    const currentBigfoots = processBigfootData();
    const currentBigfootNames = currentBigfoots.map(b => b.name);

    // Delete BigfootPlayers that are no longer in the JSON
    await prisma.bigfootPlayer.deleteMany({
      where: {
        bigfoot: {
          name: {
            notIn: currentBigfootNames
          }
        }
      }
    });

    // Fetch existing BigfootPlayers
    let bigfootPlayers = await prisma.bigfootPlayer.findMany({
      include: { bigfoot: true, player: { include: { user: true } } }
    });

    // Create new BigfootPlayers for any new entries in the JSON
    for (const bigfoot of currentBigfoots) {
      const existingPlayer = bigfootPlayers.find(bp => bp.bigfoot.name === bigfoot.name);
      if (!existingPlayer) {
        const newBigfootPlayer = await prisma.bigfootPlayer.create({
          data: {
            bigfoot: {
              connectOrCreate: {
                where: { name: bigfoot.name },
                create: {
                  name: bigfoot.name,
                  type: bigfoot.type,
                  location: bigfoot.location,
                  habitat: bigfoot.habitat,
                  description: bigfoot.description,
                  attacksFile: 'default_attacks.json'
                }
              }
            },
            level: 1,
            xp: 0,
            hp: 100,
            defense: 10,
            luck: 5,
            imageUrl: bigfoot.image,
            isSelected: false,
            player: {
              create: {
                user: {
                  create: {
                    username: `User_${Math.random().toString(36).substr(2, 9)}`,
                  }
                }
              }
            }
          },
          include: { bigfoot: true, player: { include: { user: true } } }
        });
        bigfootPlayers.push(newBigfootPlayer);
      }
    }

    const processedBigfoots = bigfootPlayers.map(player => ({
      id: player.id,
      name: player.bigfoot.name,
      type: player.bigfoot.type,
      location: player.bigfoot.location,
      habitat: player.bigfoot.habitat,
      description: player.bigfoot.description,
      image: player.imageUrl,
      level: player.level,
      xp: player.xp,
      isSelected: player.isSelected
    }));

    console.log('Processed bigfoots:', processedBigfoots);
    return NextResponse.json(processedBigfoots);
  } catch (error) {
    console.error('Error fetching bigfoot players:', error);
    return NextResponse.json({ error: 'Failed to fetch bigfoot players' }, { status: 500 });
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