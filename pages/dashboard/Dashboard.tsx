import * as React from "react";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Collapse,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import ToggleButton from "@mui/material/ToggleButton";
import { Cards } from "../../src/components/Cards/Cards";
import { Customers } from "../../src/components/Dashboard/Customers";
import CheckIcon from "@mui/icons-material/Check";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useSelectDashboards } from "../../src/stores/useSelectDashboards";
import { Pulso } from "../../src/components/Dashboard/Pulso";
import { FloatCards } from "../../src/components/FloatsCards";

interface Props {}

const Dashboard: React.FC<Props> = () => {
  // const [showData, setShowData] = React.useState(true);
  const { isReady } = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [expanded, setExpanded] = React.useState(false);
  const [selected, setSelected] = React.useState({
    hoy: false,
    semana: false,
    mes: false,
    semestre: false,
    ytd: false,
    anio: false,
    max: false,
  });
  const [customersToggle, setSelectedCustomersToggle] = React.useState(false);

  const [transactionToggle, setSelectedTransactionToggle] =
    React.useState(false);

  const { Dashboards } = useSelectDashboards();

  const [dineroToggle, setSelectedDineroToggle] = React.useState(false);

  const [cashbackToggle, setSelectedCashbackToggle] = React.useState(false);

  const handleExpandClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setExpanded(!expanded);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setExpanded(false);
  };

  // React.useEffect(() => {
  //   setShowData(true);
  // }, []);
  return (
    <Box display={"flex"} flexDirection={"column"} minWidth={"100vw"}>
      <Box display={"flex"} justifyContent={"space-around"}>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          gap={"20px"}
          marginRight={"300px"}
          marginTop={"-20px"}
        >
          <ToggleButton
            value="check"
            selected={selected.hoy}
            sx={{ border: "none" }}
            onChange={() => {
              setSelected({ ...selected, hoy: !selected.hoy });
            }}
          >
            <Typography color={"#48454E"}>HOY</Typography>
          </ToggleButton>
          <ToggleButton
            sx={{ border: "none" }}
            value="check"
            selected={selected.semana}
            onChange={() => {
              setSelected({ ...selected, semana: !selected.semana });
            }}
          >
            <Typography color={"#48454E"}> 7D</Typography>
          </ToggleButton>
          <ToggleButton
            sx={{ border: "none" }}
            value="check"
            selected={selected.mes}
            onChange={() => {
              setSelected({ ...selected, mes: !selected.mes });
            }}
          >
            <Typography color={"#48454E"}>Este Mes</Typography>
          </ToggleButton>
          <ToggleButton
            sx={{ border: "none" }}
            value="check"
            selected={selected.semestre}
            onChange={() => {
              setSelected({ ...selected, semestre: !selected.semestre });
            }}
          >
            <Typography color={"#48454E"}> 6M</Typography>
          </ToggleButton>
          <ToggleButton
            sx={{ border: "none" }}
            value="check"
            selected={selected.ytd}
            onChange={() => {
              setSelected({ ...selected, ytd: !selected.ytd });
            }}
          >
            <Typography color={"#48454E"}> YTD/YTG</Typography>
          </ToggleButton>
          <ToggleButton
            sx={{ border: "none" }}
            value="check"
            selected={selected.anio}
            onChange={() => {
              setSelected({ ...selected, anio: !selected.anio });
            }}
          >
            <Typography color={"#48454E"}> 1A</Typography>
          </ToggleButton>
          <ToggleButton
            sx={{ border: "none" }}
            value="check"
            selected={selected.max}
            onChange={() => {
              setSelected({ ...selected, max: !selected.max });
            }}
          >
            <Typography color={"#48454E"}> MÁX</Typography>
          </ToggleButton>
          <Button
            onClick={(event) => handleExpandClick(event)}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <InsertInvitationIcon sx={{ color: "#644BBA" }} />
            <Typography color={"#48454E"}>Personalizado</Typography>
          </Button>
        </Box>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={(event) => handleClose()}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
              </LocalizationProvider>
            </Collapse>
          </MenuItem>
        </Menu>

        <Box marginRight={"500px"} display={"flex"}>
          <VisibilityIcon sx={{ color: "#644BBA" }} />
          <ToggleButton
            value="check"
            sx={{ border: "none", marginTop: "-20px", color: "#644BBA" }}
            onChange={() => {}}
          >
            <Typography
              color={"#48454E"}
              sx={{
                color: "#644BBA",
                textSlign: "center",
                fontFamily: "Roboto",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "20px" /* 142.857% */,
                letterSpacing: "0.1px",
                marginTop: "10px",
              }}
            >
              Ver detalle
            </Typography>
          </ToggleButton>
        </Box>
        <FloatCards>
          <Cards />
        </FloatCards>
        <div
          style={{
            display: "flex",
            position: "absolute",
            justifyContent: "right",
            textAlign: "right",
            justifyItems: "right",
            alignItems: "right",
            alignContent: "right",
            float: "right",
            right: "0",
            zIndex: 1,
            marginRight: "120px",
            marginTop: "-10px",
          }}
          id="Cards"
        />
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-around"}
        marginLeft={"-200px"}
        marginTop={"84px"}
      >
        <Box display={"flex"} gap={2} marginLeft={"-150px"}>
          <ToggleButton
            value="check"
            selected={customersToggle}
            onChange={() => {
              setSelectedCustomersToggle(!customersToggle);
            }}
            sx={{ width: "auto", height: "32px" }}
          >
            <CheckIcon />
            <Typography
              sx={{
                color: " #1D192B",
                textAlign: "center",
                fontFamily: "Roboto",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "20px",
                letterSpacing: "0.1px",
              }}
            >
              Clientes
            </Typography>
          </ToggleButton>
          <ToggleButton
            value="check"
            selected={transactionToggle}
            onChange={() => {
              setSelectedTransactionToggle(!transactionToggle);
            }}
            sx={{ width: "auto", height: "32px" }}
          >
            <Typography
              color={"#48454E"}
              sx={{
                color: "#48454E",
                textAlign: "center",
                fontFamily: "Roboto",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "20px",
                letterSpacing: "0.1px",
              }}
            >
              Transacciones
            </Typography>
          </ToggleButton>
        </Box>
        <Box display={"flex"} gap={2} marginRight={"150px"}>
          <ToggleButton
            value="check"
            selected={dineroToggle}
            onChange={() => {
              setSelectedDineroToggle(!dineroToggle);
            }}
            sx={{ width: "auto", height: "32px" }}
          >
            <Typography
              color={"#48454E"}
              sx={{
                color: " #1D192B",
                textAlign: "center",
                fontFamily: "Roboto",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "20px",
                letterSpacing: "0.1px",
              }}
            >
              Dinero
            </Typography>
          </ToggleButton>
          <ToggleButton
            value="check"
            selected={cashbackToggle}
            onChange={() => {
              setSelectedCashbackToggle(!cashbackToggle);
            }}
            sx={{ width: "auto", height: "32px" }}
          >
            <Typography
              color={"#48454E"}
              sx={{
                color: " #1D192B",
                textAlign: "center",
                fontFamily: "Roboto",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "20px",
                letterSpacing: "0.1px",
              }}
            >
              Cashback
            </Typography>
          </ToggleButton>
        </Box>
      </Box>
      {Dashboards.Customers ? <Customers /> : <Pulso />}
    </Box>
  );
  // if (isReady) {
  //   return (
  //     <>
  //       (
  //       <Grid>
  //         <br>ssss</br>
  //       </Grid>
  //       )
  //     </>
  //   );
  // } else {
  //   return <></>;
  // }
};

export default Dashboard;
