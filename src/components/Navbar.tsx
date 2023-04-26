import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../App";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

const outPages = ["Login"];
const inPages = ["Logout"];

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const theme = React.useContext(Context);
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const pages = user.username ? inPages : outPages;

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const setUserState = React.useState(user)[1];

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUserState({});
    navigate("/intro");
    theme((prev: boolean) => !prev);
  };

  return (
    <AppBar position="static" elevation={0}>
      <Container sx={{ width: { xs: "100%", lg: "1200px" } }}>
        <Toolbar disableGutters>
          <Link to="/intro">
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                fontWeight: 400,
                fontSize: "1.7rem",
                letterSpacing: ".3rem",
              }}
            >
              ARCHER
            </Typography>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", lg: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => {
              if (page == "Logout") {
                return (
                  <Button
                    key={page}
                    onClick={
                      page === "Logout" ? handleLogout : handleCloseUserMenu
                    }
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                );
              }
              return (
                <Link to={"/" + page}>
                  <Button
                    key={page}
                    onClick={
                      page === "Logout" ? handleLogout : handleCloseUserMenu
                    }
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                </Link>
              );
            })}
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", lg: "none" },
              justifyContent: "flex-end",
            }}
          >
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
              {["Login"].map((page) => (
                <MenuItem key={page} onClick={handleCloseUserMenu}>
                  <Link to={"/" + page}>
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
}
export default ResponsiveAppBar;
