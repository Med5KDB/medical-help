import { Edit } from "react-admin";
import { HospitalForm } from "./HospitalForm";

export const HospitalEdit = () => (
  <Edit title="Modifier un Hopital">
    <HospitalForm />
  </Edit>
);
