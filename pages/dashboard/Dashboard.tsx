import * as React from "react";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
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
import { useGetFetcher } from "../../src/hooks/useGetFetcherCustomers";
import { useGetFetcherTransactions } from "../../src/hooks/useGetFetcherTransactions";
import { useQuery } from "react-query";
import { CustomersTable } from "../../src/components/UI/CustomersTable";
import { TransactionTable } from "../../src/components/UI/TransactionsTable";
import { CashbackTable } from "../../src/components/UI/CashbackTable";
import { MoneyTable } from "../../src/components/UI/MoneyTable";

interface Props {}

const Dashboard: React.FC<Props> = () => {
  // const [showData, setShowData] = React.useState(true);
  const { isReady } = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const fetcher = useGetFetcher();
  const fetcherTransactions = useGetFetcherTransactions();

  const { data: dataCustomers } = useQuery("dataCustomers", fetcher);
  const { data: dataTransactions } = useQuery(
    "dataTransactions",
    fetcherTransactions
  );

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

  const [dineroToggle, setSelectedDineroToggle] = React.useState(false);

  const [cashbackToggle, setSelectedCashbackToggle] = React.useState(false);

  const { Dashboards } = useSelectDashboards();

  const [valueTogle, setValueTogle] = React.useState<string>("");

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
            onClick={() => handleClickToggle("HOY")}
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
            onClick={() => handleClickToggle("7D")}
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
            // onClick={() => handleClickToggle("Este Mes")}
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
            // onClick={() => handleClickToggle("6M")}
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
            // onClick={() => handleClickToggle("YTD/YTG")}
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
            // onClick={() => handleClickToggle("1A")}
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
            // onClick={() => handleClickToggle("MÁX")}
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
      {Dashboards.Customers && (
        <Box display={"flex"} flexDirection={"row"}>
          <Box
            display={"flex"}
            justifyContent={"left "}
            marginLeft={"340px"}
            marginTop={"40px"}
          >
            {valueTogle.length > 0 && (
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
                      {valueTogle === "HOY" ? "Horas" : "Semana"}
                    </Typography>

                    <br></br>
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      justifyContent={"space-between"}
                    >
                      {valueTogle === "HOY" ? (
                        dataCustomers.hoursBetween?.map((item: any) => {
                          return (
                            <Box>
                              {item.name}
                              <br></br>
                              <br></br>
                            </Box>
                          );
                        })
                      ) : valueTogle === "7D" ? (
                        dataCustomers.days?.map((item: any) => {
                          return (
                            <Box>
                              {item.name}
                              <br></br>
                              <br></br>
                            </Box>
                          );
                        })
                      ) : (
                        <></>
                      )}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            )}
          </Box>

          {customersToggle && <CustomersTable data={dataCustomers} />}
          {transactionToggle && <TransactionTable data={dataTransactions} />}
          {/* {dineroToggle && <MoneyTable data={data} />}
          {cashbackToggle && <CashbackTable data={data} />} */}
        </Box>
      )}
    </Box>
  );
};

export default Dashboard;