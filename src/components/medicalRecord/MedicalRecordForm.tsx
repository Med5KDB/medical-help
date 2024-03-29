import {
  AutocompleteInput,
  Datagrid,
  DateInput,
  List,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
  required,
} from "react-admin";
import { Grid } from "@mui/material";

export const MedicalRecordForm = () => (
  <SimpleForm>
    <Grid
      container
      //   direction="column"
      justifyContent="space-around"
      alignItems="center"
      flex={1}
      mt={15}
      mb={15}
    >
      <Grid item xs={12} sm={8}>
        <ReferenceInput
          source="patientId"
          reference="patient"
          //   validate={[required()]}
        >
          <AutocompleteInput label="Patient" />
        </ReferenceInput>
        {/* <List resource="patient">
            <Datagrid rowClick="show">
              <TextField source="firstname" label="Prénom" />
              <TextField source="lastname" label="Nom" />
              <TextField source="birthDate" label="Date de naissance" />
              <TextField source="address" label="Adresse" />
              <TextField source="phoneNumber" label="Numéro de téléphone" />
              <TextField source="occupation" label="Profession" />
              <TextField source="maritalStatus" label="Situation matrimoniale" />
            </Datagrid>
          </List> */}
      </Grid>
      {/* <Grid item xs={12} sm={8}>
            <TextInput
              source="address"
              label="Addresse"
              fullWidth
              size="medium"
              validate={[required()]}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <NumberInput
              source="phoneNumber"
              label="Numéro du téléphone"
              validate={[required()]}
              size="medium"
              fullWidth
            />
          </Grid> */}
    </Grid>
  </SimpleForm>
);
