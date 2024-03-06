import Link from "next/link"

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Sorry, the page you are looking for does not exit.</p>
      <Link href={"/"}>Back To Home</Link>
    </div>
  )
}

export default NotFound
