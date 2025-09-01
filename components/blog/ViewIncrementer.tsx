"use client";

import { useEffect, useRef } from "react";

interface ViewIncrementerProps {
  slug: string;
}

const ViewIncrementer = ({ slug }: ViewIncrementerProps) => {
  const hasIncremented = useRef(false);

  useEffect(() => {
    if (hasIncremented.current) {
      return;
    }

    const incrementViews = async () => {
      const viewedKey = `viewed_${slug}`;
      const hasViewed = sessionStorage.getItem(viewedKey);

      if (hasViewed) {
        return;
      }

      try {
        const response = await fetch("/api/increment-views", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ slug }),
        });

        if (response.ok) {
          const result = await response.json();

          sessionStorage.setItem(viewedKey, "true");
          hasIncremented.current = true;
        }
      } catch (error) {
        console.error("ნახვები ვერ ჩაიტვირთა:", error);
      }
    };

    const timer = setTimeout(() => {
      incrementViews();
    }, 100);

    return () => clearTimeout(timer);
  }, [slug]);

  return null;
};

export default ViewIncrementer;
