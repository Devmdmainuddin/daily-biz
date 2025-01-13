import { errorResponse, successResponse } from "../helpers";
import Blog from "./model";
import {connectToDatabase} from "../../../lib/db/index"

export const onBlogs = async () => {
    try {
        await connectToDatabase();
        const blog = await Blog.find({});
        return successResponse(blog);
    } catch (error) {
        console.log(error);
        return errorResponse('Internal server error', 500);
    }
};