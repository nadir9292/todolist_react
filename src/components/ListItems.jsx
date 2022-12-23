import Link from "next/link"
import { PlusIcon, TrashIcon, PencilIcon } from "@heroicons/react/24/solid"

const ListItems = (props) => {
  const { items, deleteItem } = props

  return (
    <div>
      <h1 class="mt-5 mb-3 font-semibold text-3xl text-gray-900 dark:text-white">
        Todo List
      </h1>
      <div className="grid grid-rows-1 grid-flow-col">
        <Link href="/newItem">
          <PlusIcon className="h-8 w-8 text-green-600" />
        </Link>
        <PencilIcon className="h-8 w-8 text-gray-400" />
        <TrashIcon className="h-8 w-8 text-gray-400" />
      </div>
      <ul className="w-48 mt-3 px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-lg border-4 shadow-lg border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {items.map(({ id, name, completed }, index) => (
          <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
            <div class="flex items-center pl-3">
              <input
                className="w-7 h-7 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                id={index}
                type="checkbox"
                defaultChecked={completed}
              />
              <label
                className="py-3 uppercase ml-2 w-full text-xl font-medium text-gray-900 dark:text-gray-300"
                for={index}
              >
                {name}
              </label>
              <button onClick={() => deleteItem(id)}>
                <TrashIcon className="h-8 w-6 text-red-600 flex justify-end" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListItems
