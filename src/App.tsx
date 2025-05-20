import "./App.css";
import MainPage from "./Pages/MainPage/MainPage";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: "coach86-61f3f.firebaseapp.com",
  projectId: "coach86-61f3f",
  storageBucket: "coach86-61f3f.firebasestorage.app",
  messagingSenderId: "676105113393",
  appId: "1:676105113393:web:21dd83e53d69a9980baa10",
  measurementId: "G-44YG93R7B7"
};

export const app = initializeApp(firebaseConfig);

function App() {
  return <MainPage />;
}

export default App;
