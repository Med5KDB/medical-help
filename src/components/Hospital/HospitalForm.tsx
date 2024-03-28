import { SimpleForm, TextInput, required } from "react-admin";
import { Grid } from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

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
          InputProps={{ endAdornment: <ApartmentIcon /> }}
        />
      </Grid>
      <Grid item xs={12} sm={8}>
        <TextInput
          source="address"
          label="Addresse"
          fullWidth
          size="medium"
          validate={[required()]}
          InputProps={{ endAdornment: <LocationOnIcon /> }}
        />
      </Grid>
      <Grid item xs={12} sm={8}>
        <TextInput
          source="phoneNumber"
          label="Numéro du téléphone"
          validate={[required()]}
          size="medium"
          fullWidth
          InputProps={{ endAdornment: <PhoneIcon /> }}
        />
      </Grid>
    </Grid>
  </SimpleForm>
);
