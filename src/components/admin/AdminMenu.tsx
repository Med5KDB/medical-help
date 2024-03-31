import { Menu, useSidebarState } from "react-admin";
import { Box, Divider, Stack } from "@mui/material";
import {
  GridView as GridViewIcon,
  Event as EventIcon,
} from "@mui/icons-material";

export const AdminMenu = () => {
  const [sidebarOpen] = useSidebarState();
  return (
    <Menu>
      <Stack spacing={3}>
        <Box
          sx={{
            p: 2,
            pb: 0,

            textAlign: "center",
          }}
        >
          {/* <img src={logo} height="80px" width="80px" alt="Logo" /> */}
        </Box>
        <Menu.DashboardItem leftIcon={<GridViewIcon />} />
        <MedicalHelpResourceItem name="hospital" />
        <MedicalHelpResourceItem name="doctor" />
        <MedicalHelpResourceItem name="patient" />
        <MedicalHelpResourceItem name="medical-assistant" />
        <MedicalHelpResourceItem name="medicine" />
        <MedicalHelpResourceItem name="medicalRecord" />

        <Menu.Item
          to={{
            pathname: "/appointments",
          }}
          primaryText="Agenda"
          leftIcon={<EventIcon />}
        />
        <MedicalHelpResourceItem name="appointment" />
        <Divider />
      </Stack>
    </Menu>
  );
};

const MedicalHelpResourceItem = ({ name }: { name: string }) => {
  //   const { permissions } = usePermissions<ResourcePermissions>();
  //   if (!permissions?.[name]) {
  //     return null;
  //   }
  //   if (!permissions[name]?.includes("read")) {
  //     return null;
  //   }
  return <Menu.ResourceItem name={name} />;
};
