import { Create, CreateProps } from "react-admin";
import { MedicalRecordForm } from "./MedicalRecordForm";

export const MedicalRecordCreate = (props: CreateProps) => (
  <Create title="Créer un dossier médical" {...props} redirect="edit">
    <MedicalRecordForm />
  </Create>
);
