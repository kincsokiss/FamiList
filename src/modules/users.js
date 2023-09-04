import firebaseDb from "./firebase"

class UsersModule {
  constructor() {
  // this.getUsers();
  // this.deleteUser('ABQFbm6JnlQx1eDSeBJh');
  // this.addUser('Kati', 17, 'Child', '07453468768');
  // this.updateUser('UlWHuHmaDgc2R0oTeFo0','Hanuka', 5, 'kiskocsag', '0776154686');
  // this.searchUserByID('DPNL6AbhecyhJzD7gBI0');
  // this.searchUserByAuthID('LmPKLXfGtFfEjIOOooScPIwFih12');
  }
  async addUser(name, age, rank, phoneNumber, id) {
      try {
        const userId = await firebaseDb.storeDoc('Users',{
          age: age,
          name: name,
          rank: rank,
          phoneNumber: phoneNumber,
          id: id
        });

        console.log(userId);
      } catch (error) {
        console.log('storeUser has failed: ', error)
      }
  }

  async updateUser(documentID, user) {
    try {
      await firebaseDb.editDoc('Users', documentID, {
        age: user.age,
        name: user.name,
        rank: user.rank,
        phoneNumber: user.phoneNumber,
        id: user.id
      });
      console.log('User updated');
    } catch (error) {
      console.log('updateUser has failed: ', error)
    }
  }  

  deleteUser(dataId){
    firebaseDb.destroyDoc('Users', dataId);
  }

  getUsers(){
    const Users = firebaseDb.getDocs('Users');

    console.log('Users= ', Users);
  }

  async searchUserByAuthID(authId){
    try{
      const datas = await firebaseDb.searchDocbyAuthID('Users', authId);
      console.log(datas)
      return datas;
    } catch (error) {
      console.log('searchUserbyAuthID has failed: ', error);
    }
  }

  async searchUserByID(dataId){
    try {
      const datas = await firebaseDb.searchDocbyID('Users', dataId);
      console.log(datas)
      return datas;
    } catch (error) {
      console.log('searchUserByID has failed: ', error);
    }
  }

}
const users = new UsersModule();

export default users;