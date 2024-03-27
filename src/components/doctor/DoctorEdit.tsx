import DoctorForm from "./DoctorForm";
import { Edit, EditProps } from "react-admin";

const DoctorEdit = (props: EditProps) => (
  <Edit title="Modifier un docteur" {...props} redirect="show">
    <DoctorForm />
  </Edit>
);

export default DoctorEdit;
