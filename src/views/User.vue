<template>
    <form ref="form" @submit="formSubmit">
        <ion-input label="Name" labelPlacement="floating" placeholder="Enter user's name" ref="name" required="required"></ion-input>
        <ion-input label="Age" labelPlacement="floating" type="number" placeholder="Enter user's age" ref="age" required="required"></ion-input>
        <ion-input label="Phone number" labelPlacement="floating" type="tel" placeholder="Enter user's phone number" ref="phonenumber" required="required"></ion-input>
        <ion-input label="Rank" labelPlacement="floating" placeholder="Enter user's rank" ref="rank" required="required"></ion-input>

        <ion-button type="submit">Add</ion-button>
    </form>
    
</template>

<script>
import users from '../modules/users.js';

export default({
    name:'UserItem',

    data() {
        return {
            name: '',
            age: '',
            phonenumber: '',
            rank: ''
        };
    },

    methods: {
        formSubmit(e) {
            e.preventDefault();
            console.log('alma');
            const name = this.$refs.name.value;
            console.log(name);

            const age = this.$refs.age.value;
            console.log(age);

            const phonenumber = this.$refs.phonenumber.value;
            console.log(phonenumber);

            const rank = this.$refs.rank.value;
            console.log(rank);

            this.$refs.form.reset();

            users.storeUser(name, age, rank, phonenumber);
        }
    },
    
});
</script>