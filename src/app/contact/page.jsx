import Image from "next/image"
import styles from "./contact.module.css"
import contactImg from "../../../public/contact (1).png"

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={contactImg} alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" className={styles.input} placeholder="Name and Surname" />
          <input type="text" className={styles.input} placeholder="Email Address" />
          <input
            type="text"
            className={styles.input}
            placeholder="Phone Number (Optional)"
          />
          <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
