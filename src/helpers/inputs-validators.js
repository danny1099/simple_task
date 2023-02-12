export const validateEmail = (value) => {
  if (!value) {
    return { message: '', status: '' }
  }

  const isValid = value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)
  return {
    message: isValid ? '' : 'Enter a valid email',
    status: isValid ? '' : 'error'
  }
}

export const validatePassword = (value) => {
  if (!value) {
    return { message: '', status: '' }
  }

  const isValid = value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/)
  return {
    message: isValid
      ? ''
      : 'Must contain at least min 8 characters, one upper letter and least one number',
    status: isValid ? '' : 'error'
  }
}

export const validateOnlyText = (value) => {
  if (!value) {
    return { message: '', status: '' }
  }

  const isValid = value.match(/^(?=.*[a-zA-Z])$/)
  return {
    message: isValid ? '' : 'Must contain only letters',
    status: isValid ? '' : 'error'
  }
}
