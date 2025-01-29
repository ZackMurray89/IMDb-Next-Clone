import mongoose from 'mongoose';

let initialized = false;

export const connect = async () => {
  mongoose.set('strictQuery', true);

  if (initialized) {
    console.log('MongoDB Already Connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);

    initialized = true;

    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB Connection Error: ', error);
    process.exit(1);
  }
};
