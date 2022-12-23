import ListItems from "../src/components/ListItems"
import { useContext } from "react"
import AppContext from "../src/components/AppContext"

const Home = () => {
  const { items, deleteItem } = useContext(AppContext)

  return (
    <div className="flex justify-center">
      <ListItems items={items} deleteItem={deleteItem} />
    </div>
  )
}

export default Home
