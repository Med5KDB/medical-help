import {
  Create,
  DateInput,
  SelectInput,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";
import { Grid } from "@mui/material";

export const PatientCreate = () => (
  <Create title="Créer un docteur">
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
            source="address"
            label="Adresse"
            validate={[required()]}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="occupation" label="Profession" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <SelectInput
            source="maritalStatus"
            label="Situation matrimoniale"
            validate={[required()]}
            choices={[
              { id: "SINGLED", name: "Célibataire" },
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
      </Grid>
    </SimpleForm>
  </Create>
);
