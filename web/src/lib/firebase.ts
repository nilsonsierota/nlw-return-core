// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeJP16hCN2WilgomnqiQhlSnERRIdW0Sk",
  authDomain: "nlw-return-core.firebaseapp.com",
  projectId: "nlw-return-core",
  storageBucket: "nlw-return-core.appspot.com",
  messagingSenderId: "960813401144",
  appId: "1:960813401144:web:98f4c89c8700f2c66f52cd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GithubAuthProvider();
const auth = getAuth();

export { provider, auth };
