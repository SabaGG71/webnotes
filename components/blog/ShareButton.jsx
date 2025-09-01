"use client";
import { FacebookShareButton } from "next-share";
import shareIcon from "../../public/icons/share.svg";
import React from "react";

const ShareButton = ({ blog }) => {
  return (
    <div className="absolute bottom-6 left-6">
      <FacebookShareButton
        url={`https://webnotes.ge/blog/${blog.slug}`}
        quote={blog.title}
        hashtag="#webnotes #ბლოგი"
        beforeOnClick={() => console.log("Sharing blog:", blog.title)}
      >
        <div
          title="გააზიარე ბლოგი"
          className="bg-primary-500 hover:bg-secondary-50 duration-300 transition-all cursor-pointer w-12 h-12 flex items-center justify-center rounded-[12px] p-3"
        >
          <img src={shareIcon.src} alt="share" className="object-contain" />
        </div>
      </FacebookShareButton>
    </div>
  );
};

export default ShareButton;
