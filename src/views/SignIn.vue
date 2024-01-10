<template>
    <main class="details">
        <ion-card>
            <form @submit="formSubmit" class="p-8">
                <h4 class="size" >Login</h4>
                <ion-input class="text" label="Email" placeholder="Enter your email" type="email" v-model="email" required="required"></ion-input>
                <ion-input class="text" label="Password" placeholder="Enter your password" type="password" v-model="password" required="required"></ion-input>
                <p class="color-danger" v-if="errMsg">{{ errMsg }}</p> 
                <ion-button type="submit" class="ion-button">Submit</ion-button>
            </form>
        </ion-card>
    </main>
</template>  

<script setup>
    import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
    import { ref } from "vue";
    import { useRouter } from "vue-router";
    import { IonCard, IonInput, IonButton } from "@ionic/vue";

    const router = useRouter();
    const email = ref("");
    const password = ref("");
    const errMsg = ref("");
    

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
        background-color: #312b27;
        
        border-radius: 10px;
        font-family: 'Poppins', sans-serif;
        &:hover {
            background-color: #191514;
        }
    }

    ion-card {
        text-align: center;
        font-weight: bold;
        font-family: 'Poppins', sans-serif;
    }
</style>