import React, { useEffect, useState } from 'react'
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/Firebase.config';

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [totaluser, setTotaluser] = useState([])

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        // setLoading(false)
        
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

    useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (cuser)=>{
    console.log(cuser);
    setUser(cuser);
    setLoading(false);
  });

  return ()=>{
    unsubscribe();
  };
}, []);


    const authInfo = {
        createUser,
        signInUser,
        totaluser,
        setTotaluser,
        signInWithGoogle,
        signOutUser,
        user,
        updateProfileFunction,
        setUser,
        loading,
        setLoading
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider
