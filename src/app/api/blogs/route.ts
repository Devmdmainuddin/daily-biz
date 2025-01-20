
import { NextRequest } from "next/server";
import { errorResponse} from "../helpers";
import {onBlogs} from "./controller";
import { BlogPost } from "@/lib/validator/validator";
import { onCreateBlog } from "@/lib/actions/blogActions";


export const GET = async () => {
  try {
    const res = await onBlogs();
    return res;
  } catch (err) {
    console.log(err);
    return errorResponse("Internal server error");
  }
};

export const POST = async (req: NextRequest) => {
  try {
      const body = (await req.json()) as BlogPost;
      console.log(body);
      const res = await onCreateBlog(body);
      return res;
  } catch (err) {
    console.log(err);
      return errorResponse('Internal server error');
  }
};