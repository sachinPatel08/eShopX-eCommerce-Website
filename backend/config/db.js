import mongoose from 'mongoose';

const connectDB = async () => {
  // CONNECTING MONGODB
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
    });

    console.log(
      `MongoDB Connected: ${connection.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
