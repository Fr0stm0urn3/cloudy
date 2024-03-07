"use client"

import styles from "./navLink.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({ link }) => {
  const pathname = usePathname()

  return (
    <Link
      href={link.path}
      className={`${styles.container} ${pathname === link.path && styles.active}`}
    >
      {link.title}
    </Link>
  )
}

export default NavLink
