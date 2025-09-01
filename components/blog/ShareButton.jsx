"use client";
import Image from "next/image";
import React from "react";
import share from "../../public/icons/share.svg";
import { FacebookShareButton } from "next-share";

export default function ShareButton({ blog }) {
  const url = `https://webnotes.ge/blog/${blog.slug}`;
  const quote = blog.slug.replace(/<[^>]*>/g, "").substring(0, 160);

  return (
    <>
      <FacebookShareButton url={url} quote={quote} hashtag="#webnotes #ბლოგი">
        <div className="bg-primary-500 hover:bg-primary-400 absolute bottom-[45px] left-6 duration-300 transition-all cursor-pointer w-12 h-12 flex items-center justify-center rounded-[12px] p-3">
          <Image src={share} alt="share-icon" className="object-contain" />
        </div>
      </FacebookShareButton>
    </>
  );
}
