import { initializeApp, FirebaseOptions  } from "firebase/app";
import { getFirestore, collection, addDoc} from 'firebase/firestore'


const config: FirebaseOptions = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASURMENT_ID,
};

const app = initializeApp(config);
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
  console.log("In addMember")
  console.log("Checking db", db)
  console.log("Chack env...", process.env.FIREBASE_API)
  try {
    console.log("Trying...")
    console.log(memberData)
    const docRef = await addDoc(collection(db, 'Members'), {
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