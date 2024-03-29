import { Edit, EditProps } from "react-admin";
import { MedicalRecordEditForm } from "./medicalRecordForm/MedicalRecordEditForm";

export const MedicalRecordEdit = (props: EditProps) => (
  <Edit {...props} title="Modifier un dossier medical" redirect="list">
    <MedicalRecordEditForm />
  </Edit>
);
<<<<<<< HEAD


=======
>>>>>>> a9cb16e (Fix problem to display reference fields)
