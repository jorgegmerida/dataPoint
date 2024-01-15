import * as React from "react";
import { Box, useMediaQuery } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

import { useGetFetcher } from "../../../hooks/useGetFetcher";
import { useQuery } from "react-query";

interface Props {}

export const Customers: React.FC<Props> = () => {
  let clientesT: number = 0;
  let clientesN: number = 0;
  let clientesC: number = 0;
  let clientesNC: number = 0;

  const fetcher = useGetFetcher();

  const mobileCheck = useMediaQuery("(min-width: 600px)");

  const { data } = useQuery("dataCustomers", () =>
    fetcher("/api/dataCustomers")
  );

  const [showData, setShowData] = React.useState(false);

  React.useEffect(() => {
    setShowData(true);
  }, []);

  if (data !== undefined) {
    Object.values(data.hours).map((item) => {
      if ((item as { [key: string]: number })["clientesTotales"] < 1) {
        clientesT += 1;
      }
      if ((item as { [key: string]: number })["clientesNuevos"] < 1) {
        clientesN += 1;
      }
      if ((item as { [key: string]: number })["compraron"] < 1) {
        clientesC += 1;
      }
      if ((item as { [key: string]: number })["noCompraron"] < 1) {
        clientesNC += 1;
      }
    });
  }

  return (
    <>
      {showData && data !== undefined && (
        <Box
          display={"inline-block"}
          justifyContent={"center"}
          alignContent={"center"}
          textAlign={"center"}
          marginTop={mobileCheck ? "250px" : "150px"}
          marginLeft={mobileCheck ? "50px" : ""}
        >
          <BarChart
            width={mobileCheck ? 1300 : 300}
            height={mobileCheck ? 400 : 250}
            data={data.hours!}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="clientesTotales"
              fill={clientesT < 1 ? "#EB3535" : "rgb(235,53,53,0.4)"}
            />
            <Bar
              dataKey="clientesNuevos"
              fill={clientesN < 1 ? "#EB7635" : "rgb(235,53,53,0.4)"}
            />
            <Bar
              dataKey="compraron"
              fill={clientesC < 1 ? "#358DEB" : "rgb(53,141,235,0.4)"}
            />
            <Bar
              dataKey="noCompraron"
              fill={clientesNC < 1 ? "#2DCF5A" : "rgb(45,207,90,0.4)"}
            />
          </BarChart>
        </Box>
      )}
    </>
  );
};
