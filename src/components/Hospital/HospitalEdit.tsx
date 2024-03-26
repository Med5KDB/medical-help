import { Edit, EditProps } from "react-admin";
import { HospitalForm } from "./HospitalForm";

export const HospitalEdit = (props: EditProps) => (
  <Edit title="Modifier un Hopital" {...props}>
    <HospitalForm />
  </Edit>
);
