"use server"

import { revalidatePath } from "next/cache"
import { Post } from "./models"
import { connectDB } from "./utils"

export const addPost = async (formData) => {
  const { title, desc, userId, slug } = Object.fromEntries(formData)

  try {
    await connectDB()
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    })

    await newPost.save()

    console.log("saved to db")

    revalidatePath("/blog")
  } catch (error) {
    console.log(error)
    return { error: "Something went wrong" }
  }
}

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData)
  try {
    await connectDB()

    await Post.findByIdAndDelete(id)

    console.log("deleted from db")

    revalidatePath("/blog")
  } catch (error) {
    console.log(error)
    return { error: "Something went wrong" }
  }
}
