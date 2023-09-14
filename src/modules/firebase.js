import { initializeApp } from "firebase/app";
import {
  getFirestore, collection, getDocs, 
  addDoc, doc,
  deleteDoc,
  updateDoc,
  getDoc,
  query,
  where
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
          
          initializeApp(firebaseConfig);
          
    }

    storeDoc(collectionName, data) {

        const dataBase = getFirestore();
        const collectionReference = collection( dataBase, collectionName );

        return addDoc(collectionReference, data)
        .then((docRef) => {
            return docRef.id;
        })
        .catch(err => {
            console.log(err.message)
            return err;
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
            .catch(err => {
                console.log('destroyDoc has failed: ',err.message);
                return err;
            })
        }
        else console.log('No such document!');
    }

    getDocs(collectionName){
        
        const dataBase = getFirestore();
        const collectionReference = collection( dataBase, collectionName );

        return getDocs(collectionReference)
        .then((snapshot) => {
        let collectionName = []
        snapshot.docs.forEach((doc) => {
            collectionName.push({ ...doc.data(), id: doc.id })
        })
        return collectionName;
        })
        .catch(err => {
        console.log(err.message)
        return err;
        });
    }


    async searchDocbyID(collectionName, docID){
        const dataBase = getFirestore();
        const docRef = doc(dataBase, collectionName, docID);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            return docSnap.data();
        }
        else{
            console.log('No such document');
        }
    }

    async searchDocbyUID(collectionName, uid){
        const dataBase = getFirestore();
        const docRef = collection(dataBase, collectionName);
        const q = query(docRef, where("uid", "==", uid));
        const querySnapshot = await getDocs(q);
        if(!querySnapshot.empty){
            const docData = querySnapshot.docs[0].id;
            return docData;
        } else {
            console.log('No such document')
            return null;
        }
    }

}

const firebaseDb = new FirebaseDbModule();

export default firebaseDb;