import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import DarkToggle from "../components/DarkToggle";



export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState("");
  const [meta, setMeta] = useState({ title: "", date: "", description: "" });

  useEffect(() => {
    import(`../data/posts/${slug}.md`)
      .then(res => fetch(res.default))
      .then(res => res.text())
      .then(text => {
        const { content, data } = matter(text);
        setContent(content);
        setMeta(data as any);
      });
  }, [slug]);

  return (
    <div className="max-w-3xl mx-auto p-4 text-black dark:text-white">
      <h1 className="text-3xl font-bold">{meta.title}</h1>
      <p className="text-sm text-gray-500">{meta.date}</p>
      <ReactMarkdown className="prose dark:prose-invert">{content}</ReactMarkdown>
    </div>
  );
}
