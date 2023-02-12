/* eslint-disable indent */
import { useState } from 'react'
import { validateEmail, validatePassword } from '@/helpers/inputs-validators'

const TYPES_VALIDATOR = {
  email: { validate: (value) => validateEmail(value) },
  password: { validate: (value) => validatePassword(value) }
}

export const useFormValidation = () => {
  const [errors, setErrors] = useState({})

  const handleErrorInputChange = ({ target }) => {
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
    setErrors({})
  }

  return [errors, handleErrorInputChange, reset]
}
