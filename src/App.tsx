import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./providers/dataProvider";
import { authProvider } from "./providers/authProvider";
import { DoctorList } from "./components/doctor/DoctorList";
import { DoctorCreate } from "./components/doctor/DoctorCreate";
import { PatientList } from "./components/patient/PatientList";
import { PatientCreate } from "./components/patient/PatientCreate";
import { CustomLayout } from "./components/customLayout";
// import { DocList } from "./components/doctor/DocList";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MasksIcon from '@mui/icons-material/Masks';


export const App = () => (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      layout={CustomLayout}
    >
      {/* <Resource
      name="admin"
      options={{ label: "Assistant Administratif" }}
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    /> */}
      <Resource
        name="doctor"
        options={{ label: "Docteur" }}
        list={DoctorList}
        edit={EditGuesser}
        show={ShowGuesser}
        create={DoctorCreate}
        icon={AccountCircleIcon}
      />
      <Resource
        name="patient"
        options={{ label: "Patient" }}
        list={PatientList}
        edit={EditGuesser}
        show={ShowGuesser}
        create={PatientCreate}
        icon={MasksIcon}
      />
      {/* <Resource
      name="medecine"
      options={{ label: "Médicaments" }}
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="hospital"
      options={{ label: "Hopital" }}
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    /> */}
    </Admin>
);
