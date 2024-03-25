import DoctorForm from "./DoctorForm";
import { Edit } from "react-admin";

const DoctorEdit = () => (
  <Edit title="Modifier un docteur">
    <DoctorForm />
  </Edit>
);

export default DoctorEdit;
