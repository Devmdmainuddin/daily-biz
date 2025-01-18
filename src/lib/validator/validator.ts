import {z} from "zod";

export const BlogPostSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  slug: z.string().min(3, "Slug must be at least 3 characters"),
  category: z.string().min(1, "Category is required"),
  tags: z
    .string()
    .nonempty("Tags are required")
    .refine((tags) => tags.split(",").length > 0, "Tags must include at least one item"),
  // tags: z.array(z.string()).min(1, "At least one tag is required"),
  // images: z.array(z.string().url("Must be a valid URL")).min(1, "At least one image URL is required"),
  // tags: z.array(z.string()).min(1, "At least one tag is required"),
  // tags: z.array(z.string()).default([]),
  images: z
    .string()
    .nonempty("Tags are required")
    .refine((tags) => tags.split(",").length > 0, "image must include at least one item"),
  description: z.string().min(1, "Description is required"),
  isPublished: z.boolean(),
  author: z.string().min(1, "Author is required"),
  userEmail: z.string().email("Must be a valid email"),
  authorImage: z.string().url("Must be a valid URL"),
});

export type BlogPost = z.infer<typeof BlogPostSchema>;

export type Data = {
  blogs: BlogPost[];
  headerMenus: {
    name: string;
    href: string;
  }[];
};
