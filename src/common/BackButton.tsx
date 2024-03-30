import { ArrowBack } from "@mui/icons-material";
import { Button } from "react-admin";
import { useNavigate } from "react-router";
import { useTheme } from "@mui/material";

const BackButton = () => {
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);
  const theme = useTheme();
  return (
    <Button
      startIcon={
        <ArrowBack
          sx={{
            width: "20px",
            height: "20px",
            flexShrink: "0",
            ml: 1,
          }}
        />
      }
      sx={{
        color: "#FFFFFF",
        width: "20px",
        height: "40px",
        flexShrink: "0",
        borderRadius: "9px",
        background: theme.palette.secondary.main,
        marginRight: "20px",
        marginLeft: "20px",
        "&:hover": {
          background: "#4ca18d !important",
        },
      }}
      onClick={handleGoBack}
    ></Button>
  );
};

export default BackButton;
