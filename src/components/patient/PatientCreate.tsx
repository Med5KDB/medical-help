import { Create } from "react-admin";
import PatientForm from "./PatientForm";

export const PatientCreate = () => (
  <Create title="Créer un patient">
    <PatientForm />
  </Create>
);
