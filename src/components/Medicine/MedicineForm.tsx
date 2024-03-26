import { SimpleForm, TextInput, required } from "react-admin";
import { Grid } from "@mui/material";

export const MedicineForm = () => (
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
          label="Nom du Medicament"
          validate={[required()]}
          fullWidth
          size="medium"
        />
      </Grid>
      <Grid item xs={12} sm={8}>
        <TextInput
          source="description"
          label="Description"
          fullWidth
          size="medium"
          multiline
        />
      </Grid>
    </Grid>
  </SimpleForm>
);
