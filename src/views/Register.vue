<template>
    <main class="dimensions back_color">
        <ion-grid>
            <ion-row>
                <ion-col>
                    <form ref="form" @submit="formSubmit">
                        <h1>Create an Account</h1>
                        <ion-input label="Name" placeholder="Enter user's name" ref="name" required="required"></ion-input>
                        <ion-input label="Age" type="number" placeholder="Enter user's age" ref="age" required="required"></ion-input>
                        <ion-input label="Phone number" type="tel" placeholder="Enter user's phone number" ref="phonenumber" required="required"></ion-input>
                        
                        <ion-input label="Email" placeholder="Enter your email" type="email" ref="email" required="required"></ion-input>
                        <ion-input label="Password" placeholder="Enter your password" type="password" ref="password" required="required"></ion-input>
                        <ion-button type="submit">Create</ion-button>
                        <p>OR</p>
                        <ion-button @click="signInWithGoogle">Sign Up With Google</ion-button><br/>
                        <label>Hello {{ name }} :) </label>
                    </form>
                </ion-col>
            </ion-row>
        </ion-grid>
    </main>
</template>   

<script>
    import users from '../modules/users.js';
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
            }) 
            .catch((error) => {
                console.log(error.code);
                alert(error.message);
            })

            this.$refs.form.reset();
        },

        // 
        // googleSignIn: function() {
        //     let provider = new firebase.auth.GoogleAuthProvider();
        //     firebase
        //             .auth()
        //             .signInWithPopup(provider)
        //             .then((result) => {
        //                 let token = result.credential.accessToken;
        //                 let user = result.user;
        //                     console.log(token)
        //                     console.log(user)
        //             })
        //             .catch((err) => {
        //                 console.log(err);
        //             })
        // }

    },
    
});

</script>

<style scoped>

    ion-grid {
        background-color: #1B2F33;
    }

    ion-col {
        text-align: center;
    }

    h1 {
        font-size: 25pt;
        position: relative;
    }

    ion-button {
        --background: rgb(64, 130, 161);
        --border-radius: 10px;
    }

    
</style>