import { createContext } from "react"

export const Context = createContext()

export const ContextApp = ({children}) => {
    
  return (
    <Context.Provider>
        {children}
    </Context.Provider>
  )
}
