import { getFirestore } from "firebase/firestore";
import { collection, addDoc,setDoc,doc, getDocs } from "firebase/firestore"; 
import { app } from "./firebaseConfig";
import { auth } from "./firebaseAuth";
import { useAuthContext } from "@/context/authcontext";
const db = getFirestore(app);

// const {user} = useAuthContext()!


type UserType ={
    email: string,
    uid: string,
    userName: string,
    userNumber: string
    
}

// console.log(user);







export async function saveUser(user: UserType) {
    // let docRef = doc(db, "collectionName", "docId")
    // await setDoc("where", "what");

    try {
        let docRef = doc(db, 'users', user.uid);
        await setDoc(docRef, user);
    } catch (error) {
        console.log(error);
    }
}


export async function saveTodo(todo:string,isComplete: boolean){
    // collection(db, "collectionName")
    // addDoc("where", "what");
console.log(isComplete);


    let uid = auth.currentUser?.uid
    let newTodo = {todo,uid,isComplete}

    try{
        const todosCollection = collection(db,'todos')
        await addDoc(todosCollection,newTodo)
    }  

    
    catch(e){
console.log(e);

    }

}


export async function dataGet(){
   
    const querySnapshot = await getDocs(collection(db, "todos"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log( doc.data().todo,'get data');
    });
}
