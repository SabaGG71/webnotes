// app/blog/page.tsx
import Breadcrumbs from "../../components/general/Breadcrumbs";
import BlogItem from "../../components/blog/BlogItem";
import prisma from "../../lib/prisma"; // შენი Prisma client

// Metadata
export const metadata = {
  title: "Webnotes - ბლოგი",
  description:
    "აღმოაჩინეთ უახლესი სტატიები ტექნოლოგიებზე, AI-ზე, ვებსაიტების დამზადებასა და ონლაინ მარკეტინგზე. გაეცანით რჩევებს, ტენდენციებს და ინოვაციებს Webnotes-ის ბლოგში.",
  openGraph: {
    title: "webnotes - ბლოგი",
    description:
      "აღმოაჩინეთ უახლესი სტატიები ტექნოლოგიებზე, AI-ზე, ვებსაიტების დამზადებასა და ონლაინ მარკეტინგზე. გაეცანით რჩევებს, ტენდენციებს და ინოვაციებს Webnotes-ის ბლოგში.",
    url: "https://webnotes.ge/blog",
    siteName: "Webnotes",
    images: [
      {
        url: "https://webnotes.ge/og-fb.jpg",
        width: 1200,
        height: 630,
        alt: "webnotes ბლოგი",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "webnotes - ბლოგი",
    description:
      "აღმოაჩინეთ უახლესი სტატიები ტექნოლოგიებზე, AI-ზე, ვებსაიტების დამზადებასა და ონლაინ მარკეტინგზე. გაეცანით რჩევებს, ტენდენციებს და ინოვაციებს Webnotes-ის ბლოგში.",
    images: ["https://webnotes.ge/og-fb.jpg"],
  },
  alternates: {
    canonical: "https://webnotes.ge/blog",
  },
};

// ✅ ISR caching: გვერდი განახლდება ყოველ 5 წუთში
export const revalidate = 300; // seconds

// Prisma + Next.js caching helper
import { unstable_cache } from "next/cache";

export const getBlogs = unstable_cache(
  async () => {
    return await prisma.blogs.findMany({
      orderBy: { createdAt: "desc" },
      take: 20,
    });
  },
  ["blogs"],
  {
    revalidate: 300, // 5 წუთში ერთხელ განახლდება cache
    tags: ["blogs"], // ხელით გასუფთავება შესაძლებელია ახალი ბლოგის დამატებისას
  },
);

const page = async () => {
  const blogs = await getBlogs();

  return (
    <main className="container mb-[64px]">
      <div className="mt-9">
        <Breadcrumbs text="ბლოგი" link="/blog" />
      </div>
      <BlogItem blogs={blogs} currentPage={1} />
    </main>
  );
};

export default page;
