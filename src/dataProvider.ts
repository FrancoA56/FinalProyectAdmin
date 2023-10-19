import jsonServerProvider from "ra-data-json-server";
// Carga variables de entorno desde el archivo .env
import dotenv from 'dotenv';
dotenv.config();

const apiUrl = process.env.SERVER_URL;

export const dataProvider = jsonServerProvider(
  apiUrl
);
