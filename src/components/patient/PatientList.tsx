import { Datagrid, List, TextField } from "react-admin";

export const PatientList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" label="ID" />
      <TextField source="firstname" label="Prénom" />
      <TextField source="lastname" label="Nom" />
      <TextField source="birthDate" label="Date de naissance" />
      <TextField source="address" label="Adresse" />
      <TextField source="phoneNumber" label="Numéro de téléphone" />
      <TextField source="occupation" label="Profession" />
      <TextField source="maritalStatus" label="Situation matrimoniale" />
    </Datagrid>
  </List>
);
