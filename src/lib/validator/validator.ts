import {z} from "zod";

export const BlogPostSchema = z.object({
  title: z.string().min(3, "title must be at least 3 characters"),
  slug: z.string().min(3, "Slug must be at least 3 characters"),
  category: z.string().min(1, "Category is required"),
  tags: z.array(z.string()).default([]),
  images: z.array(z.string()).min(1, "Product must have at least one image"),
  description: z.string().min(1, "Description is required"),
  isPublished: z.boolean(),
  author: z.string(),
  userEmail: z.string(),
  authorImage: z.string(),
});

export type BlogPost = z.infer<typeof BlogPostSchema>;

export type Data = {
  blogs: BlogPost[];
  headerMenus: {
    name: string;
    href: string;
  }[];

};
