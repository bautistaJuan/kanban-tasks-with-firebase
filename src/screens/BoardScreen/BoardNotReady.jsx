import { Button, Stack, Typography } from "@mui/material";
import BackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const BoardNotReady = () => {
  const navigate = useNavigate();
  return (
    <Stack textAlign="center" alignItems="center" mt={10}>
      <Typography variant="h5">Parece que tu tabla no está lista</Typography>
      <Typography mt={1} mb={2}>
        En ocasiones, la placa puede tardar unos segundos en estar lista para su
        uso.
        <br /> Inténtalo de nuevo en unos segundos
      </Typography>
      <Button
        startIcon={<BackIcon />}
        onClick={() => navigate("/boards")}
        variant="contained"
      >
        Ir atrás
      </Button>
    </Stack>
  );
};

export default BoardNotReady;
