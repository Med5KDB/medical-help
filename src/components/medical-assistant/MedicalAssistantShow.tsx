import {
  TextField,
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
} from "react-admin";
import { Grid } from "@mui/material";

const MedicalAssistantShow = (props: ShowProps) => {
  return (
    <Show {...props}>
      <Grid container columnSpacing={1}>
        <Grid item xs={12} sm={4}>
          <SimpleShowLayout>
            <TextField label="Prénom" source="firstname" />
            <TextField label="Nom" source="lastname" />
          </SimpleShowLayout>
          <SimpleShowLayout>
            <TextField label="Mot de passe" source="password" />
            <TextField label="Nom d'utilisateur" source="username" />
          </SimpleShowLayout>
        </Grid>
        <Grid item xs={12} sm={4}>
          <SimpleShowLayout>
            <TextField label="Email" source="email" />
            <TextField label="Numéro de téléphone" source="phoneNumber" />
          </SimpleShowLayout>
        </Grid>
        <Grid item xs={12} sm={4}>
          <SimpleShowLayout>
            <ReferenceField
              label="Docteur"
              source="doctorId"
              reference="doctor"
              link="show"
            />
          </SimpleShowLayout>
        </Grid>
      </Grid>
    </Show>
  );
};

export default MedicalAssistantShow;
