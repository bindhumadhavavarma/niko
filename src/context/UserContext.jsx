import { createContext, useState, useEffect } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { pushNotify } from "../services/NotifyService";
import { getDatabase, ref, set } from "firebase/database";

export const UserContext = createContext();
export const Axios = axios.create({ baseURL: 'http://10.0.0.29/apts3_apis/' });



export const AxiosPost = async (apiname, body) => {
    const { data } = await Axios.post(apiname, body)
    console.log(data);
    return data;
}

export const AxiosGet = async (apiname) => {
    const { data } = await Axios.get(apiname);
    console.log(data)
    return data;
}








export const UserContextProvider = ({ children }) => {
    const firebaseConfig = {
        apiKey: "AIzaSyAZOKzoM6hZmbUYVxjCJ4ofCSB4j_HOdeg",
        authDomain: "chatting-app-1b32f.firebaseapp.com",
        databaseURL: "https://chatting-app-1b32f-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "chatting-app-1b32f",
        storageBucket: "chatting-app-1b32f.appspot.com",
        messagingSenderId: "592202767510",
        appId: "1:592202767510:web:abd873c529486d4c2736b7"
    };
    const [theUser, setUser] = useState(null);
    const [movieSelected, setMovieSelected] = useState(false);
    const [wait, setWait] = useState(false);
    const history = useHistory();
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    const db = getDatabase();
    const dbRef = ref(db);

    const writeUserData = async (userId, email, fullname, photoUrl) => {
        await set(ref(db, 'users/' + userId), {
            email: email,
            full_name: fullname,
            photoURL: photoUrl
        });
    }

    const googleSignin = async () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(async (result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                localStorage.setItem('user', JSON.stringify(user))
                localStorage.setItem('user_id', user.uid)
                await writeUserData(user.uid, user.email, user.displayName,user.photoURL)
                await loggedInCheck()
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
    const loginUser = async ({ username, password }) => {
        setWait(true);
        try {
            await signInWithEmailAndPassword(auth, username, password)
                .then(async (userCredential) => {
                    // Signed in 
                    console.log(userCredential)
                    const user = userCredential.user;
                    localStorage.setItem('user', JSON.stringify(userCredential.user))
                    localStorage.setItem('user_id', userCredential.user.uid)
                    await loggedInCheck();
                    setWait(false);
                    return { Success: true };
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    pushNotify("error", "Error", errorMessage)
                    // ..
                });
        } catch (err) {
            setWait(false);
            pushNotify("error", "Error", "Server Error")
        }
    }

    const signUp = async (formData) => {
        setWait(true);
        try {
            await createUserWithEmailAndPassword(auth, formData.username, formData.password)
                .then(async (userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    localStorage.setItem('user', JSON.stringify(userCredential.user))
                    localStorage.setItem('user_id', userCredential.user.uid)
                    await writeUserData(userCredential.user.uid, userCredential.user.email, formData.full_name,"https://ui-avatars.com/api/?name=" + formData.full_name + "&background=886CC0&color=000000&format=svg")
                    await loggedInCheck();
                    setWait(false);
                    window.location = "/"
                    return { Success: true };
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    pushNotify("error", "Error", errorMessage)
                    // ..
                });
        } catch (err) {
            setWait(false);
            pushNotify("error", "Error", "Server Error")
        }
    }

    const loggedInCheck = async () => {
        const user = localStorage.getItem('user');
        if (user) {
            setUser(user)
        }
    }
    useEffect(() => {
        async function asyncCall() {
            await loggedInCheck();
        }
        asyncCall();
    }, []);

    const logout = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setUser(null);
        }).catch((error) => {
            // An error happened.
        });
    }


    return (
        <UserContext.Provider value={{ loginUser, wait, user: theUser, loggedInCheck, logout, movieSelected, signUp, googleSignin,dbRef }}>
            {children}
        </UserContext.Provider>
    );
}
export default UserContextProvider;