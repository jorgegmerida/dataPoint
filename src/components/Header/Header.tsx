import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LogoutIcon from "@mui/icons-material/Logout";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

export const Header: React.FC<Props> = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CssBaseline />
      <AppBar component="nav" color="inherit">
        <Toolbar sx={{ justifyContent: "right" }}>
          <Stack spacing={4} direction="row">
            <Button
              variant="contained"
              style={{
                background: "#644BBA",
                borderRadius: " 100px",
                color: "#FFF",
                textAlign: "center",
                fontFamily: "Roboto",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "20px",
                letterSpacing: "0.1px",
                textTransform: "capitalize",
              }}
            >
              Dashboard
            </Button>
            <Button
              variant="contained"
              style={{
                background: "#644BBA",
                borderRadius: " 100px",
                color: "#FFF",
                textAlign: "center",
                fontFamily: "Roboto",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "20px",
                letterSpacing: "0.1px",
                textTransform: "capitalize",
              }}
            >
              Clientes
            </Button>
            <Button
              variant="contained"
              style={{
                background: "#644BBA",
                borderRadius: " 100px",
                color: "#FFF",
                textAlign: "center",
                fontFamily: "Roboto",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "20px",
                letterSpacing: "0.1px",
                textTransform: "capitalize",
              }}
            >
              Reglas de acumulación
            </Button>
          </Stack>
          <Typography
            component="div"
            style={{
              color: "#1C1B1E",
              textAlign: "center",
              fontFamily: "Roboto",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "24px" /* 150% */,
            }}
            sx={{ display: { marginLeft: "320px" } }}
          >
            Pamela Rojas González
          </Typography>

          <Button
            sx={{ color: "#1C1B1E" }}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            style={{ color: "#1C1B1E" }}
          >
            <KeyboardArrowDownIcon sx={{ marginLeft: "10px" }} />{" "}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>
              <Typography>Editar perfil</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <LogoutIcon />
              <Typography sx={{ marginLeft: "10px" }}>Cerrar sesión</Typography>
            </MenuItem>
          </Menu>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};
