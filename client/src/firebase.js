
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCDNXWj6tbz20mMLX-PpbCs88B6L-iSWa8",
    authDomain: "assignment-2-d8437.firebaseapp.com",
    projectId: "assignment-2-d8437",
    storageBucket: "assignment-2-d8437.appspot.com",
    messagingSenderId: "424731843208",
    appId: "1:424731843208:web:4358912330c37a3a915d3d",
    measurementId: "G-ZYB5L3DV49"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;


