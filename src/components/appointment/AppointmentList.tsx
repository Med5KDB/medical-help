import React from "react";
import {
  Datagrid,
  FunctionField,
  List,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";

const AppointmentList = (props: ListProps) => {
  return (
    <List {...props} resource="appointment">
      <Datagrid rowClick="show">
        <TextField source="date" label="Date de RDV" />
        <TextField source="status" label="Statut " />
        <ReferenceField source="doctorId" label="Docteur" reference="doctor">
          <FunctionField<{ firstname: string; lastname: string }>
            render={(record) =>
              record && `${record.firstname} ${record.lastname}`
            }
          />
        </ReferenceField>
        <ReferenceField source="patientId" label="Patient" reference="patient">
          <FunctionField<{ firstname: string; lastname: string }>
            render={(record) =>
              record && `${record.firstname} ${record.lastname}`
            }
          />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};

export default AppointmentList;
