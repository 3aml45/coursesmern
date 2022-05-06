import mongoose from 'mongoose';
import { MONGODB_URL } from './config.js';


export async function connectDB() {
  try {
    const db = await mongoose.connect(MONGODB_URL)
    console.log('connected to', db.connection.name)
  } catch (error) {
    console.log(error)
  }
}