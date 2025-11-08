import React, { useState } from 'react'
import {createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/Firebase.config.';

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

     const updateProfileFunction =(displayName, photoURL) =>{
      return updateProfile(auth.currentUser, {
        displayName, photoURL,
      })
    }

    const signOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }


    const authInfo = {
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser,
        user,
        updateProfileFunction,
        setUser,
        loading
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider
