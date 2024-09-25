import jwt from 'jsonwebtoken';

export const verifyAuth = async (token) => {
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    return verified;
  } catch (error) {
    console.error('Error verifying token:', error);
    return null;
  }
};
