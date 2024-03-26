import { Edit, EditProps } from "react-admin";
import { MedicineForm } from "./MedicineForm";

export const MedicineEdit = (props: EditProps) => (
  <Edit title="Modifier  un medicament " {...props}>
    <MedicineForm />
  </Edit>
);
