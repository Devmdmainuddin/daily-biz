import mongoose from "mongoose";

// @ts-nocheck
const MONGO_URI = process.env.MONGODB_URI || "";
const cached: {
  connection?: typeof mongoose;
  promise?: Promise<typeof mongoose>;
} = {};
export const connectToDatabase = async () => {
  if (cached.connection) return cached.connection;

  if (!MONGO_URI) throw new Error("MONGODB_URI is missing");

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose.connect(MONGO_URI, opts).then((mongoose) => mongoose);
  }
  try {
    cached.connection = await cached.promise;
  } catch (e) {
    cached.promise = undefined;
    throw e;
  }
  return cached.connection;
};
