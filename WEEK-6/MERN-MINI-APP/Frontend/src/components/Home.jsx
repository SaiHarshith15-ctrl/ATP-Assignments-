import {useContext} from 'react'
import { counterContextObj } from '../contexts/contextProvider'
import { useCounterStore } from '../store/useCounterStore'

function Home() {

  const {newCounter,incrementCounter,decrementCounter,reset}=useCounterStore()
  console.log("Home")

  const {counter,changeContext} = useContext(counterContextObj)
  return (
    <div>
      <h1 className='text-5xl'>Counter : {counter} </h1>
      <button onClick={changeContext} className='bg-blue-600 p-5 '>Increase</button>

      <h1 className='text-5xl'>New Counter : {newCounter} </h1>
      <button onClick={incrementCounter} className='bg-green-600 p-5 '>Increment</button>
      <button onClick={decrementCounter} className='bg-violet-600 p-5 '>Decrement</button>
    </div>
  )
}

export default Home