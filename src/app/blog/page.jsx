import styles from "./blog.module.css"
import PostCard from "@/components/postCard/PostCard"
import { getPosts } from "@/lib/data"

const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/blog")

    if (!res.ok) {
      throw new Error("Something went wrong")
    }

    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const BlogPage = async () => {
  // const posts = await getData()

  // const posts = await getPosts()

  const posts = await getData()

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  )
}

export default BlogPage
