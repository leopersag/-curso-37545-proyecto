import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ-iSrO-K26TMJ-iQt5KNP-dIQnqa-K90",
  authDomain: "coder-react-js.firebaseapp.com",
  projectId: "coder-react-js",
  storageBucket: "coder-react-js.appspot.com",
  messagingSenderId: "849829649478",
  appId: "1:849829649478:web:ffd095e2f1f856adefbe47"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);