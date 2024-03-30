import { Edit, EditProps } from "react-admin";
import AppointmentForm from "./AppointmentForm";

export const AppointmentEdit = (props: EditProps) => (
  <Edit {...props} title="Créer un docteur" redirect="list">
    <AppointmentForm />
  </Edit>
);
