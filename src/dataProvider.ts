import jsonServerProvider from "ra-data-json-server";
// Carga variables de entorno desde el archivo .env


const apiUrl = import.meta.env.VITE_SERVER_URL;

export const dataProvider = jsonServerProvider(
  apiUrl
);
