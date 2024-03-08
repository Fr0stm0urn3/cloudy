import { Post, User } from "./models"
import { connectDB } from "./utils"
import { unstable_noStore as noStore } from "next/cache"

//Temporary Data
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
// ]

// const posts = [
//   { id: 1, title: "Post 1", body: ".....", userId: 1 },
//   { id: 2, title: "Post 2", body: ".....", userId: 2 },
//   { id: 3, title: "Post 3", body: ".....", userId: 3 },
//   { id: 4, title: "Post 4", body: ".....", userId: 4 },
// ]

export const getPosts = async () => {
  try {
    await connectDB()

    const posts = await Post.find()

    return posts
  } catch (error) {
    console.log(error)
    throw new Error("Failed to fetch posts!")
  }
}

export const getPost = async (slug) => {
  try {
    await connectDB()

    const post = await Post.findOne({ slug })

    return post
  } catch (error) {
    console.log(error)
    throw new Error("Failed to fetch posts!")
  }
}

export const getUser = async (id) => {
  noStore()
  try {
    await connectDB()

    const user = await User.findById(id)

    return user
  } catch (error) {
    console.log(error)
    throw new Error("Failed to fetch posts!")
  }
}

export const getUsers = async () => {
  try {
    await connectDB()

    const users = await User.find()

    return users
  } catch (error) {
    console.log(error)
    throw new Error("Failed to fetch posts!")
  }
}
