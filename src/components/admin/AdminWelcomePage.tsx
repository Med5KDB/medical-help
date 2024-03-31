import Typography from "@mui/material/Typography";

const AdminWelcomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: "20px",
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        style={{ textAlign: "center", marginBottom: "20px" }}
      >
        Bienvenue dans Medical-Help.
      </Typography>
      <Typography
        variant="body1"
        style={{ fontSize: "20px", textAlign: "center", marginBottom: "20px" }}
      >
        Améliorez votre journée avec notre plateforme médicale. Vous ne
        trouverez pas de licornes ici, mais des fonctionnalités magiques pour
        gérer vos rendez-vous, prescriptions et données patients.
      </Typography>
      <Typography variant="h5" sx={{ marginTop: "20px" }}>
        Ensemble, construisons l&apos;avenir de la santé!!!
      </Typography>
    </div>
  );
};

export default AdminWelcomePage;
