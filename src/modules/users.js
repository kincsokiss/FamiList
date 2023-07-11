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

  async storeUser(name, age, rank, phoneNumber) {
    try {
      const userId = await firebaseDb.storeDoc('Users',{
        Age: age,
        Name: name,
        Rank: rank,
        PhoneNumber: phoneNumber
      });

      console.log(userId);
    } catch (error) {
      console.log('storeUser has failed: ', error)
    }
    

    
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