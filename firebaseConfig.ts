import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA3ntZxJCM6ZhhqXLmNej6B89PD47iNm5o",
  authDomain: "Thrones.firebaseapp.com",
  projectId: "thrones-db3f8",
  storageBucket: "Thrones.appspot.com",
  messagingSenderId: "1024293307933",
  appId: "1:1024293307933:android:99be103256aa21ed4b68f4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
