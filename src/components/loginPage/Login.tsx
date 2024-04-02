import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
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
  const [usernameIsEmpty, setUsernameIsEmpty] = useState(false);
  const [passeordIsEmpty, setPasseordIsEmpty] = useState(false);

  const login = useLogin();
  const notify = useNotify();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!username && !password) {
      setUsernameIsEmpty(true);
      setPasseordIsEmpty(true);
      return;
    }
    if (!password) {
      setPasseordIsEmpty(true);
      return;
    }
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
            height: { sm: "90vh" },
            width: { sm: "130vh", xs: "90%" },
            m: "auto",
            ml: { sm: "20%" },
            mt: { sm: 5 },
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
              borderTopRightRadius: 0,
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
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
              borderTopLeftRadius: { xs: "10px", sm: 0 },
              borderBottomLeftRadius: { xs: "10px", sm: 0 },
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
                  label="Nom d'utilisateur"
                  name="username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setUsernameIsEmpty(false);
                  }}
                  autoComplete="username"
                  autoFocus
                  helperText={
                    usernameIsEmpty
                      ? "Veuillez saisir un nom d'utilisateur"
                      : ""
                  }
                  error={usernameIsEmpty}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Mot de passe"
                  type="password"
                  id="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasseordIsEmpty(false);
                  }}
                  autoComplete="current-password"
                  error={passeordIsEmpty}
                  helperText={
                    passeordIsEmpty ? "Veuillez saisir un mot de passe" : ""
                  }
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Se souvenir de moi"
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
