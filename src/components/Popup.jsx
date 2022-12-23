import { XCircleIcon } from "@heroicons/react/24/solid"

const Popup = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner bg-green-500 rounded p-2">
        <button onClick={() => props.setTrigger(false)}>
          <XCircleIcon className="h-8 w-8 font-bold text-red-600" />
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  )
}

export default Popup
