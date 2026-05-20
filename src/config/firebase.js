import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}

// Check if we have at least the essential config
const isConfigValid = firebaseConfig.apiKey && firebaseConfig.projectId

let db = null
let analytics = null

if (isConfigValid) {
  const app = initializeApp(firebaseConfig)
  db = getFirestore(app)
  analytics = typeof window !== 'undefined' ? getAnalytics(app) : null
} else {
  console.warn("Firebase config is missing or invalid. Check your .env file.")
  // Mock db for development if config is missing (optional, or just handle null)
  db = { 
    collection: () => ({ 
      add: () => Promise.resolve({ id: 'mock-id' }) 
    }) 
  }
}

export { db, analytics }
