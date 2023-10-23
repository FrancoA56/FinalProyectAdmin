import { List, Datagrid, TextField, DateField } from "react-admin";
import UserFilter from "./userFilters";

const UserList = (props) => {
  return (
    <List {...props} filters={<UserFilter />}>
      <Datagrid rowClick="edit">
        <TextField source="name" />
        <TextField source="email" />
        <TextField source="about" />
        <TextField source="firstname" />
        <TextField source="lastname" />
        <TextField source="country" />
        <TextField source="city" />
        <TextField source="zipcode" />
        <TextField source="isDisabled" />
        <DateField source="createdAt" showTime />
        <TextField label="Logo" source="logo"/>
      </Datagrid>
    </List>
  );
};

export default UserList;