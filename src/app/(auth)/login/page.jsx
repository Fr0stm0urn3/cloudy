import { FaGithub } from "react-icons/fa"
import { handleGithubLogin } from "@/lib/actions"
import LoginForm from "@/components/loginForm/LoginForm"
import styles from "./login.module.css"

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>
            Login with GitHub <FaGithub className={styles.githubIcon} size={20} />
          </button>
        </form>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage
