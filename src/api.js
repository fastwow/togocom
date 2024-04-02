import mockApi from "./mockApi";
import firebaseApi from "./firebaseApi";

const isMock = true;

const correntApi = isMock ? mockApi : firebaseApi;

const getDataByData = async (data, type) => {
  console.log("getDataByData", data, type);

  return correntApi.getDataByData(data, type);
};

const getAllData = async () => {
  return correntApi.getAllData();
};

const createItem = async (newItem) => {
  return correntApi.createItem(newItem);
};

const api = {
  getDataByData,
  createItem,
  getAllData,
};

export default api;
