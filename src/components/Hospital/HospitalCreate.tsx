import { Create, CreateProps } from "react-admin";
import { HospitalForm } from "./HospitalForm";

export const HospitalCreate = (props: CreateProps) => (
  <Create title="Créer un Hôpital" {...props} redirect="list">
    <HospitalForm />
  </Create>
);
