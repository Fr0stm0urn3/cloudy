"use client"

import styles from "./links.module.css"
import NavLink from "./navLink/NavLink"
import { useState } from "react"

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
]

const Links = () => {
  const [open, setOpen] = useState(false)

  const session = true
  const isAdmin = true

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link, i) => (
          <NavLink link={link} key={i} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink link={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink link={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>
        Menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link, i) => (
            <NavLink link={link} key={i} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Links
