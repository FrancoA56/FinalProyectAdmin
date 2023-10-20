import { List, Datagrid, TextField, DateField } from "react-admin";
import PresetFilter from "./presetFilter";

const PresetList = (props) => {
  return (
    <List {...props} filters={<PresetFilter />}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="price" />
        <TextField source="color" />
        <TextField source="type" />
        <TextField source="category" />
        <DateField source="release" showTime />
        <TextField source="isDisabled" />
      </Datagrid>
    </List>
  );
};

export default PresetList;
