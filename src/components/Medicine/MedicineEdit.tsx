import { Edit, EditProps } from "react-admin";
import { MedicineForm } from "./MedicineForm";

export const MedicineEdit = (props: EditProps) => (
  <Edit {...props} title="Modifier  un medicament " redirect="show">
    <MedicineForm />
  </Edit>
);
