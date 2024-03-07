import Image from "next/image"
import AboutImage from "../../../public/about.png"
import styles from "./about.module.css"

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image src={AboutImage} fill alt="" priority />
      </div>
    </div>
  )
}

export default AboutPage
