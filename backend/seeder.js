import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // DELETE EVERYTHING FIRST
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // NOW INSERT DATA TO THE MODEL
    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((products) => {
      return { ...products, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log('Data Imported!'.bgGreen.bold);
    process.exit();

    // CATCH BLOCK TO HANDLE ERRORS
  } catch (error) {
    console.log(`Error: ${error}`.bgRed.bold);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    // DELETE EVERYTHING FIRST
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!'.bgRed.bold);
    process.exit();

    // CATCH BLOCK TO HANDLE ERRORS
  } catch (error) {
    console.log(`Error: ${error}`.bgRed.bold);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
