import {
  AppBar,
  AppBarProps,
  Logout,
  TitlePortal,
  UserMenu,
  useSidebarState,
} from "react-admin";
import { useLocation } from "react-router-dom";
import BackButton from "../../common/BackButton";

const AdminAppBar = (props: AppBarProps) => {
  const [sidebarOpen] = useSidebarState();

  const location = useLocation();
  const isDetailPage = location.pathname.includes("/show");
  const segments = location.pathname.split("/");
  const isEditPage = segments.length > 2 && !isDetailPage;

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
      {(isDetailPage || isEditPage) && <BackButton />}
      <TitlePortal />
    </AppBar>
  );
};
export default AdminAppBar;
