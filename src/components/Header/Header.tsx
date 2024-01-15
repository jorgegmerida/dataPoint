import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/router";
import { useWindowDataLayer } from "../../../utils/useWindowDataLayer";
import { evInteraction } from "../../models";
import { IconButton, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { SlideMenu } from "../SlideMenu";

interface Props {
  window?: () => Window;
}

export const Header: React.FC<Props> = () => {
  const windowDataLayer = useWindowDataLayer();

  const mobileCheck = useMediaQuery("(min-width: 700px)");

  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const [show, setShow] = React.useState<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const [selected, setSelected] = React.useState({
    dashboard: false,
    clientes: false,
    reglas: false,
  });

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
    setShow((prev) => !prev);
  };

  const dataLayer1: evInteraction = {
    event: "evInteraction",
    category: "button",
    action: "click",
    label: "Dashboard|Clientes|Reglas De Acumulación",
    value: "no_aplica",
    component: "no_aplica",
    description: "no_aplica",
    result: "no_aplica",
    destination: "no_aplica",
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CssBaseline />
      <AppBar component="nav" color="inherit">
        <Toolbar sx={{ justifyContent: "right" }}>
          {mobileCheck ? (
            <Stack spacing={4} direction="row">
              <Button
                style={{
                  background: selected.dashboard ? "#644BBA" : "#FFF",
                  borderRadius: " 100px",
                  color: selected.dashboard ? "#FFF" : "#644BBA",
                  textAlign: "center",
                  fontFamily: "Roboto",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "20px",
                  letterSpacing: "0.1px",
                  textTransform: "capitalize",
                  width: "117px",
                  height: "40px",
                }}
                onClick={() => {
                  setSelected({
                    ...selected,
                    dashboard: !selected.dashboard,
                    clientes: false,
                    reglas: false,
                  });
                  router.push("/dashboard");
                  windowDataLayer({ ...dataLayer1, label: "Dashboard" });
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "20px",
                    letterSpacing: "0.1px",
                  }}
                >
                  Dashboard
                </Typography>
              </Button>
              <Button
                style={{
                  background: selected.clientes ? "#644BBA" : "#FFF",
                  borderRadius: " 100px",
                  color: selected.clientes ? "#FFF" : "#644BBA",
                  textAlign: "center",
                  fontFamily: "Roboto",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "20px",
                  letterSpacing: "0.1px",
                  textTransform: "capitalize",
                  width: "52px",
                }}
                onClick={() => {
                  setSelected({
                    ...selected,
                    clientes: !selected.clientes,
                    dashboard: false,
                    reglas: false,
                  });
                  windowDataLayer({ ...dataLayer1, label: "Clientes" });
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "20px",
                    letterSpacing: "0.1px",
                  }}
                >
                  Clientes
                </Typography>
              </Button>
              <Button
                style={{
                  background: selected.reglas ? "#644BBA" : "#FFF",
                  borderRadius: " 100px",
                  color: selected.reglas ? "#FFF" : "#644BBA",
                  textAlign: "center",
                  fontFamily: "Roboto",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "20px",
                  letterSpacing: "0.1px",
                  textTransform: "capitalize",
                  width: "172px",
                  height: "40px",
                }}
                onClick={() => {
                  setSelected({
                    ...selected,
                    reglas: !selected.reglas,
                    dashboard: false,
                    clientes: false,
                  });
                  windowDataLayer({
                    ...dataLayer1,
                    label: "Reglas De Acumulación",
                  });
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "20px",
                    letterSpacing: "0.1px",
                  }}
                >
                  Reglas de acumulación
                </Typography>
              </Button>
            </Stack>
          ) : (
            <></>
          )}
          <Box
            sx={{
              position: "absolute",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{
                display: { xs: "flex", md: "none" },
              }}
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box display="flex" position={mobileCheck ? "relative" : "absolute"}>
            <Typography
              component="div"
              style={{
                color: "#1C1B1E",
                textAlign: "center",
                fontFamily: "Roboto",
                fontSize: mobileCheck ? "16px" : "12px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "24px" /* 150% */,
                width: "200px",
              }}
              sx={{
                marginLeft: mobileCheck ? "320px" : "-360px",
              }}
            >
              Pamela Rojas González
            </Typography>
          </Box>
          <Button
            sx={{
              color: "#1C1B1E",
              display: "flex",
              position: mobileCheck ? "relative" : "absolute",
            }}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            style={{
              color: "#1C1B1E",
              marginRight: mobileCheck ? "200px" : "150px",
            }}
          >
            <KeyboardArrowDownIcon sx={{ marginLeft: "10px" }} />
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
          {show && !mobileCheck && <SlideMenu show={show} />}
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};
