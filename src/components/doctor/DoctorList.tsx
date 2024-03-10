import { Datagrid, EmailField, List, TextField } from "react-admin";

export const DoctorList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="firstname" />
      <TextField source="lastname" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="phoneNumber" />
      <TextField source="speciality" />
    </Datagrid>
  </List>
);
