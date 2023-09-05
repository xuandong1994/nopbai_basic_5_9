import React, { useState } from 'react'
import BoxSx from './views/box'

export default function Index() {
    const [text, setText] = useState("")
    const [letter, setLetter]= useState("")
    const [paragraph, setParagraph] = useState("")
    let Word =text 
  return (
    <div>
      <BoxSx/>
    </div>
  )
}
