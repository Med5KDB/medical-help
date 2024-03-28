import {
  Datagrid,
  EmailField,
  List,
  ListProps,
  ReferenceField,
  SearchInput,
  TextField,
} from "react-admin";
import ListRecordActions from "../../common/ListRecordActions";

const doctorFilters = [
  <SearchInput key="search" source="firstName,lastName" alwaysOn />,
];
export const DoctorList = (props: ListProps) => (
  <List {...props} filters={doctorFilters} resource="doctor">
    <Datagrid rowClick="show">
      <TextField source="username" label="Nom d'utilisateur" />
      <TextField source="firstname" label="Prénom" />
      <TextField source="lastname" label="Nom" />
      <EmailField source="email" label="E-mail" color="#0b6bb0" />
      <TextField source="phoneNumber" label="Numéro de téléphone" />
      <TextField source="speciality" label="Spécialité" />
      <ReferenceField
        source="hospitalId"
        reference="hospital"
        label="Hopital"
        link="show"
      >
        <TextField source="name" />
      </ReferenceField>
      <ListRecordActions />
    </Datagrid>
  </List>
);
