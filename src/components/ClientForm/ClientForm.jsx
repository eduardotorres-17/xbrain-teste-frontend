import { Field, reduxForm } from "redux-form";
import { TextField, Button, Box, Typography, MenuItem } from "@mui/material";

const required = (value) => (value ? undefined : "Campo obrigatório");
const emailValidation = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "E-mail inválido"
    : undefined;

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  children,
  ...custom
}) => (
  <TextField
    label={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
    fullWidth
    variant="outlined"
  >
    {children}
  </TextField>
);

const ClientForm = (props) => {
  const { handleSubmit, valid, totalCart, cartItemCount } = props;

  const formatPrice = (price) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ color: "#000000", mb: 2 }}
        >
          Dados do Cliente
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: "#EBEBEB",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          width: "100%",
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "40%" } }}>
          <Field
            name="nome"
            component={renderTextField}
            label="Nome do Cliente"
            placeholder="Nome do cliente aqui"
            InputLabelProps={{ shrink: true }}
            validate={[required]}
          />
        </Box>

        <Box sx={{ width: { xs: "100%", md: "40%" } }}>
          <Field
            name="email"
            component={renderTextField}
            label="E-mail"
            placeholder="Digite seu email aqui"
            InputLabelProps={{ shrink: true }}
            validate={[required, emailValidation]}
          />
        </Box>

        <Box sx={{ width: { xs: "100%", md: "20%" } }}>
          <Field
            name="sexo"
            component={renderTextField}
            label="Sexo"
            select
            fullWidth
            InputLabelProps={{ shrink: true }}
            validate={[required]}
          >
            <MenuItem value="Masculino">Masculino</MenuItem>
            <MenuItem value="Feminino">Feminino</MenuItem>
            <MenuItem value="Prefiro não responder">
              Prefiro não responder
            </MenuItem>
          </Field>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          mt: 4,
          gap: 2,
        }}
      >
        <Typography variant="h5" sx={{ color: "#000000", fontWeight: "bold" }}>
          Total:{" "}
          <Box component="span" fontWeight="bold">
            {formatPrice(totalCart || 0)}
          </Box>
        </Typography>

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          size="large"
          disabled={!valid || cartItemCount === 0}
          sx={{ fontWeight: "bold", px: 4, py: 1.5, color: "#fff" }}
        >
          FINALIZAR COMPRA
        </Button>
      </Box>
    </form>
  );
};

export default reduxForm({
  form: "clientData",
})(ClientForm);
