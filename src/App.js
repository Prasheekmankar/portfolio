
import './App.css';
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Switch, useHistory } from "react-router-dom";

import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";


import {Home} from './Home.js'

// import ResponsiveAppBar from './appbar.js'
// import { Navebar } from './navbar.js';
function App() {
  const history = useHistory();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [mode, setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={4} style={{minHeight:"100vh"}}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <h2>Prasheek Mankar</h2>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"
                  Onclick={()=> history.push('/')}
                  >
                    Projects2
                    </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"
                  Onclick={()=> history.push('/')}
                  >
                    Projects
                    </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"
                  Onclick={()=> history.push('/')}
                  >
                    Projects
                    </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"
                  Onclick={()=> history.push('/')}
                  >
                    Projects
                    </Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <h2>Prasheek Mankar</h2>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                sx={{ my: 2, color: "white", display: "block", ml: "auto" }}
              >
                Projects1
              </Button>
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Projects
              </Button>
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Projects
              </Button>
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Projects
              </Button>
            </Box>

            <Button
              startIcon={
                mode === "light" ? <Brightness7Icon /> : <Brightness4Icon />
              }
              style={{ marginLeft: "auto" }}
              variant="text"
              color="inherit"
              onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            >
              {mode === "dark" ? "light" : "dark"} Mode
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          {/* <Home /> */}
        </Route>
      </Switch>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
