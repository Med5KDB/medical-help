import { Create, CreateProps } from "react-admin";
import PatientForm from "./PatientForm";

export const PatientCreate = (props: CreateProps) => (
  <Create {...props} title="Créer un patient" redirect="list">
    <PatientForm />
  </Create>
);
