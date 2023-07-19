import { createApp } from 'vue';
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { initializeApp } from "firebase/app";
import {
  getFirestore, collection, getDocs
} from 'firebase/firestore';  
import UserSettings from '@/views/UserSettings.vue';
import MainPage from '@/views/MainPage.vue';
import Calendar from '@/views/Calendar.vue';
import ToDoList from '@/views/ToDoList.vue';


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

//initialize services
const dataBase = getFirestore();

//collection reference
const collectionReference = collection( dataBase, 'Users' );

//get collection data
getDocs(collectionReference)
  .then((snapshot) => {
    let Users = []
    snapshot.docs.forEach((doc) => {
      Users.push({ ...doc.data(), id: doc.id })
    })
    console.log(Users)
  })
  .catch(err => {
    console.log(err.message)
  })
  
  const routes = [
    { path: '/', name: 'mainpage', component: MainPage },
    { path: '/User-Settings', component: UserSettings },
    { path: '/calendar', component: Calendar },
    { path: '/to-do-list', component: ToDoList }
  ];
  
    const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

  const app = createApp({})
  
  app.use(router)
  
  app.mount('#app')
  
  export default router


