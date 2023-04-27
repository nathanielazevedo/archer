import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const pages = ["Login"];

const NavBar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" elevation={0}>
      <Container sx={styles.container}>
        <Toolbar disableGutters>
          <Link to="/intro">
            <Typography variant="h6" noWrap sx={styles.name}>
              AGRISYNC
            </Typography>
          </Link>
          <Box sx={styles.linksContainer}>
            {pages.map((page) => {
              return (
                <Link to={"/home"}>
                  <Button
                    key={page}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                </Link>
              );
            })}
          </Box>
          <Box sx={styles.menuContainer}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <MenuIcon sx={{ color: "white" }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseUserMenu}>
                  <Link to={"/home"}>
                    <Typography textAlign="center" sx={{ color: "black" }}>
                      {page}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;

const styles = {
  container: {
    width: { xs: "100%", lg: "1200px" },
  },
  name: {
    mr: 2,
    fontWeight: 400,
    fontSize: "1.7rem",
    letterSpacing: ".3rem",
  },
  linksContainer: {
    flexGrow: 1,
    display: { xs: "none", lg: "flex" },
    justifyContent: "flex-end",
  },
  menuContainer: {
    flexGrow: 1,
    display: { xs: "flex", lg: "none" },
    justifyContent: "flex-end",
  },
};
