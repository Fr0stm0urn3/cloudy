import Image from "next/image"
import styles from "./singlePost.module.css"

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={"/"} fill alt="" className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image src={"/"} alt="" width={50} height={50} className={styles.avatar} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum optio in
          libero. Incidunt vero, minima consectetur repellendus iste enim nobis expedita
          modi fugiat veritatis dolorem pariatur aliquid quisquam repellat!
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage
