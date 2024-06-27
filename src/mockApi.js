import { DATA } from "./mocks";

const getDataByData = async (data, type, limit) => {
  console.log("getDataByData", data, type);

  return [DATA.find((d) => d.date === data && d.type === type, limit)];
};

const getAllData = async () => {
  return DATA;
};

const createItem = async (newItem) => {
  DATA.push(newItem);
};

const api = {
  getDataByData,
  createItem,
  getAllData,
};

export default api;
