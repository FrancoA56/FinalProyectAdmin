import { Admin, Resource } from "react-admin";
import UserList from "./components/user/userList";
import PresetList from "./components/preset/presetList";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="user/users" list={UserList} />
    <Resource name="preset" list={PresetList} />
  </Admin>
);
