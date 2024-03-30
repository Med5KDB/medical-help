import {
  Datagrid,
  EmailField,
  FunctionField,
  List,
  ListProps,
  ReferenceField,
  SearchInput,
  TextField,
} from "react-admin";
import ListRecordActions from "../../common/ListRecordActions";

const medicalAssistantFilters = [
  <SearchInput key="search" source="firstName,lastName" alwaysOn />,
];
const MedicalAssistantList = (props: ListProps) => (
  <List
    {...props}
    filters={medicalAssistantFilters}
    resource="medical-assistant"
  >
    <Datagrid rowClick="show">
      <TextField source="username" label="Nom d'utilisateur" />
      <TextField source="firstname" label="Prénom" />
      <TextField source="lastname" label="Nom" />
      <EmailField source="email" label="E-mail" color="#0b6bb0" />
      <TextField source="phoneNumber" label="Numéro de téléphone" />
      <ReferenceField source="doctorId" label="Docteur" reference="doctor">
        <FunctionField<{ firstname: string; lastname: string }>
          render={(record) =>
            record && `${record.firstname} ${record.lastname}`
          }
        />
      </ReferenceField>
      <ListRecordActions />
    </Datagrid>
  </List>
);

export default MedicalAssistantList;
