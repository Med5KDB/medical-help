import { Edit, EditProps } from "react-admin";
import MedicalAssistantForm from "./MedicalAssistantForm";

const MedicalAssistantEdit = (props: EditProps) => (
  <Edit {...props} title="Modifier un assistant médical" redirect="show">
    <MedicalAssistantForm />
  </Edit>
);

export default MedicalAssistantEdit;
