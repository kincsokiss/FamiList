<template>
    <main class="dimensions">
        <div id="nav">
            <router-link class="link_color" to="/user-settings">User Settings</router-link>
        </div>
        
        <form ref="form" @submit="formSubmit" class="back_color">
            <h2>Sign In to an Account</h2>
            <ion-input label="Email" placeholder="Enter your email" type="email" ref="email" required="required"></ion-input>
            <ion-input label="Password" placeholder="Enter your password" type="password" ref="password" required="required"></ion-input>
            <p class="color-danger" v-if="errMsg">{{ errMsg }}</p> 
            <ion-button type="submit">Submit</ion-button>
            <ion-button @click="signInWithGoogle">Sign In With Google</ion-button>
        </form>
    </main>
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
                        this.errMsg = "Invalid email"
                        break;
                    case "auth/user-not-found":
                        this.errMsg = "No account with that email was found"
                        break;
                    case "auth/wrong-password":
                        this.errMsg = "Incorrect password"
                        break;
                    default:
                        this.errMsg = "Email or password was incorrect"
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

    .color-danger {
        color: red;
    }

    .dimensions {
    width: 1404px;
    height: 9999px;
    flex: 1, 1 0;
    padding: 2rem;

    @media (max-width: 768px) {
      padding-left: 6rem;
    }
  }
</style>