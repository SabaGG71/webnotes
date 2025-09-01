import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const { slug } = await request.json();

    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    console.log(`API: Incrementing views for slug: ${slug}`);

    // Get current blog to see current view count
    const currentBlog = await prisma.blogs.findUnique({
      where: { slug },
      select: { views: true },
    });

    console.log(`API: Current views for ${slug}: ${currentBlog?.views}`);

    // Increment the views count for the blog post
    const updatedBlog = await prisma.blogs.update({
      where: { slug },
      data: {
        views: {
          increment: 1,
        },
      },
    });

    console.log(`API: Updated views for ${slug}: ${updatedBlog.views}`);

    return NextResponse.json({ views: updatedBlog.views });
  } catch (error) {
    console.error("Error incrementing views:", error);
    return NextResponse.json({ error: "Failed to increment views" }, { status: 500 });
  }
}
