import {
  auth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from '@/database/firebase'
import toast from 'react-hot-toast'

const ERRORS_MESSAGES = {
  'Firebase: Error (auth/email-already-in-use).':
    'The email is already registered',
  'Firebase: Error (auth/wrong-password).':
    'The password or username is invalid'
}

export async function loginWithGoogle() {
  try {
    const googleProvider = new GoogleAuthProvider()

    const response = await signInWithPopup(auth, googleProvider)
    const { displayName, email, photoURL, uid } = response.user
    return { displayName, email, photoURL, uid }
  } catch (err) {
    toast.error(ERRORS_MESSAGES[err.message])
  }
}

export async function registerWithCredentials(email, password) {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password)
    const { displayName, photoURL, uid } = response.user
    return { displayName, email, photoURL, uid }
  } catch (err) {
    toast.error(ERRORS_MESSAGES[err.message])
  }
}

export async function loginWithCredentials(email, password) {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password)
    const { displayName, photoURL, uid } = response.user
    return { displayName, email, photoURL, uid }
  } catch (err) {
    toast.error(ERRORS_MESSAGES[err.message])
  }
}
