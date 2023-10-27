import { List, Datagrid, TextField, DateField, BooleanField } from "react-admin";
import PresetFilter from "./presetFilter";
import UrlCustomField from "../../utils/UrlCustomField/UrlCustomField";

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
        <UrlCustomField source="images" />
        <UrlCustomField source="url" />
        <DateField source="release" />
        <BooleanField source="isDisabled" />
      </Datagrid>
    </List>
  );
};

export default PresetList;
