<template>
    <main class="details">
        <ion-card>
            <form ref="form" @submit="formSubmit">
                <h4 class="size" >Login to Your Account</h4>
                <ion-input class="text" label="Email" placeholder="Enter your email" type="email" ref="email" required="required"></ion-input>
                <ion-input class="text" label="Password" placeholder="Enter your password" type="password" ref="password" required="required"></ion-input>
                <p class="color-danger" v-if="errMsg">{{ errMsg }}</p> 
                <ion-button type="submit" class="ion-button">Submit</ion-button>
            </form>
        </ion-card>
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


    mounted(){

    },

    methods: {
        formSubmit(e) {
            e.preventDefault();
            const email = this.$refs.email.value;
            const password = this.$refs.password.value;

            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
            .then((data) => {
                console.log(data.user, "Successfully signed in!");
                console.log(auth.currentUser)

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
    },
    
});

</script>

<style scoped>
    h4{
        color:#191514;
        font-family: 'Poppins', sans-serif;
        
    }
    .text{
        color: #191514;
        font-family: 'Poppins', sans-serif;
        margin-left: 5%;
        font-size: 13pt;
    }

    .details {
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

    .ion-button {
        color: #f7d6c5;
        text-decoration: none;
        background-color: #312b27;
        
        border-radius: 10px;
        font-family: 'Poppins', sans-serif;
        &:hover {
            background-color: #191514;
        }
    }

    ion-card {
        text-align: center;
        background-color: #fae6dc;
        font-weight: bold;
        color: black;
        font-family: 'Poppins', sans-serif;
    }

</style>