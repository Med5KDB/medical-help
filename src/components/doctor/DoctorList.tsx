import {
  Datagrid,
  EmailField,
  List,
  ListProps,
  SearchInput,
  TextField,
} from "react-admin";

const doctorFilters = [
  <SearchInput key="search" source="firstName,lastName" alwaysOn />,
];
export const DoctorList = (props: ListProps) => (
  <List
    {...props}
    filters={doctorFilters}
    resource="doctor"
  >
    <Datagrid rowClick="edit">
      <TextField source="username" label="Nom d'utilisateur" />
      <TextField source="firstname" label="Prénom" />
      <TextField source="lastname" label="Nom" />
      <EmailField source="email" label="E-mail"/>
      <TextField source="phoneNumber" label="Numéro de téléphone" />
      <TextField source="speciality" label="Spécialité" />
    </Datagrid>
  </List>
);
