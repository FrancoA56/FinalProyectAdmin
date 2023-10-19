import jsonServerProvider from "ra-data-json-server";
const URL = process.env.SERVER_URL;

export const dataProvider = jsonServerProvider(
  URL
);
