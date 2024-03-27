import {
  SimpleForm,
  TextInput,
  required,
} from "react-admin";
import { Grid } from "@mui/material";

export const HospitalForm = () => (
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
        <TextInput
          source="name"
          label="Nom Complet"
          validate={[required()]}
          fullWidth
          size="medium"
        />
      </Grid>
      <Grid item xs={12} sm={8}>
        <TextInput
          source="address"
          label="Addresse"
          fullWidth
          size="medium"
          validate={[required()]}
        />
      </Grid>
      <Grid item xs={12} sm={8}>
        <TextInput
          source="phoneNumber"
          label="Numéro du téléphone"
          validate={[required()]}
          size="medium"
          fullWidth
        />
      </Grid>
    </Grid>
  </SimpleForm>
);
