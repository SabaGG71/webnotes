"use client";
import { FacebookShareButton } from "next-share";
import shareIcon from "../../public/icons/share.svg";

const ShareButton = ({ blog }) => (
  <FacebookShareButton
    url={`https://webnotes.ge/blog/${blog.slug}`}
    quote={blog.title}
    hashtag="#webnotes"
  >
    <div
      title="გააზიარე ბლოგი"
      className="absolute bg-primary-500 w-[50px] h-[50px] flex items-center justify-center rounded-[12px] left-[20px] bottom-[20px] hover:bg-primary-400 cursor-pointer"
    >
      <img src={shareIcon.src} alt="share" />
    </div>
  </FacebookShareButton>
);

export default ShareButton;
