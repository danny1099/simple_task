import {
  auth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from '@/database/firebase'

export async function loginWithGoogle() {
  try {
    const googleProvider = new GoogleAuthProvider()

    const response = await signInWithPopup(auth, googleProvider)
    const { displayName, email, photoURL, uid } = response.user
    return { displayName, email, photoURL, uid }
  } catch (err) {
    console.log(err.message)
  }
}

export async function registerWithCredentials(email, password) {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password)
    const { displayName, photoURL, uid } = response.user
    return { displayName, email, photoURL, uid }
  } catch (err) {
    console.error(err)
  }
}

export async function loginWithCredentials(email, password) {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password)
    const { displayName, photoURL, uid } = response.user
    return { displayName, email, photoURL, uid }
  } catch (err) {
    console.error(err)
  }
}
