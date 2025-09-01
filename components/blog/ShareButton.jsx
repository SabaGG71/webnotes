"use client";
import { FacebookShareButton } from "next-share";
import share from "../../public/icons/share.svg";
import React from "react";

const ShareButton = ({ blog }) => {
  return (
    <div>
      <FacebookShareButton
        url={`https://webnotes.ge/blog/${blog.slug}`}
        quote={blog.title}
        hashtag="#webnotes #ბლოგი"
        beforeOnClick={() => console.log("გაზიარებული ბლოგი:", blog.title)}
      >
        <div
          title="გააზიარე ბლოგი"
          className="absolute bg-primary-500 w-[50px] flex items-center justify-center text-center rounded-[12px] h-[50px] left-[20px] bottom-[20px] hover:bg-primary-400 duration-200 transition-all cursor-pointer"
        >
          <img src={share.src} alt="share" />
        </div>
      </FacebookShareButton>
    </div>
  );
};

export default ShareButton;
