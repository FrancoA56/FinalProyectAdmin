import { List, Datagrid, TextField, DateField } from "react-admin";
import UserFilter from "./userFilters";

const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

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
        <TextField label="Logo" source="logo">
          {record => truncateText(record.logo, 30)}
        </TextField>
      </Datagrid>
    </List>
  );
};

export default UserList;
