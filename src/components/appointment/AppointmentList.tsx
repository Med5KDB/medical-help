import {
  ChipField,
  Datagrid,
  DateField,
  FunctionField,
  List,
  ListProps,
  ReferenceField,
} from "react-admin";

const AppointmentList = (props: ListProps) => {
  return (
    <List {...props} resource="appointment">
      <Datagrid rowClick="show">
        <DateField source="date" label="Date de rendez-vous" />
        <ChipField source="status" label="Statut " color="warning" />
        <ChipField
          source="appointmentType"
          color="warning"
          label="Type de rendez-vous"
          emptyText="pas défini"
        />
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
