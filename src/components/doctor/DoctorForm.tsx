import {
  SelectInput,
  SimpleForm,
  TextInput,
  email,
  required,
} from "react-admin";
import { Grid } from "@mui/material";
const DoctorForm = () => {
  return (
    <SimpleForm>
      <Grid container columnSpacing={2}>
        <Grid item xs={12} sm={4}>
          <TextInput
            source="firstname"
            label="Prénom"
            validate={[required()]}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextInput
            source="lastname"
            label="Nom"
            fullWidth
            validate={[required()]}
          />
        </Grid>
        <Grid item xs={4}>
          <TextInput
            source="username"
            label="Nom d'utilisateur (Pseudo)"
            validate={[required()]}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextInput
            source="email"
            type="email"
            label="Email"
            fullWidth
            validate={email()}
          />
        </Grid>
        <Grid item xs={4}>
          <TextInput
            source="speciality"
            label="Spécialité"
            validate={[required()]}
            fullWidth
          />
        </Grid>

        {/* <Grid item xs={4}>
          <SelectInput
            source="sexe"
            choices={[
              { id: "MALE", name: "Masculin" },
              { id: "FEMALE", name: "Féminin" },
            ]}
            label="Sexe"
            validate={[required()]}
            fullWidth
          />
        </Grid> */}
        <Grid item xs={4}>
          <TextInput
            source="password"
            type="password"
            validate={[required()]}
            fullWidth
          />
        </Grid>
      </Grid>
    </SimpleForm>
  );
};

export default DoctorForm;
