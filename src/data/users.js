import bcrypt from 'bcryptjs';

const hashedPassword = bcrypt.hashSync('testpassword', 10);

export const users = [
  {
    id: 1,
    username: 'testuser',
    password: hashedPassword,
    email: 'testuser@example.com',
    createdAt: new Date('2023-01-01').toISOString(),
    player: {
      id: 1,
      level: 5,
      xp: 450,
      gamesPlayed: 20,
      wins: 12
    }
  },
];
