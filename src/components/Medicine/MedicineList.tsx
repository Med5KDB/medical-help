import { Datagrid, List, ListProps, SearchInput, TextField } from "react-admin";
import ListRecordActions from "../../common/ListRecordActions";

const hospitalFilters = [<SearchInput key="search" source="name" alwaysOn />];

export const MedicinetList = (props: ListProps) => (
  <List {...props} filters={hospitalFilters}>
    <Datagrid rowClick="edit">
      <TextField source="name" label="Nom du Medicament" />
      <TextField source="description" label="Description" />
      <ListRecordActions />
    </Datagrid>
  </List>
);
