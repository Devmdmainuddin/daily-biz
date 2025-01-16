"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import Editor from "@/components/Editor/Editor";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const Blogs = () => {
  const [formData, setFormData] = useState<{ content: string }>({ content: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.content.trim()) {
      alert("Content is required.");
      return;
    }

    console.log("Form Data:", formData);
    // Handle form submission
  };

  return (
    <div>
      <h1>Blogs Page</h1>
      <form onSubmit={handleSubmit}>
        <ReactQuill
          theme="snow"
          placeholder="Write something..."
          className="h-72 mb-12"
          onChange={(value) => setFormData({ content: value })}
        />
        <Editor
                        placeholder='Write course description here...'
                        value={''}
                        onChange={(value) => {
                            console.log('value:', value);
                            // setCourseDescription(value);
  
                        }}
                    />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Blogs;
