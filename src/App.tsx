import { Admin, Resource } from "react-admin";
import UserList from "./components/user/userList";
import PresetList from "./components/preset/presetList";
import PresetCreate from "./components/preset/presetCreate";
import PresetEdit from "./components/preset/presetEdit";
import InvoiceList from "./components/purchase/purchaseList";
import purchaseEdit from "./components/purchase/purchaseEdit";
import reviewList from "./components/review/reviewList";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';
import Reviews from '@mui/icons-material/Reviews';

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="user/admin" list={UserList} icon={PeopleIcon} />
    <Resource name="preset" list={PresetList} create={PresetCreate} edit={PresetEdit} icon={InventoryIcon}/>
    <Resource name="shop/invoice" list={InvoiceList} edit={purchaseEdit} icon={ShoppingCartIcon} />
    <Resource name="review" list={reviewList} icon={Reviews} />
  </Admin>
);
