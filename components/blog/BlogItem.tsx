"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import time from "../../public/icons/time.svg";
import rightArrow from "../../public/icons/rightArrow.svg";
import eyeIcon from "../../public/icons/eye.svg";
import pagRight from "../../public/icons/pagRight.svg";
import Link from "next/link";
import DangerousHTML from "./DangerousHTML";
import { formatViewCount, formatTimeAgo } from "../../lib/utils";
import { Loader2 } from "lucide-react";
import Breadcrumbs from "../general/Breadcrumbs";

interface Blog {
  id: string;
  title: string;
  slug: string;
  description: string;
  imageUrl?: string;
  views: number;
  createdAt: string;
}

interface BlogItemProps {
  currentPage: number;
}

const BlogItem = ({ currentPage }: BlogItemProps) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [, setTimeUpdate] = useState(0);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs");
        if (response.ok) {
          const data = await response.json();
          setBlogs(data);
        }
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setTimeUpdate(Date.now()), 60000);
    return () => clearInterval(interval);
  }, []);

  const firstPageCount = 6;
  const otherPagesCount = 6;

  const totalBlogs = blogs.length;
  const totalPages =
    totalBlogs <= firstPageCount
      ? 1
      : 1 + Math.ceil((totalBlogs - firstPageCount) / otherPagesCount);

  const startIndex = currentPage === 1 ? 0 : firstPageCount + (currentPage - 2) * otherPagesCount;
  const endIndex =
    currentPage === 1 ? firstPageCount : firstPageCount + (currentPage - 1) * otherPagesCount;

  const currentBlogs = blogs.slice(startIndex, endIndex);

  if (loading) {
    return (
      <div className="text-center justify-center flex gap-2">
        <div className="flex items-center h-[400px] gap-4">
          <Loader2 className="animate-spin max-sm:w-5 max-sm:h-5 w-6 h-6 text-primary-500" />
          <p className="text-xl max-sm:text-lg font-medium">ბლოგი იტვირთება...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="mt-9 container">
        <Breadcrumbs text="ბლოგი" link="/blog" />
      </div>
      <div className="grid container grid-cols-2 mt-9 max-sm:w-full mb-6 max-lg:grid-cols-1 gap-6 items-center">
        {currentBlogs.map((blog) => (
          <Link href={`blog/${blog.slug}`} key={blog.id} passHref>
            <div className="bg-[#eef4ff]/50 items-stretch h-auto group shadow-sm cursor-pointer rounded-[24px] p-5 max-sm:p-4">
              <div className="w-full relative overflow-hidden animate-in rounded-[18px] duration-500 transition-all">
                <div className="absolute z-20 right-[15px] top-[15px] bg-[#FACC15] w-auto px-2 gap-2 h-[30px] flex items-center justify-center rounded-[10px]">
                  <Image className="w-[18px] h-auto" src={eyeIcon} alt="eye icon" />
                  <p className="font-manrope font-bold text-sm text-[#333]">
                    {formatViewCount(blog.views)}
                  </p>
                </div>
                {blog.imageUrl && (
                  <Image
                    quality={100}
                    width={280}
                    height={280}
                    className="rounded-[18px] group-hover:opacity-90 w-full xl:h-[280px] max-lg:w-full lg:object-cover max-xl:h-auto select-none"
                    src={blog.imageUrl}
                    alt="ai blog image"
                  />
                )}
              </div>
              <div className="pt-6 pb-1 max-sm:pb-0 pr-4">
                <p className="upper-case mb-[20px] text-lg max-sm:text-[15px] line-clamp-3 text-[#333] max-md:leading-6 text-primary-900  font-[700]">
                  {blog.title}
                </p>
                <DangerousHTML blog={blog} />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image className="max-sm:w-[20px] max-sm:h-[20px]" src={time} alt="time icon" />
                  <p className="text-sm max-sm:text-[13px] text-[#333]/70">
                    {formatTimeAgo(blog.createdAt)}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="upper-case font-semibold text-primary-900 group-hover:opacity-90 max-sm:text-[13px] pt-1 max-sm:pt-0">
                    სრულად ნახვა
                  </p>
                  <Image
                    className="group-hover:ml-1 max-sm:group-hover:ml-0 max-sm:w-[20px] max-sm:mt-[-0.5px] max-sm:h-[20px] duration-200 transition-all"
                    src={rightArrow}
                    alt="rightArrow icon"
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-[64px] max-sm:mt-[32px] mb-[64px] flex justify-center">
        <div className="flex gap-2 max-md:text-[14px] border rounded-full p-2 px-3">
          <Link
            href={
              currentPage > 1
                ? currentPage - 1 === 1
                  ? "/blog"
                  : `/blog/page/${currentPage - 1}`
                : "#"
            }
            className={`rounded-full max-md:text-[15px] hover:scale-[1.05] duration-300 transition-all ${currentPage <= 1 ? "cursor-not-allowed" : ""}`}
          >
            <Image className="max-sm:w-[36px] max-sm:h-auto" src={pagRight} alt="pagRight" />
          </Link>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Link
              key={page}
              href={page === 1 ? "/blog" : `/blog/page/${page}`}
              className={`w-[36px] max-sm:w-[34px] max-sm:h-[34px] mt-[2.5px] h-[36px] flex justify-center items-center max-md:text-[15px] font-[600] text-[#333]/90 rounded-full ${
                page === currentPage
                  ? "bg-primary-500  max-md:text-[15px] hover:bg-primary-600 font-[600] text-white"
                  : "hover:bg-primary-50 "
              }`}
            >
              {page}
            </Link>
          ))}

          <Link
            href={currentPage < totalPages ? `/blog/page/${currentPage + 1}` : "#"}
            className={`rounded-full  max-md:text-[12sspx] hover:scale-[1.05] duration-300 transition-all ${currentPage >= totalPages ? "cursor-not-allowed" : ""}`}
          >
            <Image
              className="max-sm:w-[36px] max-sm:h-auto rotate-180"
              src={pagRight}
              alt="pagRight"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogItem;
