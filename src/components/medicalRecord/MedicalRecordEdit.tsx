import { Edit, EditProps } from "react-admin";
import { MedicalRecordEditForm } from "./medicalRecordForm/MedicalRecordEditForm";

const MedicalRecordEdit = (props: EditProps) => (
  <Edit {...props} title="Modifier un dossier medical" redirect="list">
    <MedicalRecordEditForm />
  </Edit>
);

export default MedicalRecordEdit;
