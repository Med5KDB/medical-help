import { Datagrid, List, ListProps, SearchInput, TextField } from "react-admin";
import ListRecordActions from "../../common/ListRecordActions";

const hospitalFilters = [<SearchInput key="search" source="name" alwaysOn />];
export const hospitalList = (props: ListProps) => (
  <List {...props} filters={hospitalFilters}>
    <Datagrid rowClick="show">
      <TextField source="name" label="Nom" />
      <TextField source="phoneNumber" label="Numéro téléphone" />
      <TextField source="address" label="Adresse" />
      <ListRecordActions />
    </Datagrid>
  </List>
);
