"use server"

import { revalidatePath } from "next/cache"
import { Post, User } from "./models"
import { connectDB } from "./utils"
import { signIn, signOut } from "./auth"
import bcrypt from "bcryptjs"

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

export const handleGithubLogin = async () => {
  await signIn("github")
}

export const handleLogout = async () => {
  await signOut("github")
}

export const register = async (previousState, formData) => {
  const { username, email, password, img, passwordRepeat } = Object.fromEntries(formData)

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" }
  }

  try {
    await connectDB()

    const user = await User.findOne({ username })

    if (user) {
      return { error: "Username already exists" }
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    })
    await newUser.save()
    console.log("saved to db")

    return { success: true }
  } catch (err) {
    console.log(err)
    return { error: "Something went wrong" }
  }
}

export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData)

  try {
    await signIn("credentials", { username, password })
  } catch (err) {
    console.log(err)
    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" }
    }
    throw err
  }
}
