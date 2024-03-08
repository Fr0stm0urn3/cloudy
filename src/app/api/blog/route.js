import { connectDB } from "@/lib/utils"
import { Post } from "@/lib/models"
import { NextResponse } from "next/server"

export const GET = async (response) => {
  try {
    await connectDB()

    const posts = await Post.find()

    return NextResponse.json(posts)
  } catch (error) {
    console.log(error)
    throw new Error("Failed to fetch posts!")
  }
}
