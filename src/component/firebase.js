import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCIy2G5W6McccrvrUa0MsoAP_A2UnYu5o8",
    authDomain: "beekepermanagerfront.firebaseapp.com",
    databaseURL: "https://beekepermanagerfront.firebaseio.com",
    projectId: "beekepermanagerfront",
    storageBucket: "beekepermanagerfront.appspot.com",
    messagingSenderId: "251671575364",
    appId: "1:251671575364:web:3b3c923aeb0d043772b511",
    measurementId: "G-49BTZFS2FD"
  };
  
  class Firebase{
      constructor(){
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
      }

      login(email, password){
          return this.auth.signInWithEmailAndPassword(email, password)
      }

      logout(){
          return this.auth.signOut();
      }

      async register(name, email, password){
          await this.auth.createUserWithEmailAndPassword(email, password)
          return this.auth.currentUser.updateProfile({
              displayName: name
          });
      }
  }

  export default new Firebase();