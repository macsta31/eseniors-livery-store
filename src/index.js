import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Files from './routes/Files';
import { initializeApp } from 'firebase/app'
import { getStorage, ref } from 'firebase/storage'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

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
const storage = getStorage(firebaseApp)

const storageRef = ref(storage)

export { firebaseApp, storage, storageRef };

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="Files/:Account" element={<Files />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


