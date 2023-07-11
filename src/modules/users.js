import firebaseDb from "./firebase"

class UsersModule {
  constructor() {
  //  this.getUsers();\
  // this.deleteUser('14dxWum9j8028ftcyqQl');
  //this.storeUser('Kati', 17, 'Child', '07453468768');
  }

  getUsers(){
    const Users = firebaseDb.getDocs('Users');

    console.log('Users= ', Users);
  }

  storeUser(name, age, rank, phoneNumber){
    const UserID = firebaseDb.storeDoc('Users', {
      Age: age,
      Name: name,
      Rank: rank,
      PhoneNumber: phoneNumber
    });
    console.log(UserID);
  }

  deleteUser(dataId){
    firebaseDb.destroyDoc('Users', dataId);
  }

  updateUser(){
    
  }

  searchUserByID(){

  }

}
const users = new UsersModule();

export default users;