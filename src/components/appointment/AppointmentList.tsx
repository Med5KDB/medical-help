import {
  ChipField,
  Datagrid,
  DateField,
  FunctionField,
  List,
  ListProps,
  ReferenceField,
} from "react-admin";
import AppointmentStatusChip from "./AppointmentStatusChip";
import AppointmentTypeChip from "./AppointmentTypeChip";

const AppointmentList = (props: ListProps) => {
  return (
    <List {...props} resource="appointment">
      <Datagrid rowClick="show">
        <DateField source="date" label="Date de rendez-vous" />
        <FunctionField
          source="status"
          label="Statut"
          render={(record) =>
            record?.status ? (
              <AppointmentStatusChip status={record.status} />
            ) : null
          }
        />
        <FunctionField
          source="appointmentType"
          label="Type de rendez-vous"
          render={(record) =>
            record?.appointmentType ? (
              <AppointmentTypeChip status={record.appointmentType} />
            ) : null
          }
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
