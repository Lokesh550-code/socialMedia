import mongoose from "mongoose";

const connectDb = async (DATABASE_URL) => {
  await mongoose.connect(DATABASE_URL);
  console.log(`DB connected`);
};

export default connectDb;
