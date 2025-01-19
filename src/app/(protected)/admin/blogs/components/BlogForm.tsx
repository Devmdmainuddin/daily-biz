"use client";
import {useToast} from "@/hooks/use-toast";
import {addBlog} from "@/lib/actions/blogActions";
import {useRouter} from "next/navigation";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {BlogPost, BlogPostSchema} from "@/lib/validator/validator";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Checkbox} from "@/components/ui/checkbox";

const BlogForm = () => {
  const {toast} = useToast();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: {errors, isSubmitting},
  } = useForm<BlogPost>({
    resolver: zodResolver(BlogPostSchema),
    defaultValues: {
      title: "",
      slug: "",
      description: "",
      // tags: [],
      // images:[],
      category: "",
      isPublished: true,
      author: "",
      userEmail: "",
      authorImage: "",
    },
  });

  const onSubmit = async (data: BlogPost) => {
    // const tagsArray = data.tags.split(",").map(tag => tag.trim()).filter(tag => tag);
    // const imagesArray = data.images.split(",").map(url => url.trim()).filter(url => url);

    // const blogData = {
    //   ...data,
    //   tags: tagsArray,
    //   images: imagesArray
    // };
    try {
      const result = await addBlog(data);
      if (result.success) {
        toast({
          title: "Success",
          description: result.message,
        });
        router.push("/blogs");
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "An error occurred while submitting the form.",
        variant: "destructive",
      });
    }
  };
  return (
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
        <Input
          id="tags"
          {...register("tags")}
          className="w-full p-2 border-b border-gray-300  outline-0"
          placeholder="e.g., React, Tailwind, MongoDB"
        />

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

      <div>
        <Label htmlFor="category">Category</Label>
        <Input id="category" {...register("category")} />
        {errors.category && <p className="text-red-500">{errors.category.message}</p>}
      </div>

      <Controller
        name="isPublished"
        control={control}
        render={({field}) => (
          <Checkbox id="isPublished" checked={field.value} onCheckedChange={field.onChange} />
        )}
      />
      <Label htmlFor="isPublished">Published</Label>

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

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Blog"}
      </Button>
    </form>
  );
};

export default BlogForm;
