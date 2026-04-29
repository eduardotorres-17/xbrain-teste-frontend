import { Container, Typography, Button, Box, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import purchaseImg from "../../assets/purchase.png";

export default function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const lastPurchase = JSON.parse(localStorage.getItem("lastPurchase")) || {
    clientName: "Cliente",
    totalValue: 0,
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const handleNewPurchase = () => {
    dispatch({ type: "UPDATE_CART", payload: { items: [], total: 0 } });
    localStorage.removeItem("lastPurchase");
    navigate("/");
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: 2,
          p: { xs: 4, md: 8 }, 
          textAlign: "center",
          width: "100%",
          maxWidth: "700px", 
        }}
      >
        <Typography variant="h4" sx={{ color: "#333", mb: 2 }}>
          {lastPurchase.clientName},
        </Typography>

        <Typography
          variant="h5"
          sx={{ color: "#555", mb: 6, fontWeight: 400, lineHeight: 1.5 }}
        >
          Sua compra no valor de{" "}
          <Box component="span" sx={{ color: "#2196f3", fontWeight: "bold" }}>
            {formatPrice(lastPurchase.totalValue)}
          </Box>{" "}
          foi finalizada <br /> com sucesso!
        </Typography>

        <Box sx={{ mb: 6 }}>
          <img src={purchaseImg} alt="Sucesso" style={{ maxWidth: "250px" }} />
        </Box>

        <Button
          variant="contained"
          color="secondary" 
          size="large"
          onClick={handleNewPurchase}
          sx={{
            fontWeight: "bold",
            px: 6,
            py: 1.5,
            textTransform: "none",
            color: "#fff",
            borderRadius: 1,
          }}
        >
          INICIAR NOVA COMPRA
        </Button>
      </Paper>
    </Container>
  );
}
