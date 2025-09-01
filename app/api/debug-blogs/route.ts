import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET() {
  try {
    const blogs = await prisma.blogs.findMany({
      select: {
        id: true,
        title: true,
        slug: true,
        views: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      message: "Current blog view counts:",
      blogs: blogs,
      totalBlogs: blogs.length,
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}
