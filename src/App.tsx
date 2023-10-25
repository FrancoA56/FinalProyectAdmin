import { Admin, Resource, MenuItemLink } from "react-admin";
import UserList from "./components/user/userList";
import PresetList from "./components/preset/presetList";
import PresetCreate from "./components/preset/presetCreate";
import PresetEdit from "./components/preset/presetEdit";
import InvoiceList from "./components/purchase/purchaseList";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';
export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="user/admin" list={UserList} icon={PeopleIcon} />
    <Resource name="preset" list={PresetList} create={PresetCreate} edit={PresetEdit} icon={InventoryIcon}/>
    <Resource name="shop/invoice" list={InvoiceList} icon={ShoppingCartIcon}/>
  </Admin>
);
