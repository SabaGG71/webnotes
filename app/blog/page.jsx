import Breadcrumbs from "../../components/general/Breadcrumbs";
import BlogItem from "../../components/blog/BlogItem";
import { Metadata } from "next";
import { NextPage } from "next";

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

const page = () => {
  return (
    <main className="container mb-[64px]">
      <div className="mt-9">
        <Breadcrumbs text="ბლოგი" link="/blog" />
      </div>
      <BlogItem currentPage={1} />
    </main>
  );
};

export default page;
