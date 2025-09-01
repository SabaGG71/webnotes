import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format view count to readable format
export function formatViewCount(views: number): string {
  if (views < 1000) {
    return views.toString();
  } else if (views < 1000000) {
    const k = (views / 1000).toFixed(1);
    return k.endsWith(".0") ? `${k.slice(0, -2)}K` : `${k}K`;
  } else {
    const m = (views / 1000000).toFixed(1);
    return m.endsWith(".0") ? `${m.slice(0, -2)}M` : `${m}M`;
  }
}

// Format time ago in Georgian
export function formatTimeAgo(dateString: string): string {
  const now = new Date();
  const date = new Date(dateString);
  const diffInMs = now.getTime() - date.getTime();

  const seconds = Math.floor(diffInMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return years === 1 ? "1 წლის წინ" : `${years} წლის წინ`;
  } else if (months > 0) {
    return months === 1 ? "1 თვის წინ" : `${months} თვის წინ`;
  } else if (days > 0) {
    return days === 1 ? "1 დღის წინ" : `${days} დღის წინ`;
  } else if (hours > 0) {
    return hours === 1 ? "1 საათის წინ" : `${hours} საათის წინ`;
  } else if (minutes > 0) {
    return minutes === 1 ? "1 წუთის წინ" : `${minutes} წუთის წინ`;
  } else {
    return seconds < 30 ? "ახლახან" : `${seconds} წამის წინ`;
  }
}
