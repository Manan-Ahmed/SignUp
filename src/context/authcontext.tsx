




"use client";

import { app } from "@/firebase/firebaseConfig";
import { getAuth ,onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";


type UserType = {
    email: string | null,
    uid: string,
    emailVerified: boolean
}

type AuthContextProviderType = {
    children: ReactNode
}

type AuthContextType = {
    user: UserType | null
}

const AuthContext = createContext<AuthContextType | null>(null);



  
export function AuthContextProvider({ children }: AuthContextProviderType) {
    const [user, setUser] = useState<UserType | null>(null);

    const route = useRouter();

    useEffect(() => {
        const auth = getAuth(app);
        onAuthStateChanged(auth, (loggedInUser) => {
            if (loggedInUser) {
                const { email, uid,emailVerified } = loggedInUser;
                setUser({ email, uid,emailVerified });
                if(emailVerified === true){
                    route.push("/home");

                }else{

  sendEmailVerification(loggedInUser)
  .then(() => {
   
    console.log('email sent',loggedInUser);
    route.push('/emailverified')

    
  }).catch(()=>{
console.log('Email verification not sent');

  })

 
}
            }
            else {
                console.log('inside onauthstatechange else statement');
                setUser(null);
                route.push("/");
            }
        });
    }, [])

    return (
        <AuthContext.Provider value={{ user }} >
            {children}
        </AuthContext.Provider>
    )
}


export const useAuthContext = () => useContext(AuthContext);
