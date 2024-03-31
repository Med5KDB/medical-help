import { Menu, usePermissions } from "react-admin";
import { Divider, Stack, Box } from "@mui/material";
import {
  GridView as GridViewIcon,
  Event as EventIcon,
} from "@mui/icons-material";
import { resourceToPermissionMapper } from "../../providers/authProvider";

const MedicalHelpResourceItem = ({ name }: { name: string }) => {
  // const { permissions } = usePermissions();
  // if (!permissions?.[name]) {
  //   return null;
  // }
  // if (!permissions[name]?.includes("read")) {
  //   return null;
  // }

  return <Menu.ResourceItem name={name} />;
};

export const AdminMenu = () => {
  const { permissions } = usePermissions();

  const getResourcesForRole = () => {
    const userRole = permissions;

    if (!userRole || !resourceToPermissionMapper[userRole]) {
      return undefined;
    }

    const resources = resourceToPermissionMapper[userRole];
    return resources;
  };

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
        {getResourcesForRole()?.map((resource: string) => (
          <Menu.ResourceItem key={resource} name={resource} />
        ))}
        {permissions !== "MEDICAL_ASSISTANT" && (
          <Menu.Item
            to={{
              pathname: "/appointments",
            }}
            primaryText="Agenda"
            leftIcon={<EventIcon />}
          />
        )}
        <Divider />
      </Stack>
    </Menu>
  );
};
