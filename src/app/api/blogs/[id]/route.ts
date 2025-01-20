import {connectToDatabase} from "@/lib/db";
import {NextRequest, NextResponse} from "next/server";
import Blog from "../model";

export async function DELETE(req: NextRequest) {
  try {
    await connectToDatabase();
    const projecttId = req.url.split("/").pop();
    if (!projecttId) {
      return NextResponse.json({message: "Contact ID is required."}, {status: 400});
    }
    const deletedProject = await Blog.findByIdAndDelete(projecttId);
    if (!deletedProject) {
      return NextResponse.json({message: "project not found."}, {status: 404});
    }
    return NextResponse.json({message: "project deleted successfully!"});
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json(
      {message: "There was an error deleting the project. Please try again."},
      {status: 500},
    );
  }
}
