import Link from "next/link"

const Links = () => {
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

  return (
    <div>
      {links.map((link, i) => (
        <Link key={i} href={link.path}>
          {link.title}
        </Link>
      ))}
    </div>
  )
}

export default Links
