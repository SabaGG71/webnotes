// app/blog/[blogName]/page.jsx
import prisma from "../../../lib/prisma";
import Image from "next/image";
import ViewIncrementer from "../../../components/blog/ViewIncrementer";
import Breadcrumbs from "../../../components/general/Breadcrumbs";
import ShareButton from "../../../components/blog/ShareButton";
import { unstable_cache } from "next/cache";

// Server-side cache
const getBlog = unstable_cache(
  async (slug) => {
    return await prisma.blogs.findUnique({ where: { slug } });
  },
  ["blog"],
  { revalidate: 300, tags: ["blogs"] },
);

const Page = async ({ params }) => {
  const { blogName } = params;
  const blog = await getBlog(blogName);

  if (!blog) return <p>ბლოგი ვერ მოიძებნა!</p>;

  const blogImage = blog.imageUrl || "https://webnotes.ge/og-fb.jpg";

  return (
    <section className="container mt-9">
      <ViewIncrementer slug={blog.slug} />
      <Breadcrumbs
        text="ბლოგი"
        link="/blog"
        detailsText={blog.title}
        detailsLink={`/blog/${blog.slug}`}
      />

      <div className="relative mt-[32px]">
        {blogImage && (
          <Image
            quality={100}
            className="w-full h-auto max-lg:h-auto rounded-[24px] object-cover"
            width={500}
            height={500}
            src={blogImage}
            alt={blog.title}
          />
        )}
        <ShareButton blog={blog} />
      </div>

      <h1 className="text-2xl upper-case max-sm:text-base max-lg:text-xl mt-7 mb-7 font-bold">
        {blog.title}
      </h1>

      <div
        className="prose mt-4 tracking-tight text-[#333]/70 prose-sm max-w-full"
        dangerouslySetInnerHTML={{ __html: blog.description }}
      />
    </section>
  );
};

export default Page;
export { getBlog };
