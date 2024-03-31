import { EditButton, Show, ShowProps, Toolbar, TopToolbar } from "react-admin";

import { MedicalRecordShowForm } from "./medicalRecordForm/MedicalRecordShowForm";

const MedicalRecordAction = (
  <TopToolbar>
    <EditButton label="Editer" color="secondary" variant="contained" />
  </TopToolbar>
);

export const MedicalRecordShow = (props: ShowProps) => {
  return (
    <Show
      title="Consulter un Dossier Medicale"
      {...props}
      actions={MedicalRecordAction}
    >
      <MedicalRecordShowForm />
    </Show>
  );
};
