import { use } from 'react'
import  { useState } from 'react'

const StateHandling = () => {
    const [counter,setCounter]=useState(20);
  return (
    <div> 
        <h2>Counter value={counter}</h2>
    </div>
  )
}

export default StateHandling