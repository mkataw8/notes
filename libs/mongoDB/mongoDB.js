import mongoose from "mongoose";

export async function connectMongoDB() {
  const connectMongoDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URL);
      console.log("connected to mongo ");
    } catch (error) {
      console.log(error);
    }
  };
}
