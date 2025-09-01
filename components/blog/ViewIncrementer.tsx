"use client";

import { useEffect, useRef } from "react";

interface ViewIncrementerProps {
  slug: string;
}

const ViewIncrementer = ({ slug }: ViewIncrementerProps) => {
  const hasIncremented = useRef(false);

  useEffect(() => {
    // Prevent multiple increments in the same component instance
    if (hasIncremented.current) {
      console.log(`Already incremented for ${slug} in this component instance`);
      return;
    }

    const incrementViews = async () => {
      // Use sessionStorage instead of localStorage for better session management
      const viewedKey = `viewed_${slug}`;
      const hasViewed = sessionStorage.getItem(viewedKey);

      if (hasViewed) {
        console.log(`Already viewed ${slug} in this session`);
        return; // Already viewed in this session
      }

      try {
        console.log(`Incrementing views for blog: ${slug}`);
        const response = await fetch("/api/increment-views", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ slug }),
        });

        if (response.ok) {
          const result = await response.json();
          console.log(`Views incremented successfully for ${slug}. New count: ${result.views}`);
          // Mark as viewed in this session
          sessionStorage.setItem(viewedKey, "true");
          hasIncremented.current = true;
        } else {
          console.error("Failed to increment views:", response.status);
        }
      } catch (error) {
        console.error("Failed to increment views:", error);
      }
    };

    // Add a small delay to ensure the component is fully mounted
    const timer = setTimeout(() => {
      incrementViews();
    }, 100);

    return () => clearTimeout(timer);
  }, [slug]);

  return null; // This component doesn't render anything
};

export default ViewIncrementer;
