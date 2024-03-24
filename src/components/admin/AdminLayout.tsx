import { Layout, LayoutProps } from "react-admin";
import { ReactQueryDevtools } from "react-query/devtools";
import AdminAppBar from "./AdminAppBar";
import { AdminMenu } from "./AdminMenu";

export const AdminLayout = (props: LayoutProps) => (
  <>
    <Layout
      {...props}
      appBar={AdminAppBar}
      menu={AdminMenu}
      sx={{
        "& .RaLayout-appFrame": { marginTop: 0 },
        "& .RaLayout-contentWithSidebar": {
          height: "100%",
          borderRadius: "23px",
          flexShrink: "0",
        },
        "& .RaLayout-content": {
          pt: 6,
        },
      }}
    />
    <ReactQueryDevtools initialIsOpen={false} />
  </>
);
