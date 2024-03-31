import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../../common/assets/logo.svg";
import doctor from "../../common/assets/doctor.jpeg";
import backgroundPage from "../../common/assets/backgroundPage.jpg";
import { useState } from "react";
import { useLogin, useNotify } from "react-admin";

const defaultTheme = createTheme();

export default function SignInSide() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = useLogin();
  const notify = useNotify();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    login({ username, password }).catch(() =>
      notify("Invalid username or password", { type: "error" })
    );
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{
          background: "red",
          height: "100vh",
          backgroundImage: `url(${backgroundPage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid
          container
          component="main"
          sx={{
            height: "80vh",
            width: { sm: "100vh" },
            m: "auto",
            mt: { sm: 10 },
          }}
        >
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={5}
            sx={{
              backgroundImage: `url(${doctor})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "10px",
              borderTopRightRadius: 0, // Supprimer le border radius à droite
              borderBottomRightRadius: 0,
            }}
          />
          <Grid
            item
            xs={12}
            sm={7}
            md={5}
            component={Paper}
            elevation={10}
            square
            sx={{
              borderTopRightRadius: "10px", // Supprimer le border radius à droite
              borderBottomRightRadius: "10px",
            }}
          >
            <Box
              sx={{
                my: 4,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box>
                <img src={logo} alt="logo" width={200} />
              </Box>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="username"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="username"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Se Connecter
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
