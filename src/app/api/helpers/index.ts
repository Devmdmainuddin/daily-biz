import {NextResponse} from "next/server";
import {ZodError} from "zod";
export * from "../../../lib/db/index";

export const successResponse = (data: unknown) => {
  return NextResponse.json(data, {status: 200});
};
export const zodErrorResponse = (error: ZodError, status: number = 500) => {
  const errorMessage = error.issues.map((issue) => issue.message).join(", ");
  return errorResponse(errorMessage, status);
};
export const errorResponse = (message: string, status: number = 500) => {
  return NextResponse.json({message}, {status});
};
