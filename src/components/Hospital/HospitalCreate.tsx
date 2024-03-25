import { Create } from "react-admin";
import { HospitalForm } from "./HospitalForm";

export const HospitalCreate = () => (
  <Create title="Créer un Hopital">
    <HospitalForm />
  </Create>
);
