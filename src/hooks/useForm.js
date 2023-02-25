/* eslint-disable indent */
import { useState } from 'react'
import { validateEmail, validatePassword } from '@/helpers/inputs-validators'

const TYPES_VALIDATOR = {
  email: { validate: (value) => validateEmail(value) },
  password: { validate: (value) => validatePassword(value) },
  text: { validate: (value) => {} }
}

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value
    })

    /* Validate errors from type field */
    if (target.type !== 'checkbox') {
      target.value
        ? setErrors({
            ...errors,
            [target.name]: TYPES_VALIDATOR[target.type].validate(target.value)
          })
        : reset()
    }
  }

  const reset = () => {
    setValues({})
    setErrors({})
  }

  return [values, handleInputChange, errors, reset]
}
