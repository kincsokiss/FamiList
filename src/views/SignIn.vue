<template>
    <form ref="form" @submit="formSubmit" class="back_color">
        <h2>Sign In to an Account</h2>
        <ion-input label="Email" placeholder="Enter your email" type="email" ref="email" required="required"></ion-input>
        <ion-input label="Password" placeholder="Enter your password" type="password" ref="password" required="required"></ion-input>
        <h4 v-if="errMsg">{{ errMsg }}</h4> 
        <ion-button type="submit">Submit</ion-button>
        <ion-button @click="signInWithGoogle">Sign In With Google</ion-button>
    </form>
</template>  

<script>
    import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
    
    export default({
    name:'SignInPage',

    data() {
        return {
            email: '',
            password: '',
            errMsg: ''
        };
    },

    methods: {
        formSubmit(e) {
            e.preventDefault();
            const email = this.$refs.email.value;
            const password = this.$refs.password.value;

            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
            .then((data) => {
                console.log(data, "Successfully signed in!");

                console.log(auth.currentUser)
            }) 
            .catch((error) => {
                console.log(error.code);
                switch (error.code) {
                    case "auth/invalid-email":
                        errMsg = "Invalid email"
                        break;
                    case "auth/user-not-found":
                        errMsg = "No account with that email was found"
                        break;
                    case "auth/wrong-password":
                        errMsg = "Incorrect password"
                        break;
                    default:
                        errMsg = "Email or password was incorrect"
                        break;
                }
            })

            this.$refs.form.reset();
        },

        // 
        signInWithGoogle() {

        }
    },
    
});

</script>

<style>
    .back_color {
        background-color: rgb(102, 104, 107);
    }
</style>