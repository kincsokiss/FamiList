<template>
    <ion-grid>
      <ion-row>
        <ion-col>
          <div>
            <form ref="form">
              <ion-input :fill="isInputEditable" label="Name" ref="nam" :value="user.name" :readonly="!isEditMode"></ion-input>
              <ion-input :fill="isInputEditable" label="Age" ref="ag" :value="user.age" :readonly="!isEditMode"></ion-input>
              <ion-input label="Rank" ref="ran" :value="user.rank" :readonly="true"></ion-input>
              <ion-input :fill="isInputEditable" label="Phone number" ref="phone" :value="user.phoneNumber" :readonly="!isEditMode"></ion-input>
              <ion-input :fill="isInputEditable" label="Email" ref="email" :value="email" :readonly="!isEditMode"></ion-input>
              <ion-button @click="onClickButton">{{ buttonLabel }}</ion-button>
              <ion-button @click="signOutUser">Sign out</ion-button>
              <ion-button id="present-alert">Delete user</ion-button>
              <ion-alert
                  trigger="present-alert"
                  sub-header="Important message"
                  message="Are you sure you want to delete this user?"
                  :buttons="alertButtons"
              ></ion-alert>
            </form>
          </div>
        </ion-col>
      </ion-row>
    </ion-grid>
</template>

<script>
import users from '../modules/users';
import { toastController } from '@ionic/vue';
import { IonButton, IonAlert } from '@ionic/vue';
import { getAuth, onAuthStateChanged, updateEmail, deleteUser, signOut } from 'firebase/auth';
  
  export default {
    name: 'UserItem',

    components: {
      IonAlert,
      IonButton
    },
  
    data() {
      return {
        user: {
          default: {
            name: '',
            age: '',
            rank: '',
            phoneNumber: '',
          },
        },
        isEditMode: false,
        userUId: null,
        userId: null,
        nam: '',
        ag: '',
        phone: '',
        email: '',
        alertButtons: []
      };
    },
    
    computed: {
        buttonLabel() {
        return this.isEditMode ? 'Save' : 'Edit';
        },

        isInputEditable() {
            return this.isEditMode ? 'solid' : 'outline';
        },
    },

    created() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.userUId = user.uid;
          this.email = user.email;
          this.fetchUserData();
        } else {
          this.userUId = null;
        }
      });
    },

    methods: {
      async presentToast(position = 'middle'){
        const toast = await toastController.create({
          message: 'User has been updated!',
          duration: 1500,
          position: position
        });

        await toast.present();
      },

      async fetchUserData() {
        try {
          this.userId = await users.searchUserbyUID(this.userUId);
          this.getUserData()
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      },

      async getUserData() {
          try{
              this.user = await users.searchUserByID(this.userId);
          } catch (error) {
              console.log('Error in getUserData: ', error);
          }
      },

      signOutUser(){
          const auth = getAuth();
          signOut(auth).then(() => {
              this.$router.push('/')
          }).catch((error) => {
              console.log('signOutUser has failed: ', error)
          })
      },

      saveUser() {
        if (this.isEditMode) {
          this.user.name = this.$refs.nam.value;
          this.user.age = this.$refs.ag.value;
          this.user.phoneNumber = this.$refs.phone.value;

          if(this.user.age >= 18){
              this.user.rank = "adult";
          }
          else {
              this.user.rank = "child";
          }

          const auth = getAuth()
          updateEmail(auth.currentUser, this.email).then(() => {
              console.log('Email updated')
          }) .catch((error) => {
              console.log('updateEmail has failed: ', error)
          })
          
          users.updateUser(this.userId, this.user);
        }
        this.changeEditMode();
        this.presentToast();
      },

      changeEditMode() {
        this.isEditMode = !this.isEditMode;
      },

      onClickButton() {
        this.isEditMode ? this.saveUser() : this.changeEditMode();
      },

      async deleteUser() {
        await users.deleteUser(this.userId);

        const auth = getAuth();
        const user = auth.currentUser;
        deleteUser(user).then(() => {
          console.log('User deleted')
        }) .catch ((error) => {
          console.log("deleteUser has failed: ", error)
        })

        this.$refs.form.reset();
        this.$router.push('/');
      },
    },

    async mounted(){
      this.alertButtons = [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.deleteUser();
          }
        }
      ]
    },

  };
  </script>

<style scoped>
    ion-col {
        position: absolute;
        text-align: center;
        background-color: #f3bdaa;
        font-weight: bold;
        font-family: 'Poppins', sans-serif;
    }

</style>