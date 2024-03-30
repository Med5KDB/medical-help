import {
  AutocompleteInput,
  DateInput,
  ReferenceInput,
  SimpleForm,
  required,
} from "react-admin";
import { Grid } from "@mui/material";
const AppointmentForm = () => {
  return (
    <SimpleForm>
      <Grid container columnSpacing={2}>
        <Grid item xs={12} sm={4}>
          <DateInput
            source="date"
            label="Date du Rendez-vous"
            validate={[required()]}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <ReferenceInput
            source="patientId"
            reference="patient"
          >
            <AutocompleteInput validate={[required()]} label="Patient" />
          </ReferenceInput>
        </Grid>
        <Grid item xs={12} sm={8}>
          <ReferenceInput source="doctorId" reference="doctor">
            <AutocompleteInput validate={[required()]} label="Docteur" />
          </ReferenceInput>
        </Grid>
      </Grid>
    </SimpleForm>
  );
};

export default AppointmentForm;
