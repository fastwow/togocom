import { DATA } from "./mocks";

const getDataByData = async (data, type) => {
  console.log("getDataByData", data, type);

  return DATA.find((d) => d.date === data && d.type === type);
};

const getAllData = async () => {
  return DATA;
};

const api = {
  getDataByData,
  getAllData,
};

export default api;
