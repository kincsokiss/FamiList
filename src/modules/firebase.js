import { initializeApp } from "firebase/app";
import {
  getFirestore, collection, getDocs, 
  addDoc, doc,
  deleteDoc,
  updateDoc,
  getDoc
} from 'firebase/firestore';

class FirebaseDbModule{
    constructor(){
        const firebaseConfig = {
            apiKey: "AIzaSyB82mQoV7e2l0Na-GRYDZYxVC7eaqth8Rk",
            authDomain: "familist-c5615.firebaseapp.com",
            projectId: "familist-c5615",
            storageBucket: "familist-c5615.appspot.com",
            messagingSenderId: "381982770857",
            appId: "1:381982770857:web:7f6688d841e12e584bcbb8"
          };
          
          // initialize firebase app
          initializeApp(firebaseConfig);
          
    }

    storeDoc(collectionName, data) {

        //initialize services
        const dataBase = getFirestore();

        //collection reference
        const collectionReference = collection( dataBase, collectionName );

        addDoc(collectionReference, data)
        .then((docRef) => {
            return docRef.id;
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    async editDoc(collectionName, documentID, data){
        const dataBase = getFirestore();
        const docRef = doc(dataBase,collectionName,documentID);
        return updateDoc(docRef, data)
        .then((docRef) => {
            return docRef;
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    async destroyDoc(collectionName, docID){
        const dataBase = getFirestore();
        const docRef = doc(dataBase, collectionName, docID);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
                return deleteDoc(doc(dataBase, collectionName, docID))
            .then((docRef) => {
                    return docRef;
            })
            .catch(err => {
                console.log(err.message)
            })
        }
        else console.log('No such document!');
    }

    getDocs(collectionName){
        //initialize services
        const dataBase = getFirestore();

        //collection reference
        const collectionReference = collection( dataBase, collectionName );

        getDocs(collectionReference)
        .then((snapshot) => {
        let Users = []
        snapshot.docs.forEach((doc) => {
            Users.push({ ...doc.data(), id: doc.id })
        })
        })
        .catch(err => {
        console.log(err.message)
        })
        
    }

}

const firebaseDb = new FirebaseDbModule();

export default firebaseDb;