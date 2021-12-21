import { useEffect, useState } from "react";
import InitializeFirebase from "../Pages/Login/Firebase/Firebase.Init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword , GoogleAuthProvider, signInWithPopup, updateProfile} from "firebase/auth";


InitializeFirebase();

const useFirebase = () => {
    const [user , setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();



    const googleProvider = new GoogleAuthProvider();
    
    const registerUser = (email, password, history, name) => {
      setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        
        .then((userCredential) => {
          setAuthError('');
          history.replace('/');
          const newUser = {email, displayName: name};
          setUser(newUser)
          

         
          saveUser(email, name, 'POST' );


          updateProfile(auth.currentUser, {
            displayName: name,
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            setAuthError(error.message);
            // ..
          })
          .finally( () => setIsLoading(false));
    }


    const logInUser = (email, password, location, history) => {
      setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const destination = location?.state?.from || '/';
          history.replace(destination);
          setAuthError('');
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          setAuthError(error.message);
        })

        .finally( () => setIsLoading(false));
      
    }

    const signInWithGoogle = (location, history) => {
      setIsLoading(true);
          signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, 'PUT');
        setAuthError('');
       
      }).catch((error) => {
        
        setAuthError(error.message);
      })
      .finally( () => setIsLoading(false));
    }


    //-----------------logOut----------------------

    const logOut = () => {
      setIsLoading(true);
        const auth = getAuth();
            signOut(auth).then(() => {
            // Sign-out successful.
            }).catch((error) => {
            // An error happened.
            })
            .finally( () => setIsLoading(false));
    }
//------------------------------State Change Observer----------------------------
    useEffect ( () => {
        const unSubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
              
              //user signed in
              setUser(user);
              // ...
            } else {
              // User is signed out
              setUser({})
            }
            setIsLoading(false);
          });
          return () => unSubscribe;
    }, [])

    // const email = localStorage.setItem('email');

    //send data to server
    const saveUser = (email, displayName, method) => {
      const user = {email, displayName} ;
      fetch('https://fathomless-springs-03872.herokuapp.com/users', {
        method: method,
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user) 
      })
      .then()
    }

    return {
        user,
        isLoading,
        logInUser,
        authError,
        registerUser,
        signInWithGoogle,
        logOut,
        
    }
}

export default useFirebase;    