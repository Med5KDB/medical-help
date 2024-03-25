import { Edit } from "react-admin";
import { MedicineForm } from "./MedicineForm";

export const MedicineEdit = () => (
  <Edit title="Modifier  un medicament ">
    <MedicineForm />
  </Edit>
);
