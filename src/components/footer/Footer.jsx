import styles from "./footer.module.css"

const Footer = () => {
  const currYear = new Date().getFullYear()

  return (
    <div className={styles.container}>
      <div className={styles.logo}>CloudyDev</div>
      <div className={styles.text}>
        Cloudy creative thoughts agency &copy; {currYear} All rights reserved.
      </div>
    </div>
  )
}

export default Footer
