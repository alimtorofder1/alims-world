import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
export const AuthContext =createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user , setUser]=useState(null)
    const [loading , setLoading]=useState(true)

    const createUser=(email , password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password);       
    }

    const SignIn=(email , password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password);     
    }

    const LogOut =()=>{
        setLoading(true)
        signOut(auth)
    }

    useEffect(()=>{
        const unsubcribe= onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser);
            console.log('currentUser', currentUser);
            setLoading(false);
        })
        return ()=>{
            return unsubcribe();
        }
    },[])



    const Authinfo = {
        user,
        loading,
        createUser,
        SignIn,
        LogOut,
    }

    return (
        <AuthContext.Provider value={Authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;