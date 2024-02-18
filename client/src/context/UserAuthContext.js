import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) { // Fixed 'childern' to 'children'

    const [user, setUser] = useState("");

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }
    function logOut() {
        return signOut(auth);
    }
    function googleSignIn(email, password) {
        const GithubAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, GithubAuthProvider);
    }




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, []);

    return <userAuthContext.Provider value={{ user, signUp, logIn, logOut, googleSignIn, }}>{children}</userAuthContext.Provider> // Fixed 'childern' to 'children'

}

export function useUserAuth() {
    return useContext(userAuthContext);
}
