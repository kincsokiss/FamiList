<template>
    <ion-card>
      <form>

        <ion-input 
          :fill="isInputEditable" 
          label="Name" 
          v-bind:value="user.name"
          v-on:ion-input="user.name = $event.target.value"
          :readonly="!isEditMode"
        ></ion-input>

        <ion-input 
          :fill="isInputEditable" 
          label="Age" 
          v-bind:value="user.age"
          v-on:ion-input="user.age = $event.target.value"
          :readonly="!isEditMode"
        ></ion-input>

        <ion-input 
          :fill="isInputEditable" 
          label="Rank" 
          v-bind:value="user.rank"
          v-on:ion-input="user.rank = $event.target.value"
          :readonly="true"
        ></ion-input>

        <ion-input 
          :fill="isInputEditable" 
          label="Phone number" 
          v-bind:value="user.phoneNumber"
          v-on:ion-input="user.phoneNumber = $event.target.value"
          :readonly="!isEditMode"
        ></ion-input>
        <ion-input 
          :fill="isInputEditable" 
          label="Email" 
          v-bind:value="user.email" 
          v-on:ion-input="user.email = $event.target.value"
          :readonly="!isEditMode"
        ></ion-input>

        <ion-button v-if="isEditMode" @click="newPassword">New Password</ion-button>

        <br v-if="isEditMode"/>

        <ion-button @click="onClickButton">{{ buttonLabel }}</ion-button>
        <ion-button v-if="isInputEditable === 'outline'" @click="signOutUser">Sign out</ion-button>
        <ion-button id="present-alert">Delete user</ion-button>

        <ion-alert
            trigger="present-alert"
            sub-header="Important message"
            message="Are you sure you want to delete this user?"
            :buttons="alertButtons"
        ></ion-alert>

      </form>
    </ion-card>
</template>

<script setup>
  import users from '../modules/users';
  import { toastController } from '@ionic/vue';
  import { IonButton, IonAlert, IonInput, IonCard } from '@ionic/vue';
  import { sendPasswordResetEmail, updateEmail, deleteUser, signOut, getAuth } from 'firebase/auth';
  import { ref, computed, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import firebaseDb from '../modules/firebase';

  const router = useRouter();
  const user = ref('');
  const userId = ref('');

  const isEditMode = ref(false);
  const authUser = ref('');
  const auth = getAuth();

  const alertButtons = [
      {
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Delete',
        role: 'destructive',

        handler: () => {
          Delete();
        }
      }
  ];
    
  const buttonLabel = computed(() => {
    return isEditMode.value ? 'Save' : 'Edit';
  })

  const isInputEditable = computed(() => {
      return isEditMode.value ? 'solid' : 'outline';
  })

  onMounted(async() => {
      authUser.value = await firebaseDb.getAuthUser();
      fetchUserData();
  })

  async function fetchUserData() {
    try {
      userId.value = await users.searchUserbyEmail(auth.currentUser.email);
      getUserData(userId.value)
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  async function getUserData(userID) {
      try{
        user.value = await users.searchUserByID(userID);
        console.log(user.value)
      } catch (error) {
        console.log('Error in getUserData: ', error);
      }
  }

  async function presentUserToast(position = 'middle'){
    const toast = await toastController.create({
      message: 'User has been updated!',
      duration: 1500,
      position: position
    });

    await toast.present();
  }

  async function presentPasswordToast(position = 'middle'){
    const toast = await toastController.create({
      message: 'Reset password email sent!',
      duration: 1500,
      position: position
    });

    await toast.present();
  }

  function newPassword(){
    const user = auth.currentUser;
    sendPasswordResetEmail(auth, user.email)
      .then(() => {
        presentPasswordToast()
      })
      .catch((error) => {
        console.log("newPassword failed: ", error)
      })
  }

  function signOutUser(){
      signOut(auth).then(() => {
          router.push('/user-settings')
      }).catch((error) => {
          console.log('signOutUser has failed: ', error)
      })
  }

  async function saveUser() {
    if (isEditMode.value) {
      user.value.rank = 'child';

      if(user.value.age >= 18) user.value.rank = 'adult';

      const authUser = auth.currentUser

      await updateEmail(authUser, user.value.email).then(() => {
          console.log('Email updated')
      }) .catch((error) => {
          console.log('updateEmail has failed: ', error)
      })

      users.updateUser(userId.value, user.value);
    
      changeEditMode();
      presentUserToast();

    } else {
      changeEditMode();
    }
      
  }

  function changeEditMode() {
    isEditMode.value = !isEditMode.value;
  }

  function onClickButton() {
    isEditMode.value ? saveUser() : changeEditMode();
  }

  function Delete() {
    users.deleteUser(userId.value);

    deleteUser(auth.currentUser).then(() => {
      console.log('User deleted')
    }) .catch ((error) => {
      console.log("deleteUser has failed: ", error)
    })

    resetForm();
    router.push('/user-settings');
  }

  function resetForm() {
    user.value = {
      name: '',
      age: '',
      rank: '',
      phoneNumber: '',
      email: '',
    }
  }

</script>

<style lang="scss" scoped>
    ion-card {
        text-align: center;
        background-color: #fae6dc;
        font-weight: bold;
        color: black;
        font-family: 'Poppins', sans-serif;
        padding: 2%;
        margin-top: 5rem;
        ion-input {
            margin-bottom: 8px;
        }
    }

    ion-input{
      margin: 1%;
      font-size: 13pt;

    }
    .button {
        color: #f7d6c5;
        text-decoration: none;
        background-color: #312b27;
        
        border-radius: 10px;
        font-family: 'Poppins', sans-serif;
        &:hover {
            background-color: #191514;
        }
    }
    .input-fill-solid.sc-ion-input-md-h {
        --background: #00000000;
        --border-color: #c56364;        
    }

    .input-fill-solid.has-focus.sc-ion-input-md-h {
        --background: #00000000;
    }

</style>