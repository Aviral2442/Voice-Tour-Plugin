import React from 'react'

const page = () => {
  return (
    <div>
      <p style={{ fontWeight: props.priority ? "bold" : "normal" }}>
        {props.name}
      </p>
    </div>
  )
}

export const ShowUser = props => {
  return <PrintName name="Ned" />
}

let username = "Cersei"
export const ShowStoredUser = props => {
  return <PrintName name={username} priority />
}

import { useState } from "react"

export const CounterExample = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => setCount(count + 1)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default page