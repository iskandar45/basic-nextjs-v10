import { useRouter } from "next/router"
import React from "react"

export default function Header() {
  const router = useRouter()

  return (
    <div>
      <h2>My App</h2>
      <ul>
        <li onClick={() => router.push("/")}>Home</li>
        <li onClick={() => router.push("/user")}>User</li>
        <li onClick={() => router.push("/blog")}>Blogs</li>
      </ul>
      <hr />
    </div>
  )
}
