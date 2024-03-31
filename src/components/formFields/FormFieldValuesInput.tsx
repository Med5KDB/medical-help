import { DateInput, InputProps, useInput } from "react-admin";

import {
  FormField,
  FormFieldValue,
  FormFieldValueType,
} from "../../common/types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import ObjectID from "bson-objectid";
import { groupBy, map } from "lodash";
import { ComponentType } from "react";
import { ExpandMore } from "@mui/icons-material";

const inputComponentsByFormFieldValueType: {
  [key in FormFieldValueType]: ComponentType<any>;
} = {
  [FormFieldValueType.Text]: TextField,
  [FormFieldValueType.Date]: DateInput,
  [FormFieldValueType.Boolean]: TextField,
  [FormFieldValueType.Number]: TextField,
  [FormFieldValueType.Single_choice]: TextField,
  [FormFieldValueType.Multi_choice]: TextField,
};

const RAFormFieldValuesInput = (
  props: InputProps & {
    FormFields: FormField[];
  }
) => {
  const { field } = useInput({
    ...props,
  });

  const fieldValue = (field.value || []) as FormFieldValue[];

  return (
    <FormFieldValuesInput
      FormFields={props.FormFields}
      value={fieldValue}
      onChange={(FormFieldValues) => {
        field.onChange(FormFieldValues);
      }}
    />
  );
};

export default RAFormFieldValuesInput;

export const FormFieldValuesInput = (props: {
  FormFields: FormField[];
  value: FormFieldValue[];
  onChange: (values: FormFieldValue[]) => void;
}) => {
  const fieldValue = props.value;
  const FormFieldsBygeneralCategory = groupBy(
    props.FormFields.filter((FormField) => !FormField.isCalculated),
    (FormField) => FormField.generalCategory
  );
  return (
    <>
      {map(FormFieldsBygeneralCategory, (FormFieldGroup, generalCategory) => {
        return (
          <Accordion
            key={generalCategory}
            sx={{
              width: "100%",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography>{generalCategory}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                {FormFieldGroup.map((FormField) => {
                  const FormFieldValue = fieldValue.find(
                    (FormFieldValue) =>
                      FormFieldValue.formFieldkey === FormField.key
                  );
                  const InputComponent =
                    inputComponentsByFormFieldValueType[FormField.valueType];

                  return (
                    <Grid item sm={6}>
                      <InputComponent
                        label={FormField.name}
                        helperText={FormField.description}
                        // {...field}
                        value={FormFieldValue?.value || ""}
                        onChange={(e: any) => {
                          const value = e.target.value;
                          const newFormFieldValue: FormFieldValue = {
                            id: new ObjectID().toHexString(),
                            formFieldkey: FormField.key,
                            value: value,
                          };

                          const updatedFormFieldValues = FormFieldValue
                            ? fieldValue.map((FormFieldValue) =>
                                FormFieldValue.formFieldkey === FormField.key
                                  ? newFormFieldValue
                                  : FormFieldValue
                              )
                            : fieldValue.concat(newFormFieldValue);
                          props.onChange(updatedFormFieldValues);
                        }}
                        fullWidth
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
};
