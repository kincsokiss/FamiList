import firebaseDb from "./firebase"

class UsersModule {
  constructor() {
    this.getUsers();
  }

  getUsers(){
    const Users = firebaseDb.getDocs('Users');

    console.log('Users= ', Users);
  }

}
const users = new UsersModule();

export default users;