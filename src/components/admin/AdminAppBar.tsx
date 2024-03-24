import {
  AppBar,
  AppBarProps,
  Logout,
  TitlePortal,
  UserMenu,
  useSidebarState,
} from "react-admin";

const AdminAppBar = (props: AppBarProps) => {
  const [sidebarOpen] = useSidebarState();

  return (
    <AppBar
      variant="outlined"
      {...props}
      userMenu={
        <UserMenu icon={false}>
          <Logout />
        </UserMenu>
      }
      color="transparent"
      sx={{
        paddingLeft: {
          sm: sidebarOpen ? "240px" : "55px",
        },
        border: "none",
        ".RaAppBar-menuButton": {
          display: "none",
        },
      }}
    >
      <TitlePortal />
    </AppBar>
  );
};
export default AdminAppBar;
