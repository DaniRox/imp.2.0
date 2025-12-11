// lib/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore'; // Agregamos funciones específicas de Firestore
import { getAuth } from 'firebase/auth'; // Opcional: Para autenticación
import { getStorage } from 'firebase/storage'; // Opcional: Para almacenamiento

// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAR7dCl4ykJ98Ae_iK_4WH9a_NLxd5P9c8",
    authDomain: "impulzzeweb.firebaseapp.com",
    projectId: "impulzzeweb",
    storageBucket: "impulzzeweb.firebasestorage.app",
    messagingSenderId: "492061358000",
    appId: "1:492061358000:web:242fe82b32ebc7a7cfc875"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

// Opcional: Inicializa Autenticación
const auth = getAuth(app);

// Opcional: Inicializa Storage
const storage = getStorage(app);

// Exporta Firestore, Autenticación y Storage
export { db, auth, storage, collection, addDoc };
