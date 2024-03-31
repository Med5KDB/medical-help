import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { groupBy, map } from "lodash";
import { ExpandMore } from "@mui/icons-material";
import { FormField, FormFieldValue } from "../../common/types";

const FormFieldValuesShow = (props: {
  FormFields: FormField[];
  FormFieldValues: FormFieldValue[];
}) => {
  // Filtrer les FormFields qui ont des valeurs dans FormFieldValues
  const FormFieldsWithValues = props.FormFields.filter((FormField) =>
    props.FormFieldValues.some(
      (FormFieldValue) => FormFieldValue.formFieldkey === FormField.key
    )
  );

  // Regrouper les FormFields par catégorie
  const FormFieldsByCategory = groupBy(
    FormFieldsWithValues,
    (FormField) => FormField.generalCategory
  );

  return (
    <>
      {map(FormFieldsByCategory, (FormFieldGroup, generalCategory) => {
        return (
          <Accordion key={generalCategory}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">{generalCategory}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {FormFieldGroup.map((FormField) => {
                // Trouver la valeur correspondante dans FormFieldValues
                const FormFieldValue = props.FormFieldValues.find(
                  (FormFieldValue) =>
                    FormFieldValue.formFieldkey === FormField.key
                );
                return (
                  <Box
                    key={FormField.key}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="overline">{FormField.name}</Typography>
                    <Typography variant="body2">
                      {(
                        FormFieldValue?.value || "Pas Renseigner"
                      ).toLocaleString()}
                    </Typography>
                  </Box>
                );
              })}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
};
export default FormFieldValuesShow;
