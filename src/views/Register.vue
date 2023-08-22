<template>
    <main class="dimensions">
        <div id="nav">
            <router-link class="link_color" to="/user-settings">User Settings</router-link>
        </div>
        
        <form ref="form" @submit="formSubmit" class="back_color">
            <h2>Create an Account</h2>
            <ion-input label="Name" labelPlacement="floating" placeholder="Enter user's name" ref="name" required="required"></ion-input>
            <ion-input label="Age" labelPlacement="floating" type="number" placeholder="Enter user's age" ref="age" required="required"></ion-input>
            <ion-input label="Phone number" labelPlacement="floating" type="tel" placeholder="Enter user's phone number" ref="phonenumber" required="required"></ion-input>
            
            <ion-input label="Email" placeholder="Enter your email" type="email" ref="email" required="required"></ion-input>
            <ion-input label="Password" placeholder="Enter your password" type="password" ref="password" required="required"></ion-input>
            <ion-button type="submit">Submit</ion-button>
            <ion-button @click="signInWithGoogle">Sign In With Google</ion-button>
            <label>Hello {{ name }} :) </label>
        </form>
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

<style>
    .back_color {
        background-color: rgb(102, 104, 107);
    }

    .dimensions {
    width: 100%;
    height: 100%;
    flex: 1, 1 0;
    padding: 2rem;

    @media (max-width: 768px) {
      padding-left: 6rem;
    }
  }
</style>