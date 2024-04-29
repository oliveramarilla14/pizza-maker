import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { db } from './firebase'

export const getUser = async (username = '') => {
  if (!username) return
  try {
    const q = query(collection(db, 'users'), where('username', '==', username))
    const querySnapshot = await getDocs(q)
    const data = []
    querySnapshot.forEach((doc) => {
      data.push(doc.data())
    })
    return data
  } catch (error) {
    console.log(error)
  }
}

export const registerUser = async (user) => {
  try {
    await addDoc(collection(db, 'users'), user)
  } catch (error) {
    console.log(error)
  }
}
