
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyDp0lKmq_sr6lWq9-m6TAk1FvpaG65ujI8",
    authDomain: "oasisdental-25-dec-23.firebaseapp.com",
    projectId: "oasisdental-25-dec-23",
    storageBucket: "oasisdental-25-dec-23.appspot.com",
    messagingSenderId: "1013866089479",
    appId: "1:1013866089479:web:486382ca89c117c6b56ea2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

