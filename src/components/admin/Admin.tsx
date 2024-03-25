import { Admin, EditGuesser,  Resource, ShowGuesser } from "react-admin";
import { PatientList } from "../patient/PatientList";
import { PatientCreate } from "../patient/PatientCreate";
import { dataProvider } from "../../providers/dataProvider";
import authProvider from "../../providers/authProvider";
import { DoctorList } from "../doctor/DoctorList";
import { DoctorCreate } from "../doctor/DoctorCreate";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MasksIcon from "@mui/icons-material/Masks";
import { AdminLayout } from "./AdminLayout";
import { ThemeOptions, Theme, tableCellClasses } from "@mui/material";
import { i18nProvider } from "../../providers/i18nprovider";
import DoctorEdit from "../doctor/DoctorEdit";
import PatientEdit from "../patient/PatientEdit";
import MedicalAssistantList from "../medical-assistant/MedicalAssistantList";
import MedicalAssistantCreate from "../medical-assistant/MedicalAssistantCreate";
import MedicalAssistantEdit from "../medical-assistant/MedicalAssistantEdit";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

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
      MuiTable: {
        styleOverrides: {
          root: () => ({
            borderCollapse: "separate",
            borderSpacing: "0px 9px",
          }),
        },
      },
      MuiTableRow: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              "&.MuiTableRow-selected": {
                "&:selected": {
                  backgroundColor: "black",
                },
              },
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            "&.RaList-content": {
              "box-shadow": "none !important",
            },
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundColor: theme.palette.info.main,
            borderRadius: "25px !important",
            padding: `${theme.spacing(0.75)} ${theme.spacing(1)}`,
            minHeight: "38px !important",
          }),
        },
        defaultProps: {
          TabIndicatorProps: {
            sx: {
              display: "none",
            },
          },
        },
      },

      MuiTab: {
        styleOverrides: {
          root: ({ theme }) => ({
            "&:first-of-type": {
              borderTopLeftRadius: "25px !important",
              borderBottomLeftRadius: "25px !important",
            },
            "&.Mui-selected": {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              borderRadius: "25px !important",
            },
            padding: `${theme.spacing(1)} ${theme.spacing(6)}`,
            minHeight: "38px !important",
          }),
        },
      },

      MuiTableCell: {
        styleOverrides: {
          body: () => ({
            borderTop: "1px solid #F1F1F1 !important",
            borderBottom: "1px solid #F1F1F1 !important",
            "&:first-of-type": {
              borderTopLeftRadius: 15,
              borderBottomLeftRadius: 15,
              borderLeft: "1px solid #F1F1F1 !important",
            },
            "&:last-child": {
              borderTopRightRadius: 15,
              borderBottomRightRadius: 15,
              borderRight: "1px solid #F1F1F1 !important",
            },
          }),
          head: ({ theme }) => ({
            "&:first-of-type": {
              borderTopLeftRadius: "15px !important",
              borderBottomLeftRadius: "15px !important",
            },
            "&:last-child": {
              borderTopRightRadius: "15px !important",
              borderBottomRightRadius: "15px !important",
            },
            fontWeight: "600",
            borderWidth: 0,
            backgroundColor: theme.palette.info.main,
            color: theme.palette.info.contrastText,
          }),
          root: ({ theme }) => ({
            [`&.${tableCellClasses.head}`]: {
              backgroundColor: theme.palette.info.main,
              color: theme.palette.info.contrastText,
            },
            [`&.${tableCellClasses.body}`]: {
              fontSize: 14,
            },
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
        list={DoctorList}
        edit={DoctorEdit}
        show={ShowGuesser}
        create={DoctorCreate}
        icon={AccountCircleIcon}
        recordRepresentation={(record) =>
          `${record.firstName} ${record.lastName}`
        }
      />
      <Resource
        name="patient"
        options={{ label: "Patient" }}
        list={PatientList}
        edit={PatientEdit}
        show={ShowGuesser}
        create={PatientCreate}
        icon={MasksIcon}
        recordRepresentation={(record) =>
          `${record.firstName} ${record.lastName}`
        }
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
      <Resource
        name="medical-assistant"
        options={{ label: "Assistant médical" }}
        list={MedicalAssistantList}
        edit={MedicalAssistantEdit}
        show={ShowGuesser}
        create={MedicalAssistantCreate}
        icon={SupervisorAccountIcon}
      />
    </Admin>
  );
};

export default App;
