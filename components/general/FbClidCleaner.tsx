"use client";
import { useEffect } from "react";

export default function FbclidCleaner() {
  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.searchParams.has("fbclid")) {
      url.searchParams.delete("fbclid");
      window.history.replaceState(null, "", url.href);
    }
  }, []);

  return null;
}
