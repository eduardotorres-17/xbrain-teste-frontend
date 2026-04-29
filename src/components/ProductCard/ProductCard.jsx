import {
  Card,
  Typography,
  IconButton,
  Box,
  Button,
  CardMedia,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function ProductCard({ product, quantity, onAdd, onRemove }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  return (
    <Card
      sx={{
        height: "360px",
        width: "250px",
        position: "relative",
        overflow: "hidden",
        borderRadius: 1,
        backgroundColor: "transparent",
        border: "1px solid transparent",
        boxShadow: "none",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          borderColor: "#EBEBEB",
          backgroundColor: "#fff",
          "& .info-box": {
            height: "70%",
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            justifyContent: "space-evenly",
          },
          "& .action-box": {
            opacity: 1,
            visibility: "visible",
          },
        },
      }}
    >
      <Box
        sx={{
          height: "220px",
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#fff",
        }}
      >
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
        />
      </Box>
      <Box
        className="info-box"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "45%",
          backgroundColor: "#ffffff",
          transition: "all 0.3s ease-in-out",
          display: "flex",
          flexDirection: "column",
          p: 2,
          zIndex: 2,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#948d8d",
            fontWeight: 500,
            mb: 1,
            height: "40px",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            lineHeight: "20px",
            flexShrink: 0,
            marginBottom: 0,
          }}
        >
          {product.name}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "#000000",
            fontWeight: "bold",
            mb: 0.5,
            flexShrink: 0,
          }}
        >
          {formatPrice(product.price)}
        </Typography>

        <Typography
          variant="caption"
          sx={{
            color: "#9E9E9E",
            display: "block",
            lineHeight: 1.2,
            flexShrink: 0,
          }}
        >
          {product.installments} <br /> {product.cashPrice}
        </Typography>
        <Box
          className="action-box"
          sx={{
            opacity: 0,
            visibility: "hidden",
            transition: "all 0.3s ease-in-out",
            width: "100%",
            mt: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              height: "40px",
              marginTop: 2,
            }}
          >
            <IconButton onClick={() => onRemove(product.id)} sx={{ p: 0 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#b5c3ce",
                  boxShadow: "0px 4px 6px rgba(158, 158, 158, 0.4)",
                }}
              >
                <RemoveIcon fontSize="small" />
              </Box>
            </IconButton>

            <Box
              sx={{
                border: "1px solid #E0E0E0",
                borderRadius: 1,
                px: 6,
                py: 0.8,
                bgcolor: "#fff",
              }}
            >
              <Typography sx={{ fontWeight: "bold", color: "#000" }}>
                {quantity}
              </Typography>
            </Box>

            <IconButton onClick={() => onAdd(product.id)} sx={{ p: 0 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#b5c3ce",
                  boxShadow: "0px 4px 6px rgba(158, 158, 158, 0.4)",
                }}
              >
                <AddIcon fontSize="small" />
              </Box>
            </IconButton>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => onAdd(product.id)}
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                height: "40px",
                width: "100%",
                marginTop: 3,
              }}
            >
              ADICIONAR
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
