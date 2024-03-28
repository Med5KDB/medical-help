import {
  DateInput,
  SelectInput,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";
import { Grid } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import PhoneIcon from "@mui/icons-material/Phone";

const PatientForm = () => {
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
            source="address"
            label="Adresse"
            validate={[required()]}
            fullWidth
            InputProps={{ endAdornment: <LocationOnIcon /> }}
          />
        </Grid>
        <Grid item xs={4} mb={3}>
          <TextInput
            source="occupation"
            label="Profession"
            fullWidth
            InputProps={{ endAdornment: <WorkIcon /> }}
          />
        </Grid>
        <Grid item xs={4}>
          <SelectInput
            source="maritalStatus"
            label="Situation matrimoniale"
            validate={[required()]}
            choices={[
              { id: "SINGLE", name: "Célibataire" },
              { id: "MARIED", name: "Marié(e)" },
              { id: "DIVORCED", name: "Divorcé(e)" },
              { id: "WIDOWED", name: "Veuf/Veuve" },
            ]}
            fullWidth
          />
        </Grid>

        <Grid item xs={4}>
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
        </Grid>
        <Grid item xs={4}>
          <DateInput source="birthDate" validate={[required()]} />
        </Grid>
        <Grid item xs={4}>
          <TextInput
            source="phoneNumber"
            label="Numéro de téléphone"
            validate={[required()]}
            fullWidth
            InputProps={{ endAdornment: <PhoneIcon /> }}
          />
        </Grid>
      </Grid>
    </SimpleForm>
  );
};

export default PatientForm;
