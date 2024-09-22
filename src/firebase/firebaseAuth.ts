import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged  } from "firebase/auth";
import { app } from "./firebaseConfig";
import { saveUser } from "./firebaseFireStore";

export const auth = getAuth(app);


export function signupWithEmailPassword(
  email:string,password:string,userName: string,userNumber: string,profilePhoto:any){

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const {email,uid} = userCredential.user
    const user = userCredential.user;
    saveUser({email:email as string,uid,userName,userNumber})

    console.log(email,userName,userNumber,uid,'user creditional');
    
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  })
}


export function loginWithEmailPassword(email: string,password:string){
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    console.log('user login',user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  })
}