import { List, Datagrid, TextField, DateField } from "react-admin";
import UserFilter from "./userFilters";
import TextCustomField from "../../utils/textCustomField/TextCustomField";

const UserList = (props) => {
  return (
    <List {...props} filters={<UserFilter />}>
      <Datagrid rowClick="edit">
        <TextField source="name" />
        <TextField source="email" />
        <TextField source="firstname" />
        <TextField source="lastname" />
        <TextField source="country" />
        <TextField source="city" />
        <TextField source="zipcode" />
        <TextCustomField label="Logo" source="logo"/>
        <TextCustomField source="about" />
        <TextField source="isDisabled" />
        <DateField source="createdAt" />
      </Datagrid>
    </List>
  );
};

export default UserList;