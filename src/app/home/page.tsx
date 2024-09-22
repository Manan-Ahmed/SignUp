"use client"

import { app } from "@/firebase/firebaseConfig";
import {  dataGet, saveTodo } from "@/firebase/firebaseFireStore";
import { collection, getDocs, getFirestore } from "firebase/firestore";
// import { logOut } from "@/firebase/firebaseAuth";
import { useEffect, useState } from "react";

export default function Home(){
const [todo,setTodo] = useState('')
const [complete,setComplete] = useState(false)
const [getItem,setGetItem] = useState([])


const db = getFirestore(app);


  return(
  <>
     <h1>hello home</h1>
  
  </>
  )
}

