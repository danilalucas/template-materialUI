import React, { useState } from 'react';
import { Box, FormControl, InputLabel, Input, FormHelperText, Button, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Login = ({ onLogin }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleLogin = () => {
    const users = {
      "DanilaLucas": "dani123",
      "LuisaMartins": "Choco*late",
      "GabrielCosta": "BlueSky789",
      "FernandaAlmeida": "GreenAppl3",
      "RicardoFerreira": "Sunset!23",
      "CamilaRodrigues": "PurpleDr@gon"
    };

    const isUserValid = (username, password) => users[username] === password;

    if (isUserValid(login, password)) {
        onLogin();
      } else {
        setShowAlert(true);
      }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <h2 style={{ color: '#007bff' }}>Acessar Gerenciamento de Tarefas</h2>

      <FormControl sx={{ marginBottom: '16px' }}>
        <InputLabel htmlFor="login_nome">Login</InputLabel>
        <Input
          id="login_nome"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          sx={{
            background: '#f0f0f0',
            borderRadius: '8px',
            padding: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            border: '1px solid #007bff',
          }}
        />
        <FormHelperText id="login_nome_helper_text">Nome de usuário</FormHelperText>
      </FormControl>

      <FormControl sx={{ marginBottom: '16px' }}>
        <InputLabel htmlFor="login_senha">Senha</InputLabel>
        <Input
          id="login_senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            background: '#f0f0f0',
            borderRadius: '8px',
            padding: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            border: '1px solid #007bff',
          }}
        />
        <FormHelperText id="login_senha_helper_text">Senha</FormHelperText>
      </FormControl>

      <Button
        variant="contained"
        color="primary"
        onClick={handleLogin}
        sx={{
          background: '#007bff',
          color: '#fff',
          borderRadius: '8px',
          padding: '10px 20px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        Login
      </Button>

      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <MuiAlert
          onClose={handleCloseAlert}
          severity="error"
          sx={{ backgroundColor: '#FFA500', color: '#fff' }}
        >
          Credenciais inválidas. Tente Novamente!
        </MuiAlert>
      </Snackbar>
    </Box>
  );
};

export default Login;