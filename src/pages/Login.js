import { useState } from "react";
import { TextField, Box, Button, Typography } from "@mui/material";

const Login = () => {

    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    const handleInputChange = e => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        console.log(form);
    }

  return (
    <Box
            component="form"
            sx={{
            '& > :not(style)': { m: 3, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
      <Typography variant="h3">Acesso Restrito</Typography>

      <div style={{ margin: "16px" }}>
        <TextField
            onChange={handleInputChange}
            label="Digite o seu e-mail"
            name="email"
            variant="standard"
            fullWidth={false}
        />
      </div>

      <div style={{ margin: "16px" }}>
        <TextField
            onChange={handleInputChange}
            label="Digite sua senha"
            name="password"
            variant="standard"
            type="password"
            fullWidth={false}
        />
      </div>
      <div style={{ margin: "16px" }}>
        <Button variant="contained" color="primary" onClick={handleFormSubmit}>
          Entrar
        </Button>
      </div>
    </Box>
  );
};

export default Login;
