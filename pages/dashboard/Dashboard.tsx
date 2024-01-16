import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
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
import { useGetFetcher } from "../../src/hooks/useGetFetcher";
import { useQuery } from "react-query";
import { CustomersTable } from "../../src/components/UI/CustomersTable";
import { TransactionTable } from "../../src/components/UI/TransactionsTable";
import { MoneyTable } from "../../src/components/UI/MoneyTable";
import { CashbackTable } from "../../src/components/UI/CashbackTable";
import { ICustomer, evInteraction } from "../../src/models";
import { useWindowDataLayer } from "../../utils/useWindowDataLayer";

interface Props {}

const Dashboard: React.FC<Props> = () => {
  const windowDataLayer = useWindowDataLayer();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const fetcher = useGetFetcher();

  const mobileCheck = useMediaQuery("(min-width: 600px)");

  const { data: dataCustomers } = useQuery("dataCustomers", () =>
    fetcher("/api/dataCustomers")
  );
  const { data: dataTransactions } = useQuery("dataTransactions", () =>
    fetcher("/api/dataTransactions")
  );
  const { data: dataMoney } = useQuery("dataMoney", () =>
    fetcher("/api/dataMoney")
  );

  const { data: dataCashback } = useQuery("dataCashback", () =>
    fetcher("/api/dataCashback")
  );

  const [expanded, setExpanded] = React.useState(false);
  const [selected, setSelected] = React.useState({
    hoy: true,
    semana: false,
    mes: false,
    semestre: false,
    ytd: false,
    anio: false,
    max: false,
  });

  const [selectedDay, setSelectedDay] = React.useState({
    todo: false,
    lunes: false,
    martes: false,
    miercoles: false,
    jueves: false,
    viernes: false,
    sabado: false,
    domingo: false,
  });

  const [selectedPulso, setSelectedPulso] = React.useState({
    pulso: false,
    semestre: false,
    ytd: false,
    anio: false,
    max: false,
  });

  const [customersToggle, setSelectedCustomersToggle] = React.useState(false);

  const [transactionToggle, setSelectedTransactionToggle] =
    React.useState(false);

  const [dineroToggle, setSelectedDineroToggle] = React.useState(false);

  const [cashbackToggle, setSelectedCashbackToggle] = React.useState(false);

  const { Dashboards } = useSelectDashboards();

  const [valueTogle, setValueTogle] = React.useState<string>("");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [valueTogleDays, setValueTogleDays] = React.useState<string>("");

  const handleExpandClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setExpanded(!expanded);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setExpanded(false);
  };

  const handleClickToggle = (value: string) => {
    setValueTogle(value);
    if (value === "7D") {
      setSelectedDay({
        ...selectedDay,
        todo: true,
        lunes: false,
        martes: false,
        miercoles: false,
        jueves: false,
        viernes: false,
        sabado: false,
        domingo: false,
      });
    }
  };

  const handleClickToggleDays = (value: string) => {
    setValueTogleDays(value);
    if (value === "Todo" && selectedDay.todo) {
      setSelected({
        ...selected,
        semana: false,
      });
    }
  };

  const dataLayer1: evInteraction = {
    event: "evInteraction",
    category: "button",
    action: "click",
    label: "HOY|7D|Este Mes1|6M|YTD/YTG|1A|MÁX",
    value: "no_aplica",
    component: "no_aplica",
    description: "no_aplica",
    result: "no_aplica",
    destination: "no_aplica",
  };

  const dataLayer2: evInteraction = {
    event: "evInteraction",
    category: "button",
    action: "click",
    label: "CLIENTES|TRANSACCIONES|DINERO|CASHBACK",
    value: "no_aplica",
    component: "no_aplica",
    description: "no_aplica",
    result: "no_aplica",
    destination: "no_aplica",
  };

  const dataLayer3: evInteraction = {
    event: "evInteraction",
    category: "button",
    action: "click",
    label: "PulsoDashboard|Pulso6M|PulsoYTD/YTG|Pulso1A|PulsoMÁX",
    value: "no_aplica",
    component: "no_aplica",
    description: "no_aplica",
    result: "no_aplica",
    destination: "no_aplica",
  };

  React.useEffect(() => {}, [
    customersToggle,
    transactionToggle,
    dineroToggle,
    cashbackToggle,
  ]);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      minWidth={"100vw"}
      minHeight={"100vh"}
    >
      <Box display={"flex"} justifyContent={"space-around"}>
        {Dashboards.Customers ? (
          <Box
            display={mobileCheck ? "flex" : "inline-block"}
            flexDirection={"row"}
            justifyContent={"center"}
            gap={2}
            marginRight={mobileCheck ? "300px" : "auto"}
            marginLeft={mobileCheck ? "" : "50px"}
            marginTop={mobileCheck ? "-20px" : "120px"}
          >
            <ToggleButton
              value="check"
              selected={selected.hoy}
              sx={{ border: "none" }}
              onChange={() => {
                setSelected({
                  ...selected,
                  hoy: !selected.hoy,
                  semana: false,
                  mes: false,
                  semestre: false,
                  ytd: false,
                  anio: false,
                  max: false,
                });
              }}
              onClick={() => {
                windowDataLayer({ ...dataLayer1, label: "HOY" });
                handleClickToggle("HOY");
              }}
            >
              <Typography color={"#48454E"}>HOY</Typography>
            </ToggleButton>
            <ToggleButton
              sx={{ border: "none" }}
              value="check"
              selected={selected.semana}
              onChange={() => {
                setSelected({
                  ...selected,
                  semana: !selected.semana,
                  hoy: false,
                  mes: false,
                  semestre: false,
                  ytd: false,
                  anio: false,
                  max: false,
                });
              }}
              onClick={() => {
                windowDataLayer({ ...dataLayer1, label: "7D" });
                handleClickToggle("7D");
              }}
            >
              <Typography color={"#48454E"}> 7D</Typography>
            </ToggleButton>
            <ToggleButton
              sx={{ border: "none" }}
              value="check"
              selected={selected.mes}
              onChange={() => {
                setSelected({
                  ...selected,
                  mes: !selected.mes,
                  hoy: false,
                  semana: false,
                  semestre: false,
                  ytd: false,
                  anio: false,
                  max: false,
                });
              }}
              onClick={() => {
                windowDataLayer({ ...dataLayer1, label: "Este Mes" });
              }}
            >
              <Typography color={"#48454E"}>Este Mes</Typography>
            </ToggleButton>
            <ToggleButton
              sx={{ border: "none" }}
              value="check"
              selected={selected.semestre}
              onChange={() => {
                setSelected({
                  ...selected,
                  semestre: !selected.semestre,
                  hoy: false,
                  semana: false,
                  mes: false,
                  ytd: false,
                  anio: false,
                  max: false,
                });
              }}
              onClick={() => {
                windowDataLayer({ ...dataLayer1, label: "6M" });
              }}
            >
              <Typography color={"#48454E"}> 6M</Typography>
            </ToggleButton>
            <ToggleButton
              sx={{ border: "none" }}
              value="check"
              selected={selected.ytd}
              onChange={() => {
                setSelected({
                  ...selected,
                  ytd: !selected.ytd,
                  anio: false,
                  max: false,
                  hoy: false,
                  semana: false,
                  mes: false,
                  semestre: false,
                });
              }}
              onClick={() => {
                windowDataLayer({ ...dataLayer1, label: "YTD/YTG" });
              }}
            >
              <Typography color={"#48454E"}> YTD/YTG</Typography>
            </ToggleButton>
            <ToggleButton
              sx={{ border: "none" }}
              value="check"
              selected={selected.anio}
              onChange={() => {
                setSelected({
                  ...selected,
                  anio: !selected.anio,
                  max: false,
                  hoy: false,
                  semana: false,
                  mes: false,
                  semestre: false,
                  ytd: false,
                });
              }}
              onClick={() => {
                windowDataLayer({ ...dataLayer1, label: "1A" });
              }}
            >
              <Typography color={"#48454E"}> 1A</Typography>
            </ToggleButton>
            <ToggleButton
              sx={{ border: "none" }}
              value="check"
              selected={selected.max}
              onChange={() => {
                setSelected({
                  ...selected,
                  max: !selected.max,
                  anio: false,
                  ytd: false,
                  semestre: false,
                  mes: false,
                  semana: false,
                  hoy: false,
                });
              }}
              onClick={() => {
                windowDataLayer({ ...dataLayer1, label: "MÁX" });
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
        ) : (
          <>
            <Box
              display={mobileCheck ? "flex" : "inline-block"}
              flexDirection={"row"}
              justifyContent={"center"}
              gap={2}
              marginRight={mobileCheck ? "1230px" : "auto"}
              marginLeft={mobileCheck ? "" : "50px"}
              marginTop={mobileCheck ? "-20px" : "120px"}
            >
              <ToggleButton
                sx={{ border: "none" }}
                value="check"
                selected={selectedPulso.pulso}
                onChange={() => {
                  setSelectedPulso({
                    ...selectedPulso,
                    pulso: true,
                    semestre: false,
                    ytd: false,
                    anio: false,
                    max: false,
                  });
                }}
                onClick={() => {
                  windowDataLayer({ ...dataLayer3, label: "PulsoDashboard" });
                }}
              >
                <Typography color={"#48454E"}>Pulso</Typography>
              </ToggleButton>
              <ToggleButton
                sx={{ border: "none" }}
                value="check"
                selected={selectedPulso.semestre}
                onChange={() => {
                  setSelectedPulso({
                    ...selectedPulso,
                    pulso: false,
                    semestre: true,
                    ytd: false,
                    anio: false,
                    max: false,
                  });
                }}
                onClick={() => {
                  windowDataLayer({ ...dataLayer3, label: "Pulso6M" });
                }}
              >
                <Typography color={"#48454E"}> 6M</Typography>
              </ToggleButton>
              <ToggleButton
                sx={{ border: "none" }}
                value="check"
                selected={selectedPulso.ytd}
                onChange={() => {
                  setSelectedPulso({
                    ...selectedPulso,
                    pulso: false,
                    semestre: false,
                    ytd: true,
                    anio: false,
                    max: false,
                  });
                }}
                onClick={() => {
                  windowDataLayer({ ...dataLayer3, label: "PulsoYTD/YTG" });
                }}
              >
                <Typography color={"#48454E"}> YTD/YTG</Typography>
              </ToggleButton>
              <ToggleButton
                sx={{ border: "none" }}
                value="check"
                selected={selectedPulso.anio}
                onChange={() => {
                  setSelectedPulso({
                    ...selectedPulso,
                    pulso: false,
                    semestre: false,
                    ytd: false,
                    anio: true,
                    max: false,
                  });
                }}
                onClick={() => {
                  windowDataLayer({ ...dataLayer3, label: "Pulso1A" });
                }}
              >
                <Typography color={"#48454E"}> 1A</Typography>
              </ToggleButton>
              <ToggleButton
                sx={{ border: "none" }}
                value="check"
                selected={selectedPulso.max}
                onChange={() => {
                  setSelectedPulso({
                    ...selectedPulso,
                    pulso: false,
                    semestre: false,
                    ytd: false,
                    anio: false,
                    max: true,
                  });
                }}
                onClick={() => {
                  windowDataLayer({ ...dataLayer3, label: "PulsoMÁX" });
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
          </>
        )}

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={() => handleClose()}
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

        {Dashboards.Customers && (
          <Box marginRight={"500px"} display={mobileCheck ? "flex" : "none"}>
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
        )}

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
            marginLeft: mobileCheck ? "1400px" : "100px",
            zIndex: mobileCheck ? 1 : 0,
            marginRight: mobileCheck ? "120px" : "30px",
            marginTop: mobileCheck ? "-10px" : "-150px",
          }}
          id="Cards"
        />
      </Box>

      {selected.semana && Dashboards.Customers && (
        <Box display={"flex"} justifyContent={"space-around"}>
          <Box
            display={mobileCheck ? "flex" : "inline-block"}
            flexDirection={"row"}
            justifyContent={"left"}
            textAlign={"left"}
            gap={2}
            marginRight={mobileCheck ? "960px" : "auto"}
            marginLeft={mobileCheck ? "" : "50px"}
            marginTop={"40px"}
          >
            <ToggleButton
              value="check"
              selected={selectedDay.todo}
              sx={{ border: "none" }}
              onChange={() => {
                setSelectedDay({
                  ...selectedDay,
                  todo: !selectedDay.todo,
                  lunes: false,
                  martes: false,
                  miercoles: false,
                  jueves: false,
                  viernes: false,
                  sabado: false,
                  domingo: false,
                });
              }}
              onClick={() => {
                windowDataLayer({ ...dataLayer1, label: "Todo" });
                handleClickToggleDays("Todo");
              }}
            >
              <Typography color={"#48454E"}>Todo</Typography>
            </ToggleButton>
            <ToggleButton
              sx={{ border: "none" }}
              value="check"
              selected={selectedDay.lunes}
              onChange={() => {
                setSelectedDay({
                  ...selectedDay,
                  lunes: !selectedDay.lunes,
                  todo: false,
                  martes: false,
                  miercoles: false,
                  jueves: false,
                  viernes: false,
                  sabado: false,
                  domingo: false,
                });
              }}
              onClick={() => {
                windowDataLayer({ ...dataLayer1, label: "7D" });
                handleClickToggleDays("Lunes");
              }}
            >
              <Typography color={"#48454E"}>Lunes</Typography>
            </ToggleButton>
            <ToggleButton
              sx={{ border: "none" }}
              value="check"
              selected={selectedDay.martes}
              onChange={() => {
                setSelectedDay({
                  ...selectedDay,
                  martes: !selectedDay.martes,
                  todo: false,
                  lunes: false,
                  miercoles: false,
                  jueves: false,
                  viernes: false,
                  sabado: false,
                  domingo: false,
                });
              }}
              onClick={() => {
                windowDataLayer({ ...dataLayer1, label: "Este Mes" });
                handleClickToggleDays("Martes");
              }}
            >
              <Typography color={"#48454E"}>Martes</Typography>
            </ToggleButton>
            <ToggleButton
              sx={{ border: "none" }}
              value="check"
              selected={selectedDay.miercoles}
              onChange={() => {
                setSelectedDay({
                  ...selectedDay,
                  miercoles: !selectedDay.miercoles,
                  todo: false,
                  martes: false,
                  lunes: false,
                  jueves: false,
                  viernes: false,
                  sabado: false,
                  domingo: false,
                });
              }}
              onClick={() => {
                windowDataLayer({ ...dataLayer1, label: "6M" });
                handleClickToggleDays("Miercoles");
              }}
            >
              <Typography color={"#48454E"}>Miercoles</Typography>
            </ToggleButton>
            <ToggleButton
              sx={{ border: "none" }}
              value="check"
              selected={selectedDay.jueves}
              onChange={() => {
                setSelectedDay({
                  ...selectedDay,
                  jueves: !selectedDay.jueves,
                  todo: false,
                  martes: false,
                  lunes: false,
                  miercoles: false,
                  viernes: false,
                  sabado: false,
                  domingo: false,
                });
              }}
              onClick={() => {
                windowDataLayer({ ...dataLayer1, label: "YTD/YTG" });
                handleClickToggleDays("Jueves");
              }}
            >
              <Typography color={"#48454E"}>Jueves</Typography>
            </ToggleButton>
            <ToggleButton
              sx={{ border: "none" }}
              value="check"
              selected={selectedDay.viernes}
              onChange={() => {
                setSelectedDay({
                  ...selectedDay,
                  viernes: !selectedDay.viernes,
                  todo: false,
                  martes: false,
                  miercoles: false,
                  lunes: false,
                  jueves: false,
                  sabado: false,
                  domingo: false,
                });
              }}
              onClick={() => {
                windowDataLayer({ ...dataLayer1, label: "1A" });
                handleClickToggleDays("Viernes");
              }}
            >
              <Typography color={"#48454E"}>Viernes</Typography>
            </ToggleButton>
            <ToggleButton
              sx={{ border: "none" }}
              value="check"
              selected={selectedDay.sabado}
              onChange={() => {
                setSelectedDay({
                  ...selectedDay,
                  sabado: !selectedDay.sabado,
                  todo: false,
                  martes: false,
                  miercoles: false,
                  lunes: false,
                  jueves: false,
                  viernes: false,
                  domingo: false,
                });
              }}
              onClick={() => {
                windowDataLayer({ ...dataLayer1, label: "MÁX" });
                handleClickToggleDays("Sábado");
              }}
            >
              <Typography color={"#48454E"}>Sábado</Typography>
            </ToggleButton>
            <ToggleButton
              sx={{ border: "none" }}
              value="check"
              selected={selectedDay.domingo}
              onChange={() => {
                setSelectedDay({
                  ...selectedDay,
                  domingo: !selectedDay.domingo,
                  todo: false,
                  martes: false,
                  miercoles: false,
                  lunes: false,
                  viernes: false,
                  jueves: false,
                  sabado: false,
                });
              }}
              onClick={() => {
                windowDataLayer({ ...dataLayer1, label: "MÁX" });
                handleClickToggleDays("Domingo");
              }}
            >
              <Typography color={"#48454E"}>Domingo</Typography>
            </ToggleButton>
          </Box>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={() => handleClose()}
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
        </Box>
      )}

      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={mobileCheck ? "space-around" : "center"}
        marginLeft={mobileCheck ? "-200px" : ""}
        marginTop={mobileCheck ? "84px" : "40px"}
      >
        <Box
          display={"flex"}
          flexDirection={mobileCheck ? "row" : "column"}
          gap={2}
          marginLeft={mobileCheck ? "-150px" : "50px"}
          marginRight={mobileCheck ? "" : "25px"}
        >
          <ToggleButton
            id="toggleClientes"
            value="check"
            selected={customersToggle}
            onChange={() => {
              setSelectedCustomersToggle(!customersToggle);
            }}
            sx={{ width: "auto", height: "32px" }}
            onClick={() => {
              windowDataLayer({ ...dataLayer2, label: "CLIENTES" });
            }}
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
            id="toggleTransacciones"
            value="check"
            selected={transactionToggle}
            onChange={() => {
              setSelectedTransactionToggle(!transactionToggle);
            }}
            sx={{ width: "auto", height: "32px" }}
            onClick={() => {
              windowDataLayer({ ...dataLayer2, label: "TRANSACCIONES" });
            }}
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
        <Box
          display={"flex"}
          flexDirection={mobileCheck ? "row" : "column"}
          gap={2}
          marginRight={mobileCheck ? "150px" : "70px"}
        >
          <ToggleButton
            id="toggleDinero"
            value="check"
            selected={dineroToggle}
            onChange={() => {
              setSelectedDineroToggle(!dineroToggle);
            }}
            sx={{ width: "auto", height: "32px" }}
            onClick={() => {
              windowDataLayer({ ...dataLayer2, label: "DINERO" });
            }}
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
            id="toggleCashback"
            value="check"
            selected={cashbackToggle}
            onChange={() => {
              setSelectedCashbackToggle(!cashbackToggle);
            }}
            sx={{ width: "auto", height: "32px" }}
            onClick={() => {
              windowDataLayer({ ...dataLayer2, label: "CASHBACK" });
            }}
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

      {Dashboards.Customers ? (
        <Customers
          data={dataCustomers}
          selected={selected}
          selectedDay={selectedDay}
          valueToggleDay={valueTogleDays}
        />
      ) : (
        <Pulso />
      )}
      {Dashboards.Customers && (
        <Box display={"flex"} flexDirection={mobileCheck ? "row" : "column"}>
          <Box
            display={"flex"}
            justifyContent={"left "}
            marginLeft={"100px"}
            marginTop={"40px"}
          >
            {(selected.hoy || selected.semana) &&
              (customersToggle ||
                transactionToggle ||
                dineroToggle ||
                cashbackToggle) && (
                <Card
                  sx={{
                    display: "flex",
                    maxWidth: "auto",
                    padding: "15px",
                    flexDirection: "column",
                    alignItems: "center",
                    alignSelf: "stretch",
                    borderradius: "10px",
                    background: "#E6E1E6",
                  }}
                >
                  <CardHeader
                    title={valueTogle}
                    sx={{
                      textAlign: "center",
                      color: "#000",
                      fontFamily: "Roboto",
                      fontSize: "19px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "24px",
                    }}
                  />
                  <CardContent>
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      justifyContent={"center"}
                      textAlign={"center"}
                    >
                      <Typography color="text.secondary">
                        {selected.hoy ? "Horas" : "Semana"}
                      </Typography>

                      <br></br>
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"space-between"}
                      >
                        {selected.hoy ? (
                          dataCustomers?.hoursBetween!.map(
                            (item: ICustomer, index: number) => {
                              return (
                                <Box key={index}>
                                  {item.name}
                                  <br></br>
                                  <br></br>
                                </Box>
                              );
                            }
                          )
                        ) : selected.semana ? (
                          dataCustomers?.days?.map(
                            (item: ICustomer, index: number) => {
                              return (
                                <Box key={index}>
                                  {item.name}
                                  <br></br>
                                  <br></br>
                                </Box>
                              );
                            }
                          )
                        ) : (
                          <></>
                        )}
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              )}
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            flexDirection={!mobileCheck ? "column" : "row"}
          >
            {customersToggle && <CustomersTable data={dataCustomers} />}
            {transactionToggle && <TransactionTable data={dataTransactions} />}
            {dineroToggle && <MoneyTable data={dataMoney} />}
            {cashbackToggle && <CashbackTable data={dataCashback} />}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Dashboard;
