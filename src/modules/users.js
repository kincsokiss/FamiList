import firebaseDb from "./firebase"

class UsersModule {
  constructor() {
  //  this.getUsers();\
    this.storeUser('Kati', 15, 'Child', '0764847355');
  }

  getUsers(){
    const Users = firebaseDb.getDocs('Users');

    console.log('Users= ', Users);
  }

  storeUser(name, age, rank, phoneNumber){
    const UserID = firebaseDb.storeDoc('Users',{
      Age: age,
      Name: name,
      Rank: rank,
      PhoneNumber: phoneNumber
    });
    console.log(UserID);
  }

}
const users = new UsersModule();

export default users;