import {
  PasswordInput,
  SelectInput,
  SimpleForm,
  TextInput,
  email,
  required,
} from "react-admin";
import { Grid } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StarRateIcon from "@mui/icons-material/StarRate";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
const DoctorForm = () => {
  return (
    <SimpleForm>
      <Grid container columnSpacing={2} mt={2} pt={2} pb={2}>
        <Grid item xs={12} sm={4} mb={2}>
          <TextInput
            source="firstname"
            label="Prénom"
            validate={[required()]}
            fullWidth
            InputProps={{ endAdornment: <AccountCircleIcon /> }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextInput
            source="lastname"
            label="Nom"
            fullWidth
            validate={[required()]}
            InputProps={{ endAdornment: <AccountCircleIcon /> }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextInput
            source="username"
            label="Nom d'utilisateur (Pseudo)"
            validate={[required()]}
            fullWidth
            InputProps={{ endAdornment: <PersonIcon /> }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextInput
            source="email"
            type="email"
            label="Email"
            fullWidth
            validate={email()}
            InputProps={{ endAdornment: <EmailIcon /> }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextInput
            source="speciality"
            label="Spécialité"
            validate={[required()]}
            fullWidth
            InputProps={{ endAdornment: <StarRateIcon /> }}
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
          <PasswordInput source="password" label="Mot de passe" validate={[required()]} fullWidth />
        </Grid>
      </Grid>
    </SimpleForm>
  );
};

export default DoctorForm;
