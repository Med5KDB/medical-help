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
        Bienvenue chez RHFood.
      </Typography>
      <Typography
        variant="body1"
        style={{ fontSize: "20px", textAlign: "center", marginBottom: "20px" }}
      >
        Améliorez votre journée avec notre plateforme de gestion de restaurant.
        Découvrez des fonctionnalités magiques pour gérer vos réservations,
        menus, et données clients.
      </Typography>
      <Typography variant="h5" sx={{ marginTop: "20px" }}>
        Ensemble, construisons l&apos;avenir de la restauration !!!
      </Typography>
    </div>
  );
};

export default AdminWelcomePage;
