import { createContext, useCallback, useState } from "react"

const initialState = {
  items: [
    {
      id: 1,
      name: "call",
      completed: false,
    },
    {
      id: 2,
      name: "meeting",
      completed: false,
    },
  ],
}

export const AppContext = createContext(null)

export const AppContextProvider = (props) => {
  const [state, setState] = useState(initialState)
  const addNewItem = useCallback(({ id, name, completed }) => {
    setState((currentState) => ({
      ...currentState,
      items: [...currentState.items, { id, name, completed }],
    }))
  }, [])

  const deleteItem = (id) => {
    setState((current) => ({
      ...current,
      items: current.items.filter((item) => item.id !== id),
    }))
  }

  return (
    <AppContext.Provider
      {...props}
      value={{ items: state.items, addNewItem, deleteItem }}
    />
  )
}

export default AppContext
