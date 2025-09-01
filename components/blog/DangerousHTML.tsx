"use client";
import React from "react";

interface blogType {
  blog: { description: string };
}

const DangerousHTML = ({ blog }: blogType) => {
  return (
    <div>
      <div
        className="prose line-clamp-3 max-sm:text-[13px] mt-4 text-[#333]/70 prose-sm max-w-full"
        dangerouslySetInnerHTML={{ __html: blog.description }}
      />
    </div>
  );
};

export default DangerousHTML;
