import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from '../firebase/firebase.config';


export const AuthContext = createContext(null) 

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //create user 
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //sign in user
    const signInUser = (email,password) => {
        // setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    //create context api
    const userInfo = {
        user,
        createUser,
        loading,
        signInUser
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;