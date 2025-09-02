"use client";
import React from "react";

interface blogType {
  blog: { description: string };
}

const DangerousHTML = ({ blog }: blogType) => {
  return (
    <div>
      <div
        className="prose line-clamp-3 max-sm:text-[13px] mt-4 max-md:mt-1 text-[#333]/70 prose-sm h-auto max-w-full"
        dangerouslySetInnerHTML={{ __html: blog.description }}
      />
    </div>
  );
};

export default DangerousHTML;
