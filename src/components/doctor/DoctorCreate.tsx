import { Create } from "react-admin";
import DoctorForm from "./DoctorForm";

export const DoctorCreate = () => (
  <Create title="Créer un docteur">
    <DoctorForm />
  </Create>
);
