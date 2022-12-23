import { nameValidator } from "../src/validators/validators"
import * as yup from "yup"
import { useCallback, useContext, useState } from "react"
import AppContext from "../src/components/AppContext"
import { Formik } from "formik"
import FormField from "../src/components/formUI/FormField"
import Button from "../src/components/Button"
import Popup from "../src/components/Popup"
import Link from "next/link"

const initialValues = {
  id: 0,
  name: "",
  completed: false,
}

const validationSchema = yup
  .object()
  .shape({
    name: nameValidator.required(),
  })
  .required()

const NewItem = () => {
  const { addNewItem } = useContext(AppContext)

  const handleFormSubmit = useCallback(
    ({ name, completed }, { resetForm }) => {
      addNewItem({ id: Math.floor(Math.random() * 1000000), name, completed })
      resetForm()
    },
    [addNewItem]
  )

  const [buttonPopup, setButtonPopup] = useState(false)

  return (
    <div className="flex justify-center grid grid-rows-4 grid-flow-col gap-4">
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ isSubmitting, isValid, handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-4 p-4"
          >
            <FormField name="name" type="text">
              Name
            </FormField>
            <Button
              type="submit"
              onClick={() => setButtonPopup(true)}
              disabled={isSubmitting || !isValid}
              variant="btnValidation"
              size="lg"
            >
              ADD NEW TODO
            </Button>
          </form>
        )}
      </Formik>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h1 className=" font-bold leading-7 text-gray-900 sm:text-xl sm:truncate flex items-center p-2">
          Your item has been added !
        </h1>
        <Link
          className="flex justify-end m-1 p-1 font-bold text-blue-700 underline underline-offset-1"
          href="/"
        >
          BACK
        </Link>
      </Popup>
    </div>
  )
}

export default NewItem
