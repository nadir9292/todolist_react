import classNames from "classnames"

const Input = (props) => {
  const { className, ...otherProps } = props

  return (
    <input
      {...otherProps}
      className={classNames(
        "block mt-2 border-2 border-gray-500 py-1 px-2",
        className
      )}
    />
  )
}

export default Input
