<template>
    <main>
        <ion-card>
            <form @submit="formSubmit">
                <h1>Create an Account</h1>
                <ion-input class="text" label="Name" placeholder="Enter name" v-model="name" required="required"></ion-input>
                <ion-input class="text" label="Age" type="number" placeholder="Enter age" v-model="age" required="required"></ion-input>
                <ion-input class="text" label="Phone number" v-maskito="phoneOptions" v-model="phonenumber" required="required"></ion-input>
                <ion-input class="text" label="Email" placeholder="Enter email" type="email" v-model="email" required="required"></ion-input>
                <ion-input class="text" label="Password" placeholder="Enter password" type="password" v-model="password" required="required"></ion-input>
                <ion-button type="submit">Create</ion-button>
            </form>
        </ion-card>
    </main>
</template>   

<script setup>
    import users from '../modules/users.js';
    import { toastController } from '@ionic/vue';
    import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
    import { IonInput, IonButton, IonCard } from '@ionic/vue';
    import { ref } from 'vue';  
    import { useRouter } from 'vue-router';
    import { maskito as vMaskito} from '@maskito/vue';

    const router = useRouter();
    const name = ref('');
    const age = ref('');
    const phonenumber = ref('');
    const rank = ref('child');
    const email = ref('');
    const password = ref('');
    const auth = getAuth();
    const userID = ref('');

    const phoneOptions = {
        mask: ['+', '4', '0' , ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
        elementPredicate: (el) => {
        return new Promise((resolve) => {
            requestAnimationFrame(async () => {
            const input = await el.getInputElement();
            resolve(input);
            });
        });
        },
    }

    async function presentToast(position = 'middle'){
        const toast = await toastController.create({
            message: 'User has been created!',
            duration: 1500,
            position: position
        });

        await toast.present();
    }

    function formSubmit(e) {
        e.preventDefault();

        if(age.value >= 18){
            rank.value = "adult";
        } 

        addUserToDB();
        createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            console.log(data, "Successfully registered!");
            console.log(auth.currentUser);
                 
            presentToast();

            // sendEmailVerification(auth.currentUser)
            //     .then(() => {
            //         console.log("Email verification sent!")
            //     })
            router.push('/main-page')
        }) 
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
        })
        

        resetForm();
    }

    function addUserToDB(){
        console.log(name.value, age.value, phonenumber.value, rank.value, email.value, password.value);
        userID.value = users.addUser(name.value, age.value, rank.value, phonenumber.value, email.value);

    }
    
    function resetForm() {
        name.value = " ";
        age.value = 0;
        phonenumber.value = "";
        rank.value = "";
        email.value = "";
        password.value = "";
    }


</script>

<style scoped>
    ion-card {
        text-align: center;
        background-color: #fae6dc;
        font-weight: bold;
        color: black;
        font-family: 'Poppins', sans-serif;
    }
    .text{
        color: #191514;
        font-weight: bold;
        font-family: 'Poppins', sans-serif;
        font-size: 13pt;
    }
    

    h1 {
        color: #191514;
        font-weight: bold;
        font-family: 'Poppins', sans-serif;
    }

    ion-button {
        color: #f7d6c5;
        text-decoration: none;
        background-color: #312b27;
        
        border-radius: 10px;
        font-family: 'Poppins', sans-serif;
        &:hover {
            background-color: #191514;
        }
    }

    main{
        margin-top: 4rem;
    }
</style>