import { createContext, useState } from 'react'

export const counterContextObj = createContext()

function ContextProvider1({ children }) {
  const [counter1, editCounter1] = useState(0)

  const increment = () => {
    editCounter1(counter1 + 1)
    }

  const decrement = () => {
    editCounter1(counter1 - 1)
    }

  return (
  <counterContextObj.Provider value={{ counter1, increment, decrement }}>
    {children}
  </counterContextObj.Provider>
  )
}

export default ContextProvider1