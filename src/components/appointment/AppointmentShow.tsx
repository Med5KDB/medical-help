import {
  TextField,
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  DateField,
  FunctionField,
} from "react-admin";
import { Grid } from "@mui/material";
import AppointmentTypeChip from "./AppointmentTypeChip";
import AppointmentStatusChip from "./AppointmentStatusChip";

const AppointmentShow = (props: ShowProps) => {
  return (
    <Show {...props}>
      <Grid container columnSpacing={1}>
        <Grid item xs={12} sm={4}>
          <SimpleShowLayout>
            <DateField label="Date du Rendez-vous" source="date" />
            {/* <TextField label="Date de fin" source="endDate" /> */}
            <FunctionField
              source="status"
              label="Statut du Rendez-vous"
              render={(record: any) =>
                record?.status ? (
                  <AppointmentStatusChip status={record.status} />
                ) : null
              }
            />
          </SimpleShowLayout>
        </Grid>
        <Grid item xs={12} sm={4}>
          <SimpleShowLayout>
            <TextField label="Notes" source="notes" />
            <TextField label="Precriptions" source="prescriptions" />
          </SimpleShowLayout>
        </Grid>
        <Grid item xs={12} sm={4}>
          <SimpleShowLayout>
            <TextField label="Observations" source="observations" />
            <TextField label="Diagnostic" source="diagnostic" />
          </SimpleShowLayout>
        </Grid>
        <Grid item xs={12} sm={4}>
          <SimpleShowLayout>
            <FunctionField
              source="appointmentType"
              label="Type du rendez-vous"
              render={(record: any) =>
                record?.appointmentType ? (
                  <AppointmentTypeChip status={record.appointmentType} />
                ) : null
              }
            />
            <TextField
              label="Informations de pré-consultaion "
              source="preConsultationInfo"
            />
          </SimpleShowLayout>
        </Grid>
        <Grid item xs={12} sm={4}>
          <SimpleShowLayout>
            <ReferenceField
              label="Docteur"
              source="doctorId"
              reference="doctor"
              link="show"
            />
            <ReferenceField
              label="Patient concerné"
              source="patientId"
              reference="patient"
              link="show"
            />
          </SimpleShowLayout>
        </Grid>
      </Grid>
    </Show>
  );
};

export default AppointmentShow;
