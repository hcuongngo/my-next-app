import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link'

function Post() {
  const router = useRouter()

  console.log("router in port", router.query.id);

  const handleOnclick = () => {
    router.push("/")
  }
  return (
    <>
      <div>posts</div>
      <Link href={'/'} >
        go to home page
      </Link>
      <button onClick={handleOnclick}>go to home page</button>
</>
  )
}

export default Post
