import React from "react";
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
      return { firstResource: undefined, restResources: [] }; // Retourner un objet avec des valeurs par défaut
    }

    const resources = resourceToPermissionMapper[userRole];
    const firstResource = resources[0];
    const restResources = resources.slice(1);
    return { firstResource, restResources };
  };

  const { firstResource, restResources } = getResourcesForRole();

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
        <Menu.DashboardItem
          leftIcon={<GridViewIcon />}
          to={`${firstResource}/`}
        />
        {restResources.map((resource: string) => (
          <Menu.ResourceItem name={resource} />
        ))}
        {permissions !== "MEDICALASSISTANT" && (
          <Menu.Item
            to={{
              pathname: "/appointments",
            }}
            primaryText="Agenda"
            leftIcon={<EventIcon />}
          />
        )}

        <MedicalHelpResourceItem name="appointment" />
        <Divider />
      </Stack>
    </Menu>
  );
};
