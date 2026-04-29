import { Container, Grid, Typography, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import ClientForm from "../../components/ClientForm/ClientForm";
import { mockProducts } from "../../utils/mockProducts";

export default function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items, total } = useSelector((state) => state.cart);

  const updateReduxCart = (newItems) => {
    const newTotal = Object.keys(newItems).reduce((acc, id) => {
      const product = mockProducts.find((p) => p.id === Number(id));
      return acc + (product ? product.price * newItems[id] : 0);
    }, 0);

    dispatch({
      type: "UPDATE_CART",
      payload: { items: newItems, total: newTotal },
    });
  };

  const handleAdd = (id) => {
    const newItems = { ...items, [id]: (items[id] || 0) + 1 };
    updateReduxCart(newItems);
  };

  const handleRemove = (id) => {
    const current = items[id] || 0;
    const newItems = { ...items };
    if (current <= 1) {
      delete newItems[id];
    } else {
      newItems[id] = current - 1;
    }
    updateReduxCart(newItems);
  };

  const handleFormSubmit = (values) => {
    const purchaseData = {
      clientName: values.nome,
      totalValue: total,
      items: Object.keys(items).map((id) => {
        const product = mockProducts.find((p) => p.id === Number(id));
        return {
          id: Number(id),
          name: product ? product.name : "Produto Desconecido",
          quantity: items[id],
          price: product ? product.price : 0,
        };
      }),
    };

    localStorage.setItem("lastPurchase", JSON.stringify(purchaseData));

    navigate("/checkout");
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ color: "#000000", mb: 2 }}
        >
          Produtos
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: "#EBEBEB",
          }}
        />
      </Box>

      <Grid container spacing={3}>
        {mockProducts.map((product) => (
          <Grid item xs={12} sm={4} md={3} key={product.id}>
            <ProductCard
              product={product}
              quantity={items[product.id] || 0}
              onAdd={handleAdd}
              onRemove={handleRemove}
            />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 8 }}>
        <ClientForm
          onSubmit={handleFormSubmit}
          totalCart={total}
          cartItemCount={Object.keys(items).length}
        />
      </Box>
    </Container>
  );
}
