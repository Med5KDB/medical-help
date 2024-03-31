import { EditButton, Show, ShowProps, TopToolbar } from "react-admin";

import { MedicalRecordShowForm } from "./medicalRecordForm/MedicalRecordShowForm";

const MedicalRecordAction = (
  <TopToolbar>
    <EditButton label="Editer" color="secondary" variant="contained" />
  </TopToolbar>
);

export const MedicalRecordShow = (props: ShowProps) => {
  return (
    <Show
      title="Consulter un Dossier médical"
      {...props}
      actions={MedicalRecordAction}
    >
      <MedicalRecordShowForm />
    </Show>
  );
};
