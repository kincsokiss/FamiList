<template>
    <form ref="form">
        <ion-input label="Name" labelPlacement="floating" placeholder="Enter user's name" ref="name"></ion-input>
        <ion-input label="Age" labelPlacement="floating" type="number" placeholder="Enter user's age" ref="age"></ion-input>
        <ion-input label="Phone number" labelPlacement="floating" type="tel" placeholder="Enter user's phone number" ref="phonenumber"></ion-input>
        <ion-input label="Rank" labelPlacement="floating" placeholder="Enter user's rank" ref="rank"></ion-input>
    </form>
    <ion-button @click="resetInput">Add</ion-button>
</template>

<script>
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
        resetInput() {
            const name = this.$refs.name.value;
            console.log(name);

            const age = this.$refs.age.value;
            console.log(age);

            const phonenumber = this.$refs.phonenumber.value;
            console.log(phonenumber);

            const rank = this.$refs.rank.value;
            console.log(rank);

            this.$refs.form.reset();
        },
    },
    
});
</script>