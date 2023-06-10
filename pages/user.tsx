import { useRouter } from 'next/router'
import React from 'react'


//demo o client side
function UserPage() {
  const router = useRouter()
  
  console.log("router", router.query)

  return (
    <div>UserPage</div>
  )
}

export default UserPage