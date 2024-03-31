import {
  Datagrid,
  DateField,
  List,
  ListProps,
  SearchInput,
  TextField,
} from "react-admin";
import ListRecordActions from "../../common/ListRecordActions";

const PatientFilters = [<SearchInput key="search" source="search" alwaysOn />];
export const PatientList = (props: ListProps) => (
  <List filters={PatientFilters} {...props}>
    <Datagrid rowClick="show">
      <TextField source="firstname" label="Prénom" />
      <TextField source="lastname" label="Nom" />
      <DateField source="birthDate" label="Date de naissance" />
      <TextField source="address" label="Adresse" />
      <TextField source="phoneNumber" label="Numéro de téléphone" />
      <TextField source="occupation" label="Profession" />
      <TextField source="maritalStatus" label="Situation matrimoniale" />
      <ListRecordActions />
    </Datagrid>
  </List>
);
