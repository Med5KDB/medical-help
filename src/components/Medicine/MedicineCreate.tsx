import { Create, CreateProps } from "react-admin";
import { MedicineForm } from "./MedicineForm";

export const MedicineCreate = (props: CreateProps) => (
  <Create title="Ajouter un medicament " {...props}>
    <MedicineForm />
  </Create>
);
