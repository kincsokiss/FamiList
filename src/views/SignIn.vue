<template>
    <main class="details">
        <form ref="form" @submit="formSubmit">
            <h4 class="size">Login to Your Account</h4>
            <ion-input label="Email" placeholder="Enter your email" type="email" ref="email" required="required"></ion-input>
            <ion-input label="Password" placeholder="Enter your password" type="password" ref="password" required="required"></ion-input>
            <p class="color-danger" v-if="errMsg">{{ errMsg }}</p> 
            <ion-button type="submit">Submit</ion-button>
            <!-- <p>OR</p>
            <ion-button @click="signInWithGoogle">Sign In With Google</ion-button> -->
        </form>
    </main>
</template>  

<script>
    import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
    import { toastController } from "@ionic/vue";
    
    export default({
    name:'SignInPage',

    data() {
        return {
            email: '',
            password: '',
            errMsg: ''
        };
    },


    mounted(){

    },

    methods: {
        async presentToast(position = 'middle'){
                const toast = await toastController.create({
                    message: 'User succesfully signed in!',
                    duration: 1500,
                    position: position
                });

                await toast.present();
        },

        formSubmit(e) {
            e.preventDefault();
            const email = this.$refs.email.value;
            const password = this.$refs.password.value;

            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
            .then((data) => {
                console.log(data, "Successfully signed in!");
                console.log(auth.currentUser)

                this.presentToast();
                this.$router.push('/main-page')
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
        text-align: center;
        position: relative;
    }

    .color-danger {
        color: red;
    }

    .size {
        font-size: 25pt;
        margin-bottom: 10%;
    }

    ion-button {
        --background: rgb(64, 130, 161);
        --border-radius: 10px;
    }


</style>