import {
  db,
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  query,
  where
} from '@/database/firebase'

export async function createTask(data) {
  try {
    const response = await addDoc(collection(db, 'tasks'), data)
    const { id } = response
    return { id, ...data }
  } catch (err) {
    console.log(err.message)
  }
}

export async function completeTask(id, completed) {
  try {
    const response = await updateDoc(doc(db, 'tasks', id), {
      completed
    })

    return response
  } catch (err) {
    console.log(err.message)
  }
}

export async function categoryTask(id, category) {
  try {
    const response = await updateDoc(doc(db, 'tasks', id), {
      category
    })

    return response
  } catch (err) {
    console.log(err.message)
  }
}

export async function deleteTask(id) {
  try {
    const response = await deleteDoc(doc(db, 'tasks', id))
    return response
  } catch (err) {
    console.log(err.message)
  }
}

export async function getAllTask(uid) {
  try {
    const q = query(collection(db, 'tasks'), where('userId', '==', uid))
    const response = await getDocs(q)

    /* Ajusta la respuesta por cada documento anexando el id del doc */
    const data = response.docs.map((doc) => {
      const id = doc.id
      const content = doc.data()
      return { id, ...content }
    })
    return data
  } catch (err) {
    console.log(err.message)
  }
}

export function convertDocument(docs) {
  const data = docs.map((doc) => {
    const id = doc.id
    const content = doc.data()
    return { id, ...content }
  })
  return data
}
