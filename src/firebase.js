// Traigo una funcion que me conecta la app de react (codigo del front end) con la plataforma de firebase
import { initializeApp } from "firebase/app";
// Traigo una funcion que me conecta con el servicio de base de datos de firebase
import {getFirestore} from "firebase/firestore";

// Estas son mis llaves de acceso
const firebaseConfig = {
  apiKey: "AIzaSyCL5EeUbwLADIdIZ7OSwUnzNgIy8CmGrj4",
  authDomain: "h-danna-baterias-y-radiadores.firebaseapp.com",
  projectId: "h-danna-baterias-y-radiadores",
  storageBucket: "h-danna-baterias-y-radiadores.appspot.com",
  messagingSenderId: "1056619144570",
  appId: "1:1056619144570:web:91f4cebdeec67f937762c3"
};

// Esta es una variable que representa la plataforma en si
const app = initializeApp(firebaseConfig);

// Esta es una variable que representa la pestana "Firestore database o la base de datos"
export const db = getFirestore(app);

