"use client";

import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import "./editor.css";


const ReactQuill = dynamic(
  async () => {
    const ReactQuill = await import("react-quill-new");
    // const { Quill } = ReactQuill.default;
    // const Block = Quill.import('blots/block') as any
    // Block.tagName = 'div';
    // Quill.register(Block,true);                                                     
    return ReactQuill;
  },
  {
    ssr: false,
    loading: () => (
      <div className="h-[340px] text-gray-200 p-4 flex items-center justify-center border rounded-md">
        Loading...
      </div>
    ),
  },
);

interface IProps {
  onChange: (e: string) => void;
  value: string;
  placeholder?: string;
}

const Editor = ({value, onChange, placeholder}: IProps) => {
  const modules = {
    toolbar: [
      [{header: [1, 2, 3, 4, 5, 6, false]}],
      [{ 'font': [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ 'color': [] }, { 'background': [] }],
      [{list: "ordered"}, {list: "bullet"}, {indent: "-1"}, {indent: "+1"}],
      ["link", "image","code-block"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "color",
    "background",
    'code',
  "code-block",
    'font',
    "size",
    // 'bullet',
    "indent",
    "link",
    "image",
  ];

  return (
    <div>
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={value}
        onChange={onChange}
        placeholder={placeholder ?? "Write message..."}
      />
    </div>
  );
};

export default Editor;
