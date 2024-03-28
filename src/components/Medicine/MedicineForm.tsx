import { SimpleForm, TextInput, required } from "react-admin";
import { Grid } from "@mui/material";
import HealingIcon from "@mui/icons-material/Healing";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";

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
          label="Nom du Médicament"
          validate={[required()]}
          fullWidth
          size="medium"
          InputProps={{ endAdornment: <HealingIcon /> }}
        />
      </Grid>
      <Grid item xs={12} sm={8}>
        <TextInput
          source="description"
          label="Description"
          fullWidth
          size="medium"
          multiline
          InputProps={{ endAdornment: <ViewHeadlineIcon /> }}
        />
      </Grid>
    </Grid>
  </SimpleForm>
);
