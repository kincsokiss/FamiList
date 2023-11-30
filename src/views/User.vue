<template>
    <form class="background" ref="form" @submit="formSubmit">
        <ion-input class="text" label="Name" labelPlacement="floating" placeholder="Enter user's name" ref="name" required="required"></ion-input>
        <ion-input class="text" label="Age" labelPlacement="floating" type="number" placeholder="Enter user's age" ref="age" required="required"></ion-input>
        <ion-input class="text" label="Phone number" labelPlacement="floating" type="tel" placeholder="Enter user's phone number" ref="phonenumber" required="required"></ion-input>
        <ion-input class="text" label="Rank" labelPlacement="floating" placeholder="Enter user's rank" ref="rank" required="required"></ion-input>

        <ion-button type="submit">Add</ion-button>
    </form>
    
</template>

<script setup>
import users from '../modules/users.js';
import { ref } from 'vue';

const name = ref('');
const age = ref('');
const phonenumber = ref('');
const rank = ref('');

function formSubmit(e) {
    e.preventDefault();
    const name = name.value;
    console.log(name);

    const age = age.value;
    console.log(age);

    const phonenumber = phonenumber.value;
    console.log(phonenumber);

    const rank = rank.value;
    console.log(rank);

    form.reset();

    users.storeUser(name, age, rank, phonenumber);
}; 
</script>

<style>
    .background{
        background-color: #f7d6c5;
    }

    .text{
        color: #191514;
        font-weight: bold;
        font-family: 'Poppins', sans-serif;
        margin-left: 5%;
        margin-right: 5%; 

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