import {connectToDatabase} from ".";
import {cwd} from "process";
import {loadEnvConfig} from "@next/env";
import data from "../data/data";
import Blog from "@/app/api/blogs/model";

loadEnvConfig(cwd());

const main = async () => {
  try {
    await connectToDatabase();
    const {blogs} = data;
    await Blog.deleteMany();
    await Blog.insertMany(blogs);

    // console.log({
    //   createdProducts,
    //   message: "Seeded database successfully",
    // });
    process.exit(0);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};

main();
