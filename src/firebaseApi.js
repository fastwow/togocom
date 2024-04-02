import { DATA } from "./mocks";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  query,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { Timestamp } from "firebase/firestore";

const getDataByData = async (date, type) => {
  console.log("date", date);
  console.log("type", type);

  const q = query(collection(db, "Lotteries"));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
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
  const data = querySnapshot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
  console.log("data", data);

  // convert data.date from timestamp to string in format MM-DD-YYYY
  data.forEach((item) => {
    item.date = item.date.toDate().toLocaleDateString();
  });

  return data;
};

const createItem = async (newItem) => {
  console.log("newItem", newItem);

  // convert newItem.date from string in format DD-MM-YYYY to firebase timestamp

  // Convert your date to a JavaScript Date object
  const dateParts = newItem.date.split("/");
  const jsDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]); // month is zero-based

  console.log("jsDate", jsDate);

  // Then convert it to a Firebase Timestamp
  const timestamp = Timestamp.fromDate(jsDate);
  newItem.date = timestamp;

  console.log("newItem", newItem);

  // insert newItem to database sdk > 9
  return await addDoc(collection(db, "Lotteries"), newItem);
};

const deleteItem = async (id) => {
  console.log("id", id);

  await deleteDoc(doc(db, "Lotteries", id));
};

const api = {
  getDataByData,
  createItem,
  getAllData,
  deleteItem,
};

export default api;
