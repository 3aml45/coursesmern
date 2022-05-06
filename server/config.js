import dotenv from 'dotenv';

dotenv.config();

export const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost/testdb';
export const PORT = process.env.PORT || 4000;