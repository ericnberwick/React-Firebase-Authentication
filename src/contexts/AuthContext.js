import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const AuthContext = React.createContext()

export function useAuth() { //useAuth hook
    return useContext(AuthContext)
}


export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true); //by default we are loading
    const Eauth = getAuth();
    function signup(email, password) {
        auth.createUserWithEmailAndPassword(email, password) 
    }

    function login(email, password) {
        return signInWithEmailAndPassword(Eauth, email, password)
    }

    function logout() {
        return auth.signOut()
      }


    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
      }  

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
            
        })
    return unsubscribe
    }, [])


    const value = {
        currentUser,
        login,
        logout,
        resetPassword,
        signup
    }


  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>    
  )
}
