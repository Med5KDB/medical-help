import { Create, CreateProps } from "react-admin";
import { MedicineForm } from "./MedicineForm";

export const MedicineCreate = (props: CreateProps) => (
  <Create {...props} title="Ajouter un medicament " redirect="show">
    <MedicineForm />
  </Create>
);
