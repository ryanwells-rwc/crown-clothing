import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPvnBi-2Vcd4l3fCktGk05uDY1db_qe18",
    authDomain: "crown-clothing-db-ab3e0.firebaseapp.com",
    projectId: "crown-clothing-db-ab3e0",
    storageBucket: "crown-clothing-db-ab3e0.appspot.com",
    messagingSenderId: "601239594482",
    appId: "1:601239594482:web:0556a6a5c709b8ca04376b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log('user doc ref', userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log('user snapshot', userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
}