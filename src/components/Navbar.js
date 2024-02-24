import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { CartWidget } from './CartWidget'

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
});

function Navbar() {
  return (
    <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Ecommerce
                </Typography>
                <Button color="inherit">Inicio</Button>
                <Button color="inherit">Productos</Button>
                <Button color="inherit">Ofertas</Button>
                <Button color="inherit">Carrito</Button>
                <CartWidget />
            </Toolbar>
        </AppBar>
    </ThemeProvider>
  );
}

export { Navbar };