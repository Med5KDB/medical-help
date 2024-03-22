import {
  Datagrid,
  EmailField,
  List,
  SearchInput,
  TextField,
} from "react-admin";

const doctorFilters = [
  <SearchInput
    key="search"
    source="doctor~firstName,doctor~lastName"
    alwaysOn
  />,
];
export const DoctorList = () => (
  <List filters={doctorFilters} filter={{password: "passer123"}}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="firstname" label="Prénom" />
      <TextField source="lastname" label="Nom" />
      <TextField source="username" label="Nom d'utilisateur" />
      <EmailField source="email" />
      <TextField source="phoneNumber" label="Numéro de téléphone" />
      <TextField source="speciality" />
    </Datagrid>
  </List>
);
