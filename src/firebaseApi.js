import { DATA } from "./mocks";
import { db } from "./firebase";
import { collection, addDoc, query, getDocs } from "firebase/firestore";
import firebase from "firebase/compat/app";

const getDataByData = async (date, type) => {
  console.log("date", date);
  console.log("type", type);

  const q = query(collection(db, "Lotteries"));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => doc.data());
  console.log("data", data);

  // convert data.date from timestamp to string in format DD-MM-YYYY
  data.forEach((item) => {
    item.date = item.date.toDate().toLocaleDateString();
  });

  return data.find((item) => item.date === date && item.type === type);
};

const getAllData = async () => {
  const q = query(collection(db, "Lotteries"));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => doc.data());
  console.log("data", data);

  // convert data.date from timestamp to string in format MM-DD-YYYY
  data.forEach((item) => {
    item.date = item.date.toDate().toLocaleDateString();
  });

  return data;
};

// Assuming dateStr is in the format DD-MM-YYYY
function convertToDateTimestamp(dateStr) {
  // Split the date string into day, month, and year
  const parts = dateStr.split("-");
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1; // Month in JavaScript starts from 0
  const year = parseInt(parts[2], 10);

  // Create a JavaScript Date object
  const date = new Date(year, month, day);

  // Convert the Date object to Firestore Timestamp
  const timestamp = firebase.firestore.Timestamp.fromDate(date);

  return timestamp;
}

const createItem = async (newItem) => {
  console.log("newItem", newItem);

  // convert newItem.date from string in format DD-MM-YYYY to firebase timestamp

  // newItem.date = convertToDateTimestamp(newItem.date);

  console.log("newItem", newItem);

  // insert newItem to database sdk > 9
  return await addDoc(collection(db, "Lotteries"), newItem);
};

const api = {
  getDataByData,
  createItem,
  getAllData,
};

export default api;
