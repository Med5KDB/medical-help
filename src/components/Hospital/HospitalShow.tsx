import { TextField, Show, SimpleShowLayout, ShowProps } from "react-admin";
import { Grid } from "@mui/material";

const HospitalShow = (props: ShowProps) => {
  return (
    <Show {...props}>
      <Grid container columnSpacing={1}>
        <Grid item xs={12} sm={4}>
          <SimpleShowLayout>
            <TextField label="Nom" source="name" />
          </SimpleShowLayout>
        </Grid>
        <Grid item xs={12} sm={4}>
          <SimpleShowLayout>
            <TextField label="Numéro de téléphone" source="phoneNumber" />
          </SimpleShowLayout>
        </Grid>
        <Grid item xs={12} sm={4}>
          <SimpleShowLayout>
            <TextField label="Adresse" source="address" />
          </SimpleShowLayout>
        </Grid>
      </Grid>
    </Show>
  );
};

export default HospitalShow;
