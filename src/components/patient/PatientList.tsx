import {
  Datagrid,
  DateField,
  FunctionField,
  List,
  TextField,
} from "react-admin";
import ListRecordActions from "../../common/ListRecordActions";
import MaritalStatusChip from "./MaritalStatusChip";

export const PatientList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="firstname" label="Prénom" />
      <TextField source="lastname" label="Nom" />
      <DateField source="birthDate" label="Date de naissance" />
      <TextField source="address" label="Adresse" />
      <TextField source="phoneNumber" label="Numéro de téléphone" />
      <TextField source="occupation" label="Profession" />
      <FunctionField
        source="maritalStatus"
        label="Situation matrimoniale"
        render={(record) =>
          record?.maritalStatus ? (
            <MaritalStatusChip status={record.maritalStatus} />
          ) : null
        }
      />
      <ListRecordActions />
    </Datagrid>
  </List>
);
