import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Inicializamos Firebase para usar los servicios.
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const fbFunctions = getFunctions(app);

// Verificar si se deben conectar los emuladores
const useEmulator = import.meta.env.VITE_FIREBASE_USE_EMULATOR === "true";

if (useEmulator) {
  // Conectar a los emuladores solo si está habilitado explícitamente
  connectAuthEmulator(auth, import.meta.env.VITE_FIREBASE_AUTH_EMULATOR_URL);

  connectFirestoreEmulator(
    db,
    import.meta.env.VITE_FIREBASE_FIRESTORE_EMULATOR_HOST,
    Number(import.meta.env.VITE_FIREBASE_FIRESTORE_EMULATOR_PORT)
  );

  connectFunctionsEmulator(
    fbFunctions,
    import.meta.env.VITE_FIREBASE_FUNCTIONS_EMULATOR_HOST,
    Number(import.meta.env.VITE_FIREBASE_FUNCTIONS_EMULATOR_PORT)
  );
  console.log("Firebase Emulators Connected!");
}
