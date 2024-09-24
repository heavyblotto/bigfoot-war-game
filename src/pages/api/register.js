import { users } from '@/data/users';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    const userExists = users.find(user => user.username === username);
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = { id: users.length + 1, username, password, profile: {} };
    users.push(newUser);
    return res.status(201).json({ message: 'User registered successfully', user: newUser });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
