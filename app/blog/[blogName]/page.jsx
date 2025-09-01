import prisma from "../../../lib/prisma";
import Image from "next/image";
import ViewIncrementer from "../../../components/blog/ViewIncrementer";
import Breadcrumbs from "../../../components/general/Breadcrumbs";
import ShareButton from "../../../components/blog/ShareButton";

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

  // Ensure image URL is absolute and HTTPS
  let blogImage;
  if (blog.imageUrl) {
    // If imageUrl is already absolute URL
    if (blog.imageUrl.startsWith("http")) {
      blogImage = blog.imageUrl;
    } else {
      // If imageUrl is relative, make it absolute
      blogImage = `https://webnotes.ge${blog.imageUrl.startsWith("/") ? "" : "/"}${blog.imageUrl}`;
    }
  } else {
    // Fallback to default image
    blogImage = "https://webnotes.ge/og-fb.jpg";
  }

  console.log("Blog image URL for Facebook:", {
    originalImageUrl: blog.imageUrl,
    processedImageUrl: blogImage,
    blogTitle: blog.title,
  });

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
      tags: [
        "webnotes",
        "ბლოგი",
        "ტექნოლოგია",
        "ვებსაიტების დამზადება",
        "ვებსაიტების დამზადება ბიზნესისთვის",
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description.replace(/<[^>]*>/g, "").substring(0, 160),
      images: [blogImage],
      creator: "@webnotes",
      site: "@webnotes",
    },
    alternates: {
      canonical: blogUrl,
    },
    other: {
      "og:image": blogImage,
      "og:image:url": blogImage,
      "og:image:secure_url": blogImage,
      "og:image:width": "1200",
      "og:image:height": "630",
      "og:image:type": "image/jpeg",
      "og:image:alt": blog.title,
      "og:image:size": "1200x630",
      "article:published_time": blog.createdAt,
      "article:modified_time": currentTime,
      "article:author": "Webnotes",
      "article:section": "ბლოგი",
      "article:tag": "webnotes,ბლოგი,ტექნოლოგია",
    },
  };
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

      <div>
        <div className="relative">
          <ShareButton blog={blog} imageUrl={blog.imageUrl} />
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
