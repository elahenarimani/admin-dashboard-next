"use client"
import React, { useState } from 'react'
interface IcompEmail {
    to:string,
    subject :string,
    content:string,
    id: number
}
const ComposeData = () => {
    const [compEmail , setCompEmail] = useState<IcompEmail[]>([])
    const [composeOpen , setComposeOpen] = useState <Boolean> (false)
    
  return (
    <div>
      
    </div>
  )
}

export default ComposeData

