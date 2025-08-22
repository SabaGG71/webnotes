import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="container flex flex-col justify-center items-center my-24">
      <h1 className="text-center text-3xl upper-case font-bold text-[#333]">
        404 — გვერდი ვერ მოიძებნა
      </h1>
      <p className="text-center text-[17px] mt-4 text-[#333]">
        გვერდი არ არსებობს ან მისამართი შეცდომითაა შეყვანილი.
      </p>
      <div>
        <Link href="/">
          <Button className="text-center px-6 mt-9 justify-center items-center">
            <ChevronLeft className="mt-1" />
            უკან დაბრუნება
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
