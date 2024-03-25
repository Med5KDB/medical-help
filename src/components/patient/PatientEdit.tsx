import { Edit, EditProps } from "react-admin";
import PatientForm from "./PatientForm";

const PatientEdit = (props: EditProps) => (
  <Edit {...props} title="Modifier un patient">
    <PatientForm />
  </Edit>
);

export default PatientEdit;
