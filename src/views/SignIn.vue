<template>
    <main class="details">
        <ion-card>
            <form @submit="formSubmit" class="p-8">
                <h4 class="size">Login</h4>
                <ion-input class="text" label="Email" placeholder="Enter your email" type="email" v-model="email" required="required"></ion-input>
                <ion-input class="text" label="Password" placeholder="Enter your password" type="password" v-model="password" required="required"></ion-input>
                <p class="color-danger" v-if="errMsg">{{ errMsg }}</p> 
                <ion-button type="submit" class="ion-button">Submit</ion-button>
                <br/>
                <ion-button type="button" @click="signInWithGoogle" class="ion-button">
                    <ion-icon slot="icon-only" :icon="logoGoogle"></ion-icon>
                </ion-button>
                <ion-button type="button" @click="signInWithApple" class="ion-button">
                    <ion-icon slot="icon-only" :icon="logoApple"></ion-icon>
                </ion-button>
                <ion-button type="button" @click="signInWithFacebook" class="ion-button">
                    <ion-icon slot="icon-only" :icon="logoFacebook"></ion-icon>
                </ion-button>
            </form>
        </ion-card>
    </main>
</template>  

<script setup>
    import { getAuth, FacebookAuthProvider, OAuthProvider, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
    import { ref } from "vue";
    import { useRouter } from "vue-router";
    import { logoGoogle, logoApple, logoFacebook } from "ionicons/icons";
    import { IonCard, IonIcon, IonInput, IonButton } from "@ionic/vue";

    const router = useRouter();
    const email = ref("");
    const password = ref("");
    const errMsg = ref("");
    const auth = getAuth();
    const providerGoogle = new GoogleAuthProvider();
    const providerApple = new OAuthProvider('apple.com');
    const providerFacebook = new FacebookAuthProvider();
    
    function signInWithGoogle() {
        signInWithPopup(auth, providerGoogle)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(token);
                console.log(user, "Successfully signed in!");
                router.push('/')
            }).catch((error) => {
                const errorCode = error.code;
                const errrorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorCode, errrorMessage, email, credential);
            })
    }

    function signInWithApple() {
        signInWithPopup(auth, providerApple)
            .then((result) => {
                const user = result.user;
                const credential = OAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;
                const idToken = credential.idToken;
                console.log(accessToken, idToken, user, "Successfully signed in!");
                router.push('/');
            }).catch((error) => {
                const errorCode = error.code;
                const errrorMessage = error.message;
                const email = error.customData.email;
                const credential = OAuthProvider.credentialFromError(error);
                console.log(errorCode, errrorMessage, email, credential);
            })
    }

    function signInWithFacebook() {
        signInWithPopup(auth, providerFacebook)
            .then((result) => {
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(token);
                console.log(user, "Successfully signed in!");
                router.push('/')
            }).catch((error) => {
                const errorCode = error.code;
                const errrorMessage = error.message;
                const email = error.customData.email;
                const credential = FacebookAuthProvider.credentialFromError(error);
                console.log(errorCode, errrorMessage, email, credential);
            })
    }

    function formSubmit(e) {
        e.preventDefault();
        signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log(data.user, "Successfully signed in!");
            router.push('/')
        }) 
        .catch((error) => {
            console.log(error.code);
            switch (error.code) {
                case "auth/invalid-email":
                    errMsg.value = "Invalid email"
                    break;
                case "auth/user-not-found":
                    errMsg.value = "No account with that email was found"
                    break;
                case "auth/wrong-password":
                    errMsg.value = "Incorrect password"
                    break;
                default:
                    errMsg.value = "Email or password was incorrect"
                    break;
            }
        })

        resetForm();
        
    }

    function resetForm() {
        email.value = "";
        password.value = "";
        errMsg.value = "";
    }

</script>

<style scoped>

    .p-8 {
        padding: 8px;
    }

    h4{
        color:#191514;
        font-family: 'Poppins', sans-serif;
        
    }
    .text{
        color: #191514;
        font-family: 'Poppins', sans-serif;
        font-size: 13px;
    }

    .details {
        text-align: center;
        position: relative;
        margin-top: 5rem;   
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
        background-color: transparent;
        
        border-radius: 10px;
        font-family: 'Poppins', sans-serif;
        &:hover {
            background-color: transparent;
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