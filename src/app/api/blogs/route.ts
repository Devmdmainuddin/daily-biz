import { errorResponse } from "../helpers";
import { onBlogs } from "./controller";


export const GET = async () => {
    try {
        const res = await onBlogs();
        return res;
    } catch (err) {
        console.log(err);
        return errorResponse('Internal server error');
    }
};