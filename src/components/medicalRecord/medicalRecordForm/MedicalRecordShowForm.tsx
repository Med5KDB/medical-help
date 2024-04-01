import { FormField } from "../../../common/types";
import getAllFormFields from "../../../common/formfield/formField";
import FormFieldValuesShow from "../../formFields/FormFieldsValueShow";
import { ReferenceField, useShowContext, FunctionField } from "react-admin";
import { Box, Card, Divider, Grid, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import maritalStatusLabel from "../../../utils/MaritalStatusLabel";

interface Patient {
  firstname: String;
  lastname: String;
  birthDate: Date;
  maritalStatus: string;
  occupation: String;
  address: String;
}

const PatientShow = (record: any) => {
  return (
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
          <AccountCircleIcon
            sx={{ fontSize: { sm: "120px", xs: "70px" } }}
            color="inherit"
          />
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
          <Typography fontWeight={500} sx={{ mt: 1, mb: 1 }} fontSize={17}>
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
            {maritalStatusLabel(record?.maritalStatus)}
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography fontWeight={500} sx={{ mt: 1, mb: 1 }} fontSize={17}>
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
          <Typography fontWeight={500} sx={{ mt: 1, mb: 1 }} fontSize={17}>
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
};

export const MedicalRecordShowForm = () => {
  const { record } = useShowContext();
  const formFields: FormField[] = getAllFormFields();

  return (
    <>
      <Card sx={{ height: "76vh", overflowY: "scroll" }}>
        <Grid flex={1} container height="100%">
          <Grid
            item
            xs={12}
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
          <Grid item xs={12} sm={7} height="100%" flex={1}>
            <Grid sx={{ m: 1, mt: 2, overflowY: "scroll" }} height="100%">
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
