import mockApi from "./mockApi";
import firebaseApi from "./firebaseApi";

const isMock = false;

const correntApi = isMock ? mockApi : firebaseApi;

const mapItem = (itm) => {
  if (!itm) return itm;

  return {
    ...itm,
    notes: `
    Félicitations! Tu as gagné ${itm.prizes[0].title} du jeu " Fan Foot"!`,
  };
};

const getDataByData = async (date, type, limit) => {
  const res = await correntApi.getDataByData(date, type, limit);

  if (limit === 1) {
    return mapItem(res);
  }
  return res.map(mapItem);
};

const getAllData = async () => {
  const res = await correntApi.getAllData();

  return res.map(mapItem);
};

const createItem = async (newItem) => {
  await correntApi.createItem(newItem);
};

const deleteItem = async (id) => {
  await correntApi.deleteItem(id);
};

const api = {
  getDataByData,
  createItem,
  getAllData,
  deleteItem,
};

export default api;
