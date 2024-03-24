import { Admin, EditGuesser, Resource, ShowGuesser } from "react-admin";
import { PatientList } from "../patient/PatientList";
import { PatientCreate } from "../patient/PatientCreate";
import { dataProvider } from "../../providers/dataProvider";
import authProvider from "../../providers/authProvider";
import { DoctorList } from "../doctor/DoctorList";
import { DoctorCreate } from "../doctor/DoctorCreate";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MasksIcon from "@mui/icons-material/Masks";
import { AdminLayout } from "./AdminLayout";
import { ThemeOptions, Theme } from "@mui/material";
import { DocList } from "../doctor/DocList";
import { i18nProvider } from "../../providers/i18nprovider";

const App = () => {
  const theme: ThemeOptions = {
    palette: {
      primary: {
        main: "#12354a",
      },
      secondary: {
        main: "#63C4AD",
        contrastText: "#fff",
      },
      info: {
        main: "#F3F7FA",
        contrastText: "#0B61A0",
      },
    },
    typography: {
      fontFamily: ["Poppins"].join(","),
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
    components: {
      MuiDrawer: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundColor: theme.palette.primary.main,
            height: "100vh !important",
            "& .MuiMenuItem-root": {
              color: theme.palette.primary.contrastText,
            },
            "& .MuiListItemIcon-root": {
              color: theme.palette.primary.contrastText,
            },
            "& .MuiMenuItem-root.RaMenuItemLink-active": {
              color: theme.palette.secondary.main,
              "&:before": {
                position: "absolute",
                content: "''",
                width: "4px",
                height: "37px",
                left: "-1px",
                background: theme.palette.secondary.main,
              },
            },
            "& .MuiMenuItem-root.RaMenuItemLink-active .MuiListItemIcon-root": {
              color: theme.palette.secondary.main,
            },
          }),
        },
      },
      // @ts-ignore
      RaCreateButton: {
        styleOverrides: {
          // @ts-ignore
          root: ({ theme }: { theme: Theme }) => ({
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            "&:hover": {
              backgroundColor: theme.palette.secondary.dark,
            },
          }),
        },
      },

      MuiDialogTitle: {
        styleOverrides: {
          root: ({ theme }) => ({
            color: theme.palette.primary.main,
          }),
        },
      },
      MuiDialogActions: {
        styleOverrides: {
          root: ({ theme }) => ({
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(5),
          }),
        },
      },
      MuiCard: {
        styleOverrides: {
          root: ({ theme }) => ({
            "&.MuiPaper-elevation0": {
              backgroundColor: theme.palette.info.main,
              borderRadius: theme.spacing(2),
            },
          }),
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: theme.spacing(1),
          }),
        },
      },
    },
  };
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      layout={AdminLayout}
      theme={theme}
      i18nProvider={i18nProvider}
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
        list={DocList}
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
};

export default App;
