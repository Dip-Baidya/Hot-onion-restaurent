import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Components/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState(' ');
    const [error, setError] = useState(' ');

    const [name, setName] = useState(' ');
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');

    const auth = getAuth();

    const handleRegistration = (event) => {
        event.preventDefault();

        if (password.length < 6) {
            setError('Password must be at least 6 character');
            return;
        }

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must be contain 2 Upper Case');
            return;
        }
        registerNewUser(email, password);
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUserName();
                verifyEmail();
                setError('');

            })
            .catch((error) => {
                setError(error.message);
            });
    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setError('');

            })
            .catch((error) => {
                setError(error.message);
            });
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then((result) => {
                console.log(result);
            });
    }
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
            })
            .catch((error) => {
                setError(error.message);
                // ..
            });
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, {
          displayName: name})
            .then((result) => {
            setUser(result);
          })
            .catch((error) => {
            console.log(error.message);
          });
      }



    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                setError({});

            })
            .catch((error) => {
                setError(error.message);
            });
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        });
        return () => unsubscribed;

    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
            });
    }

    return {
        user,
        signInUsingGoogle,
        error,
        logOut,
        handleRegistration,
        processLogin,
        registerNewUser,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleResetPassword,
    }
}
export default useFirebase;