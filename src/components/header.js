import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
 
function Header({ onLogout, isAuthenticated }) {
  const handleLogout = () => {
    onLogout();
  };

  return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gerenciamento de Projetos
          </Typography>
          {isAuthenticated && <Button color="inherit" onClick={handleLogout}>Sair</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
 
export default Header;