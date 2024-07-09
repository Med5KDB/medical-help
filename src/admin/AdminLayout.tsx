import { Layout, LayoutProps } from "react-admin";
import { ReactQueryDevtools } from "react-query/devtools";
import AdminAppBar from "./AdminAppBar";
import { AdminMenu } from "./AdminMenu";
import { useTheme } from "@mui/material";

export const AdminLayout = (props: LayoutProps) => {
  const theme = useTheme();
  return (
    <>
      <Layout
        {...props}
        appBar={AdminAppBar}
        menu={AdminMenu}
        sx={{
          "& .RaLayout-appFrame": { marginTop: 0 },
          "& .RaLayout-contentWithSidebar": {
            height: "100%",
            background: theme.palette.primary.main,
            flexShrink: "0",
          },
          "& .RaLayout-content": {
            pt: 6,
          },
          "& .RaSidebar-paper, & .MuiDrawer-paper": {
            background: theme.palette.primary.main,
            [theme.breakpoints.down("sm")]: {
              backgroundColor: "#000", // Your desired color for small screens
            },
          },
        }}
      />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};
