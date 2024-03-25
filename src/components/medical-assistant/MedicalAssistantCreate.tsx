import { Create, CreateProps } from "react-admin";
import MedicalAssistantForm from "./MedicalAssistantForm";

const MedicalAssistantCreate = (props: CreateProps) => {
  return (
    <Create {...props} title="Créer un assistant médical">
      <MedicalAssistantForm />
    </Create>
  );
};

export default MedicalAssistantCreate;
