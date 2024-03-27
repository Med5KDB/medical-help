import { Create, CreateProps } from "react-admin";
import DoctorForm from "./DoctorForm";

export const DoctorCreate = (props: CreateProps) => (
  <Create {...props} title="Créer un docteur" redirect="show">
    <DoctorForm />
  </Create>
);
