import BlogItem from "../../../../components/blog/BlogItem";

export default function BlogPage({ params }) {
  const page = parseInt(params.pageNumber, 10);
  return <BlogItem currentPage={page} />;
}
