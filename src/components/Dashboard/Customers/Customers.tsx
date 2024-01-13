import * as React from "react";
import { Box } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { useGetFetcher } from "../../../hooks/useGetFetcherCustomers";
import { useQuery } from "react-query";

interface Props {}

export const Customers: React.FC<Props> = () => {
  let clientesT: number = 0;
  let clientesN: number = 0;
  let clientesC: number = 0;
  let clientesNC: number = 0;

  const fetcher = useGetFetcher();

  const { data, status } = useQuery("dataCustomers", fetcher);

  const [showData, setShowData] = React.useState(false);
  const [clientesTotales, setClientesTotales] = React.useState(false);
  const [clientesNuevos, setClientesNuevos] = React.useState(false);
  const [clientesCompraron, setClientesCompraron] = React.useState(false);
  const [clientesNoCompraron, setClientesNoCompraron] = React.useState(false);

  const [clientes, setClientes] = React.useState({
    clientesTotales: false,
    clientesNuevos: false,
    clientesCompraron: false,
    clientesNoCompraron: false,
  });

  React.useEffect(() => {
    setShowData(true);
  }, []);

  if (data !== undefined) {
    Object.values(data).map((item) => {
      if ((item as { [key: string]: number })["Clientes totales"] > 0) {
      } else {
        clientesT += 1;
      }
      if ((item as { [key: string]: number })["Clientes nuevos"] > 0) {
      } else {
        clientesN += 1;
      }
      if ((item as { [key: string]: number })["Compraron"] > 0) {
      } else {
        clientesC += 1;
      }
      if ((item as { [key: string]: number })["No compraron"] > 0) {
      } else {
        clientesNC += 1;
      }
    });
  }

  return (
    <>
      {showData && (
        <Box display={"inline-block"} marginTop={"250px"} marginLeft={"50px"}>
          <BarChart width={1300} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="Clientes totales"
              fill={clientesT < 1 ? "#EB3535" : "rgb(235,53,53,0.4)"}
            />
            <Bar
              dataKey="Clientes nuevos"
              fill={clientesN < 1 ? "#EB7635" : "rgb(235,53,53,0.4)"}
            />
            <Bar
              dataKey="Compraron"
              fill={clientesC < 1 ? "#358DEB" : "rgb(53,141,235,0.4)"}
            />
            <Bar
              dataKey="No compraron"
              fill={clientesNC < 1 ? "#2DCF5A" : "rgb(45,207,90,0.4)"}
            />
          </BarChart>
        </Box>
      )}
    </>
  );
};
