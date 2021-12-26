import { initializeApp } from "firebase/app";

import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBHg3UJ9GiKsKsY4cuqqk60xQANSeKpUwA",
  authDomain: "todolists-72ed0.firebaseapp.com",
  projectId: "todolists-72ed0",
  storageBucket: "todolists-72ed0.appspot.com",
  messagingSenderId: "676128226258",
  appId: "1:676128226258:web:a4a89b3fc8fa5978b6e60b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const getDataTodoLists = async () => {
  let dataLists = [];
  const TodoListsSnapShot = await getDocs(collection(db, "todolists"));
  TodoListsSnapShot.forEach((doc) => {
    dataLists.push(doc.data());
  });
  return dataLists;
};
export const addTodoDB = async (dataTodo) => {
  await addDoc(collection(db, "todolists"), dataTodo);
};
