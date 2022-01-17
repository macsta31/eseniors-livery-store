import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyBZb0a3sjc3iJy7WYvv-NsAMLe-TmYPfKQ",
  authDomain: "livery-manager-3aa2e.firebaseapp.com",
  projectId: "livery-manager-3aa2e",
  storageBucket: "livery-manager-3aa2e.appspot.com",
  messagingSenderId: "857922078913",
  appId: "1:857922078913:web:59884e72f9fa46b8822c40",
  measurementId: "G-3JLE4Y05TG"
};

const firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp } ;

ReactDOM.render(
    <App />,
  document.getElementById('root')
);


