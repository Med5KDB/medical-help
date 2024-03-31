import { FormField } from "../../../common/types";
import getAllFormFields from "../../../common/formfield/formField";
import FormFieldValuesShow from "../../formFields/FormFieldsValueShow";
import { ReferenceField, useShowContext, FunctionField } from "react-admin";
import { Box, Card, Divider, Grid, Stack, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface Patient {
  firstname: String;
  lastname: String;
  birthDate: Date;
  maritalStatus: string;
  occupation: String;
  address: String;
}

const PatientShow = (record: any) => (
  <>
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Box
        sx={{
          m: 1,
          mt: 3,
          display: "inline-block",
        }}
      >
        <AccountCircleIcon sx={{ fontSize: "120px" }} color="inherit" />
      </Box>
      <Box
        sx={{
          display: "inline-block",
          ml: 2,
          top: 0,
        }}
      >
        <Typography fontWeight={"bold"} sx={{ mt: 1 }} variant="h5">
          {record?.firstname} {record?.lastname}
        </Typography>
        <Typography fontSize={18} sx={{ mt: 1 }}>
          {record?.occupation}
        </Typography>
      </Box>
    </Grid>
    <Divider sx={{ mb: 1, mt: 3 }} />
    <Grid container pr={1} pl={1} rowSpacing={2}>
      <Grid item sm={6}>
        <Typography fontWeight={500} sx={{ mt: 1, mb: 1 }} fontSize={20}>
          Situation matrimoniale
        </Typography>
      </Grid>
      <Grid
        item
        sm={6}
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="flex-end"
      >
        <Typography fontWeight={"bold"} sx={{ mt: 1, mb: 1 }}>
          {record?.maritalStatus}
        </Typography>
      </Grid>
      <Grid item sm={6}>
        <Typography fontWeight={500} sx={{ mt: 1, mb: 1 }} fontSize={20}>
          Téléphone
        </Typography>
      </Grid>
      <Grid
        item
        sm={6}
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="flex-end"
      >
        <Typography fontWeight={"bold"} sx={{ mt: 1 }}>
          {record?.phoneNumber}
        </Typography>
      </Grid>
      <Grid item sm={6}>
        <Typography fontWeight={500} sx={{ mt: 1, mb: 1 }} fontSize={20}>
          Date naissance
        </Typography>
      </Grid>
      <Grid
        item
        sm={6}
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="flex-end"
      >
        <Typography fontWeight={"bold"}>
          {new Date(record?.birthDate).toLocaleDateString()}
        </Typography>
      </Grid>
    </Grid>
  </>
);

export const MedicalRecordShowForm2 = () => {
  const { record } = useShowContext();
  const formFields: FormField[] = getAllFormFields();

  return (
    <Grid container>
      <Grid item xs={12}>
        <ReferenceField
          source="patientId"
          label="Patient"
          reference="patient"
          link="show"
        >
          <Grid item xs={6} sm={6}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <Typography>Nom Complet Patient : </Typography>
              <FunctionField<{ record: Patient }> render={PatientShow} />
            </Stack>
          </Grid>
        </ReferenceField>
      </Grid>
      <Grid item sm={12}></Grid>
    </Grid>
  );
};
export const MedicalRecordShowForm = () => {
  const { record } = useShowContext();
  const formFields: FormField[] = getAllFormFields();

  return (
    <>
      <Card sx={{ height: "76vh" }}>
        <Grid flex={1} container height="100%">
          <Grid
            item
            xs={5}
            sm={5}
            sx={{ borderRight: "0.1px solid #D8D8D8" }}
            height="100%"
          >
            {" "}
            <ReferenceField
              source="patientId"
              label="Patient"
              reference="patient"
              link="show"
            >
              <FunctionField<{ record: Patient }> render={PatientShow} />
            </ReferenceField>
          </Grid>

          <Grid xs={7} sm={7} height="100%" flex={1}>
            <Grid sx={{ ml: 1, mb: 1, mt: 2, mr: 1 }} height="100%">
              <FormFieldValuesShow
                FormFieldValues={record.formFieldValue}
                FormFields={formFields}
              />
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};
