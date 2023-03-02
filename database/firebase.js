// Import the functions you need from the SDKs you need
// import any other Firebase modules you want to use

import { initializeApp } from 'firebase/app';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFdhNGEM5X1giEJRB7osGJvPudbr_BUiM",
  authDomain: "people-discover.firebaseapp.com",
  projectId: "people-discover",
  storageBucket: "people-discover.appspot.com",
  messagingSenderId: "645280393380",
  appId: "1:645280393380:web:49dbd8cc10a05067785e31",
  measurementId: "G-WXRP433SJ0"
};
// export any other Firebase modules you want to use
const app = initializeApp(firebaseConfig);

export default app;