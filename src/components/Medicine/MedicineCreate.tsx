import { Create } from "react-admin";
import { MedicineForm } from "./MedicineForm";

export const MedicineCreate = () => (
  <Create title="Ajouter un medicament ">
    <MedicineForm />
  </Create>
);
