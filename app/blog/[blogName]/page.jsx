// app/blog/[blogName]/page.js

import prisma from "../../../lib/prisma";
import Image from "next/image";
import ViewIncrementer from "../../../components/blog/ViewIncrementer";
import Breadcrumbs from "../../../components/general/Breadcrumbs";
import ShareButton from "../../../components/blog/ShareButton"; // დარწმუნდით რომ სწორედ აქედან იმპორტირდება

// დინამიკური metadata
export async function generateMetadata({ params }) {
  const { blogName } = params;
  const blog = await prisma.blogs.findUnique({ where: { slug: blogName } });

  if (!blog) {
    return {
      title: "Webnotes - ბლოგი ვერ მოიძებნა",
      description: "ბლოგი ვერ მოიძებნა",
    };
  }

  const blogUrl = `https://webnotes.ge/blog/${blog.slug}`;
  const currentTime = new Date().toISOString();

  const blogImage = blog.imageUrl || "https://webnotes.ge/og-fb.jpg";

  return {
    title: `Webnotes - ${blog.title}`,
    description: blog.description.replace(/<[^>]*>/g, "").substring(0, 160),
    openGraph: {
      title: blog.title,
      description: blog.description.replace(/<[^>]*>/g, "").substring(0, 160),
      url: blogUrl,
      siteName: "Webnotes",
      images: [
        {
          url: blogImage,
          width: 1200,
          height: 630,
          alt: blog.title,
          type: "image/jpeg",
        },
      ],
      locale: "ka_GE",
      type: "article",
      updatedTime: currentTime,
      publishedTime: blog.createdAt,
      author: "Webnotes",
      section: "ბლოგი",
      tags: ["webnotes", "ბლოგი", "ტექნოლოგია", "ვებსაიტების დამზადება"],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description.replace(/<[^>]*>/g, "").substring(0, 160),
      images: [blogImage],
      creator: "@webnotes",
      site: "@webnotes",
    },
    alternates: { canonical: blogUrl },
    other: { "og:image": blog.imageUrl },
  };
}

const Page = async ({ params }) => {
  const { blogName } = params;
  const blog = await prisma.blogs.findUnique({ where: { slug: blogName } });

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
            className="w-full h-[500px] max-md:h-[300px] rounded-[24px] object-cover"
            width={500}
            height={500}
            src={blogImage}
            alt={blog.title}
          />
        )}
        <ShareButton blog={blog} />
      </div>

      <h1 className="text-2xl upper-case max-sm:text-base max-lg:text-xl mt-9 mb-7 font-bold">
        {blog.title}
      </h1>

      <div
        className="prose mt-4 text-[#333]/70 prose-sm max-w-full"
        dangerouslySetInnerHTML={{ __html: blog.description }}
      />
    </section>
  );
};

export default Page;
