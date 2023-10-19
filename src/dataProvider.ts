import jsonServerProvider from "ra-data-json-server";
const apiUrl = process.env.SERVER_URL;

export const dataProvider = jsonServerProvider(
  apiUrl
);
