import prisma from "../../../lib/prisma";
import Image from "next/image";
import ViewIncrementer from "../../../components/blog/ViewIncrementer";
import Breadcrumbs from "../../../components/general/Breadcrumbs";
import ShareButton from "../../../components/blog/ShareButton";

export async function generateMetadata({ params }) {
  const { blogName } = params;
  const blog = await prisma.blogs.findUnique({ where: { slug: blogName } });

  return { title: blog ? `Webnotes - ${blog.title}` : "Webnotes - ბლოგი ვერ მოიძებნა" };
}

const Page = async ({ params }) => {
  const { blogName } = params;
  const blog = await prisma.blogs.findUnique({ where: { slug: blogName } });

  if (!blog) return <p>ბლოგი ვერ მოიძებნა!</p>;

  return (
    <section className="container mt-9">
      <ViewIncrementer slug={blogName} />
      <Breadcrumbs
        text="ბლოგი"
        link="/blog"
        detailsText={blog.title}
        detailsLink={`/blog/${blog.slug}`}
      />

      <div className="mt-9">
        <div className="relative">
          <ShareButton blog={blog} />
          {blog.imageUrl && (
            <Image
              className="w-full h-[500px] max-md:h-[300px] rounded-[24px] object-cover"
              width={500}
              height={500}
              src={blog.imageUrl}
              alt={blog.title}
            />
          )}
        </div>

        <h1 className="text-2xl upper-case max-sm:text-base max-lg:text-xl mt-9 mb-7 font-bold">
          {blog.title}
        </h1>

        <div
          className="prose mt-4 text-[#333]/70 prose-sm max-w-full"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        />
      </div>
    </section>
  );
};

export default Page;
