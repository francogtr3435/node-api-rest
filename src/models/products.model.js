import { db } from './data.js';
import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';

const productsCollection = collection(db, 'products');

export const getAllProducts = async () => {
  try {
    const snapshot = await getDocs(productsCollection);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error(error);
  }
};

export const getProductById = async (id) => {
  try {
    const docRef = doc(productsCollection, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    }
    return null;
  } catch (error) {
    console.error(error);
  }
};

export const createProduct = async (data) => {
  try {
    const docRef = await addDoc(productsCollection, data);
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error('Error al crear producto:', error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);
    if (!snapshot.exists()) return false;

    await deleteDoc(productRef);
    return true;
  } catch (error) {
    console.error(error);
  }
};

export const updateProduct = async (id, data) => {
  try {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef)
    if (!snapshot.exists()) return false;

    await updateDoc(productRef, data);
    const updated = await getDoc(productRef);
    return { id: updated.id, ...updated.data() };
  } catch (error) {
    console.error('Error al actualizar ', error);
    throw error;
  }
};

