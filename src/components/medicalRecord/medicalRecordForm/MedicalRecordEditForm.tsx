import { SimpleForm } from "react-admin";
import getAllFormFields from "../../../common/formfield/formField";
import RAFormFieldValuesInput from "../../formFields/FormFieldValuesInput";

export const MedicalRecordEditForm = () => {
  const FormFields = getAllFormFields();
  return (
    <SimpleForm>
      <RAFormFieldValuesInput source="formFieldValue" FormFields={FormFields} />
    </SimpleForm>
  );
};
