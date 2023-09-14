<template>
    <main class="dimensionsback_color">
        <ion-card>
            <form ref="form" @submit="formSubmit">
                <h1>Create an Account</h1>
                <ion-input class="text" label="Name" placeholder="Enter name" ref="name" required="required"></ion-input>
                <ion-input class="text" label="Age" type="number" placeholder="Enter age" ref="age" required="required"></ion-input>
                <ion-input class="text" label="Phone number" type="tel" placeholder="Enter number" ref="phonenumber" required="required"></ion-input>
                
                <ion-input class="text" label="Email" placeholder="Enter email" type="email" ref="email" required="required"></ion-input>
                <ion-input class="text" label="Password" placeholder="Enter password" type="password" ref="password" required="required"></ion-input>
                <ion-button type="submit">Create</ion-button>
                
            </form>
        </ion-card>
    </main>
</template>   

<script>
    import users from '../modules/users.js';
    import { toastController } from '@ionic/vue';
    import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
    // import firebase from "firebase";

    export default({
    name:'RegisterPage',

    data() {
        return {
            name: '',
            age: '',
            phonenumber: '',
            rank: '',
            email: '',
            password: ''
        };
    },

    methods: {
        async presentToast(position = 'middle'){
                const toast = await toastController.create({
                    message: 'User has been created!',
                    duration: 1500,
                    position: position
                });

                await toast.present();
        },

        formSubmit(e) {
            e.preventDefault();
            const name = this.$refs.name.value;
            const age = this.$refs.age.value;
            const phonenumber = this.$refs.phonenumber.value;
            let rank = "child";
            const email = this.$refs.email.value;
            const password = this.$refs.password.value;
            this.name = this.$refs.name.value;

            if(age >= 18) rank = "adult";

            users.addUser(name, age, rank, phonenumber);

            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
            .then((data) => {
                console.log(data, "Successfully registered!");
                console.log(auth.currentUser)

                const user = auth.currentUser;
                const uid = user.uid;

                users.addUser(name, age, rank, phonenumber, uid);
                this.presentToast();
                this.$router.push('/main-page')
            }) 
            .catch((error) => {
                console.log(error.code);
                alert(error.message);
            })

            this.$refs.form.reset();
        },


    },
    
});

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
        margin-left: 5%;
        margin-right: 5%; 
        font-size: 13pt;
    }
    

    ion-grid {
        background-color: #f7d6c5;
    }

    ion-col {
        text-align: center;
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


    
</style>