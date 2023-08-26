<template>
    <main class="details">
        <div>
            <form ref="form" @submit="formSubmit">
                <h1>Login to Your Account</h1>
                <ion-input label="Email" placeholder="Enter your email" type="email" ref="email" required="required"></ion-input>
                <ion-input label="Password" placeholder="Enter your password" type="password" ref="password" required="required"></ion-input>
                <p class="color-danger" v-if="errMsg">{{ errMsg }}</p> 
                <ion-button type="submit">Submit</ion-button>
                <p>OR</p>
                <ion-button @click="signInWithGoogle">Sign In With Google</ion-button>
            </form>
        </div>
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

<style scoped>
    .details {
        background-color: #1B2F33;
        width: 100%;
        height: 700px;
    }

    div {
        position: absolute;
        top: 20%;
        text-align: center;
        padding-left: 250px;
    }

    .color-danger {
        color: red;
    }

    h1 {
        font-size: 30pt;
        position: relative;
    }

    ion-button {
        --background: rgb(64, 130, 161);
        --border-radius: 10px;
    }


</style>