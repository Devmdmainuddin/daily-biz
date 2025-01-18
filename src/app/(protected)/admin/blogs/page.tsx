// import dynamic from "next/dynamic";
// import "react-quill-new/dist/quill.snow.css";
// import Editor from "@/components/Editor/Editor";
import BlogForm from "./components/BlogForm";
// const ReactQuill = dynamic(() => import("react-quill-new"), {ssr: false});

const Blogs = () => {
  // const [formData, setFormData] = useState<{content: string}>({content: ""});

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   if (!formData.content.trim()) {
  //     alert("Content is required.");
  //     return;
  //   }

  //   console.log("Form Data:", formData);

  // };

  return (
    // <div>
    //   <h1>Blogs Page</h1>
    //   <form onSubmit={handleSubmit}>
    //     <ReactQuill
    //       theme="snow"
    //       placeholder="Write something..."
    //       className="h-72 mb-12"
    //       onChange={(value) => setFormData({content: value})}
    //     />
    //     <Editor
    //       placeholder="Write course description here..."
    //       value={""}
    //       onChange={(value) => {
    //         console.log("value:", value);
    //         // setCourseDescription(value);
    //       }}
    //     />
    //     <button type="submit" className="btn btn-primary">
    //       Submit
    //     </button>
    //   </form>
    // </div>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Blog Post</h1>
      <BlogForm />
    </div>
  );
};

export default Blogs;
