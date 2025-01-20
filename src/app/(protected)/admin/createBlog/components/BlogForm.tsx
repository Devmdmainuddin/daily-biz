"use client";
// import {useToast} from "@/hooks/use-toast";
// import {addBlog} from "@/lib/actions/blogActions";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {BlogPost, BlogPostSchema} from "@/lib/validator/validator";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Checkbox} from "@/components/ui/checkbox";
import {useSession} from "next-auth/react";
// import { createBlog } from "@/app/api/blogs/controller";
// import { onCreateBlog } from "@/lib/actions/blogActions";
// import dynamic from "next/dynamic";
// import "react-quill-new/dist/quill.snow.css";
// import Editor from "@/components/Editor/Editor";
const BlogForm = () => {
  // const {toast} = useToast();
  const session = useSession();
  console.log(session.data?.user);

  const {
    register,
    handleSubmit,
    control,
    formState: {errors, isSubmitting},
  } = useForm<BlogPost>({
    resolver: zodResolver(BlogPostSchema),
  });

  const onSubmit = async (data: BlogPost) => {
    console.log(data);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blogs`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to sign up");
      }
      await res.json();

      alert("blogs create at successfully!");
    } catch (error) {
      console.log(error);
      alert("An error occurred while blogs create");
    }
  };
  return (
    <section className="w-full flex justify-center items-center  md:p-24 p-10 min-h-screen">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 bg-white md:p-10 p-5 rounded-sm md:min-w-[640px] w-full">
          <h1 className="font-light text-xl mb-6 capitalize">create blogs post</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input id="title" {...register("title")} />
              {errors.title && <p className="text-red-500">{errors.title.message}</p>}
            </div>

            <div>
              <Label htmlFor="slug">Slug</Label>
              <Input id="slug" {...register("slug")} />
              {errors.slug && <p className="text-red-500">{errors.slug.message}</p>}
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" {...register("description")} />
              {errors.description && <p className="text-red-500">{errors.description.message}</p>}
            </div>
            <div>
              <Label htmlFor="tags">Tags (comma-separated)</Label>
              <Input id="tags" {...register("tags")} placeholder="e.g., React, Tailwind, MongoDB" />
              {errors.tags && <p className="text-red-500">{errors.tags.message}</p>}
            </div>

            <div>
              <Label htmlFor="images">Images (comma-separated URLs)</Label>
              <Input
                id="images"
                {...register("images")}
                onChange={(e) => {
                  const value = e.target.value;
                  const imagesArray = value.split(",").map((url) => url.trim());
                  e.target.value = imagesArray.join(", ");
                }}
              />

              {errors.images && <p className="text-red-500">{errors.images.message}</p>}
            </div>
            {/* <div>
  <Label htmlFor="images">Images (comma-separated URLs)</Label>
  <Input
    id="images"
    {...register("images")}
    placeholder="e.g., https://example.com/image1.jpg, https://example.com/image2.jpg"
    onBlur={(e) => {
      const value = e.target.value;
      const cleanedImages = value
        .split(",")
        .map((url) => url.trim()) 
        .filter((url) => url); 
      e.target.value = cleanedImages.join(", "); 
    }}
  />
  {errors.images && <p className="text-red-500">{errors.images.message}</p>}
</div> */}
            <div>
              <Label htmlFor="category">Category</Label>
              <Input id="category" {...register("category")} />
              {errors.category && <p className="text-red-500">{errors.category.message}</p>}
            </div>

            <div>
              <Label htmlFor="author">Author</Label>
              <Input id="author" {...register("author")} />
              {errors.author && <p className="text-red-500">{errors.author.message}</p>}
            </div>
            <div>
              <Label htmlFor="userEmail">Author Email</Label>
              <Input id="userEmail" type="email" {...register("userEmail")} />
              {errors.userEmail && <p className="text-red-500">{errors.userEmail.message}</p>}
            </div>

            <div>
              <Label htmlFor="authorImage">Author Image URL</Label>
              <Input id="authorImage" {...register("authorImage")} />
              {errors.authorImage && <p className="text-red-500">{errors.authorImage.message}</p>}
            </div>
            <div className="flex gap-2 items-center">
              <Controller
                name="isPublished"
                control={control}
                render={({field}) => (
                  <Checkbox
                    id="isPublished"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
              <Label htmlFor="isPublished">Published</Label>
            </div>

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Blog"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BlogForm;
