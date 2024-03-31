import {
  TextField,
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
} from "react-admin";
import { Grid } from "@mui/material";

const DoctorShow = (props: ShowProps) => {
  return (
    <Show {...props}>
      <Grid container columnSpacing={1}>
        <Grid item xs={12} sm={4}>
          <SimpleShowLayout>
            <TextField label="Prénom" source="firstname" />
            <TextField label="Nom" source="lastname" />
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
            <TextField label="Spécialité" source="speciality" />
            <ReferenceField
              label="Hopital"
              source="hospitalId"
              reference="hospital"
              link="show"
            />
          </SimpleShowLayout>
        </Grid>
      </Grid>
    </Show>
  );
};

export default DoctorShow;
