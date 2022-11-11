import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASURMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export interface Member {
    name: String,
    surname: String,
    mail: String,
    uni: String,
    field: String,
    gard: Number
}

const addMember = async (memberData: Member) => {
  try {
    const docRef = await addDoc(collection(db, 'members'), {
      name: memberData.name,
      surname: memberData.surname,
      mail: memberData.mail,
      uni: memberData.uni,
      field: memberData.field,
      gard: memberData.gard
    })
    console.log('Document written with ID:', docRef.id)
  } catch (error) {
    console.error('Error adding document:', error)
  }
}

export {addMember}