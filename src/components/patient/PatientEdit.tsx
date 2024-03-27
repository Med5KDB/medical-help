import { Edit, EditProps } from "react-admin";
import PatientForm from "./PatientForm";

const PatientEdit = (props: EditProps) => (
  <Edit {...props} title="Modifier un patient" redirect="show">
    <PatientForm />
  </Edit>
);

export default PatientEdit;
