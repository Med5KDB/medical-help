import { Menu } from "react-admin";
import { Box, Divider, Stack } from "@mui/material";
import { GridView as GridViewIcon } from "@mui/icons-material";

export const AdminMenu = () => {
  return (
    <Menu>
      <Stack spacing={2}>
        <Box
          sx={{
            p: 2,
            textAlign: "center",
          }}
        >
          {/* <img
            src="https://picsum.photos/seed/picsum/200/300
"
            height="100px"
            width="120px"
            alt="Logo"
          /> */}
        </Box>
        <Menu.DashboardItem leftIcon={<GridViewIcon />} />
        <MedicalHelpResourceItem name="hospital" />
        <MedicalHelpResourceItem name="doctor" />
        <MedicalHelpResourceItem name="patient" />
        <MedicalHelpResourceItem name="medical-assistant" />
        <MedicalHelpResourceItem name="medicine" />
        <MedicalHelpResourceItem name="medicalRecord" />

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
