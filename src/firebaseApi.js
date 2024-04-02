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
import { formatDate } from "./format";

const getDataByData = async (date, type) => {
  const q = query(collection(db, "Lotteries"));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  // convert data.date from timestamp to string in format DD-MM-YYYY
  data.forEach((item) => {
    item.date = formatDate(item.date.toDate());
  });

  console.log(data);
  console.log("date", date);
  console.log("type", type);

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
    item.date = formatDate(item.date.toDate());
  });

  return data;
};

const createItem = async (newItem) => {
  console.log("newItem", newItem);

  // Then convert it to a Firebase Timestamp

  // convert newItem.date from string in format MM-DD-YYYY to timestamp. date could be without leading zero. For example, 1-1-2022
  const date = newItem.date.split("/");
  const timestamp = Timestamp.fromDate(new Date(date[2], date[1] - 1, date[0]));

  newItem.date = timestamp;

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
