import React from 'react'
import {useContext} from 'react'
import { countercontext } from '../context/context'

function Component1() {
    const counter = useContext(countercontext)
  return (
    <div>Counter: {counter}</div>
  )
}

export default Component1