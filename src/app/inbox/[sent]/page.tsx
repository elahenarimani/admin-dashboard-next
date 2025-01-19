// "use client"
import React from 'react'
// import { usePathname } from 'next/navigation'

const SentPage = ({params}:{params:{sent:string}}) => {
    // const pathName = usePathname()
    // console.log(pathName)
  return (
    <div>
      <p>it is sent page</p>
    </div>
  )
}

export default SentPage
