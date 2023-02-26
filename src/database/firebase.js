import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import {
  getFirestore,
  doc,
  deleteDoc,
  addDoc,
  collection,
  getDocs,
  getDoc,
  updateDoc,
  query,
  where,
  onSnapshot
} from 'firebase/firestore'
import { firebaseConfig } from './config'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'

/* Crea la instancia de firebase */
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)

export {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  doc,
  updateDoc,
  deleteDoc,
  addDoc,
  collection,
  getDocs,
  getDoc,
  query,
  where,
  onSnapshot
}
