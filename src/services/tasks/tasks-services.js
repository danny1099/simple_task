import {
  db,
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
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

export async function getAllTask() {
  try {
    const response = await getDocs(collection(db, 'tasks'))
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
