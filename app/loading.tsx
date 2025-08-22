import { Loader2 } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col justify-center items-center">
      <Loader2 className="animate-spin w-12 h-12 mb-4 text-primary-500" />
      <p className="text-lg font-medium">იტვირთება...</p>
    </div>
  );
};

export default Loading;
