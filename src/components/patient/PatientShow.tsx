import {
  TextField,
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  EmailField,
  FunctionField,
} from "react-admin";
import { Grid } from "@mui/material";
import MaritalStatusChip from "./MaritalStatusChip";
import SexChip from "./SexChip";

const PatientShow = (props: ShowProps) => {
  return (
    <Show {...props}>
      <Grid container columnSpacing={1}>
        <Grid item xs={12} sm={4}>
          <SimpleShowLayout>
            <TextField label="Prénom" source="firstname" />
            <TextField label="Nom" source="lastname" />
            <FunctionField
              source="sex"
              label="Sexe"
              render={(record: any) =>
                record?.sex ? (
                  <SexChip sex={record.sex} />
                ) : null
              }
            />
          </SimpleShowLayout>
        </Grid>
        <Grid item xs={12} sm={4}>
          <SimpleShowLayout>
            <DateField label="Date de naissane" source="birthDate" />
            <FunctionField
              source="maritalStatus"
              label="Situation matrimoniale"
              render={(record: any) =>
                record?.maritalStatus ? (
                  <MaritalStatusChip status={record.maritalStatus} />
                ) : null
              }
            />
            <TextField label="Profession" source="occupation" />
          </SimpleShowLayout>
        </Grid>
        <Grid item xs={12} sm={4}>
          <SimpleShowLayout>
            <EmailField label="Adresse e-mail" source="email" />
            <TextField label="Adresse" source="address" />
            <TextField label="Numéro de téléphone" source="phoneNumber" />
          </SimpleShowLayout>
        </Grid>
      </Grid>
    </Show>
  );
};

export default PatientShow;
