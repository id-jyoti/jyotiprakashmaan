import { Link } from "react-router-dom";

interface BlogCardProps {
  slug: string;
  title: string;
  date: string;
  description: string;
}

export default function BlogCard({ slug, title, date, description }: BlogCardProps) {
  return (
    <Link to={`/blog/${slug}`} className="block border-b pb-4 mb-4 hover:text-blue-500 dark:hover:text-blue-300">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
      <p className="mt-1">{description}</p>
    </Link>
  );
}
