import mockApi from "./mockApi";
import firebaseApi from "./firebaseApi";

const isMock = true;

const correntApi = isMock ? mockApi : firebaseApi;

const mapItem = (itm) => {
  if (!itm) return itm;

  return {
    ...itm,
    notes: `
  Félicitations! Tu as gagné une voiture ${itm.prizes[0].title} au jeu "Fan Foot"! Tu seras contacter uniquement par le 888 pour recupérer ton lot`,
  };
};

const getDataByData = async (data, type) => {
  console.log("getDataByData", data, type);

  const res = await correntApi.getDataByData(data, type);

  return mapItem(res);
};

const getAllData = async () => {
  const res = await correntApi.getAllData();

  return res.map(mapItem);
};

const createItem = async (newItem) => {
  const res = await correntApi.createItem(newItem);

  return mapItem(res);
};

const api = {
  getDataByData,
  createItem,
  getAllData,
};

export default api;
