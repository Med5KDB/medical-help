import {
  AutocompleteInput,
  DateInput,
  ReferenceInput,
  SelectInput,
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
          <ReferenceInput source="patientId" reference="patient">
            <AutocompleteInput validate={[required()]} label="Patient" />
          </ReferenceInput>
        </Grid>
        <Grid item xs={12} sm={8}>
          <ReferenceInput source="doctorId" reference="doctor">
            <AutocompleteInput validate={[required()]} label="Docteur" />
          </ReferenceInput>
        </Grid>
        <Grid item xs={4}>
          <SelectInput
            source="appointmentType"
            choices={[
              { id: "IN_PERSON", name: "En présentiel" },
              { id: "VIDEO_CALL", name: "En ligne" },
            ]}
            label="Type du rendez-vous"
            validate={[required()]}
            fullWidth
          />
        </Grid>
      </Grid>
    </SimpleForm>
  );
};

export default AppointmentForm;
