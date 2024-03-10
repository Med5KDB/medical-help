import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { DoctorList } from "./components/doctor/DoctorList";
import { DoctorCreate } from "./components/doctor/DoctorCreate";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource
      name="admin"
      options={{ label: "Assistant Administratif" }}
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="doctor"
      options={{ label: "Docteur" }}
      list={DoctorList}
      edit={EditGuesser}
      show={ShowGuesser}
      create={DoctorCreate}
    />
    <Resource
      name="patient"
      options={{ label: "Patient" }}
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
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
    />
  </Admin>
);
