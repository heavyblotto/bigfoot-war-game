import jwt from 'jsonwebtoken';

export const verifyAuth = async (token) => {
  try {
    console.log('JWT_SECRET:', process.env.JWT_SECRET); // Add this line (be careful with this in production)
    console.log('Token to verify:', token); // Add this line
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Verified token:', verified); // Add this line
    return verified;
  } catch (error) {
    console.error('Error verifying token:', error);
    return null;
  }
};
