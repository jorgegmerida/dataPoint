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
import { ICustomerData } from "../../../models";

interface Props {
  data: ICustomerData;
  selected: {
    hoy: boolean;
    semana: boolean;
    mes: boolean;
    semestre: boolean;
    ytd: boolean;
    anio: boolean;
    max: boolean;
  };
  selectedDay: {
    todo: boolean;
    lunes: boolean;
    martes: boolean;
    miercoles: boolean;
    jueves: boolean;
    viernes: boolean;
    sabado: boolean;
    domingo: boolean;
  };
  valueToggleDay: string;
}

export const Customers: React.FC<Props> = ({
  data,
  selected,
  selectedDay,
  valueToggleDay,
}) => {
  let clientesT: number = 0;
  let clientesN: number = 0;
  let clientesC: number = 0;
  let clientesNC: number = 0;

  const mobileCheck = useMediaQuery("(min-width: 600px)");

  const [showData, setShowData] = React.useState(false);

  React.useEffect(() => {
    setShowData(true);
  }, []);

  if (data !== undefined) {
    Object.values(data.hours).map((item) => {
      if (
        (item as unknown as { [key: string]: number })["clientesTotales"] < 1
      ) {
        clientesT += 1;
      }
      if (
        (item as unknown as { [key: string]: number })["clientesNuevos"] < 1
      ) {
        clientesN += 1;
      }
      if ((item as unknown as { [key: string]: number })["compraron"] < 1) {
        clientesC += 1;
      }
      if ((item as unknown as { [key: string]: number })["noCompraron"] < 1) {
        clientesNC += 1;
      }
    });
  }

  const filterDay = data.days.find((day) => day.name === valueToggleDay);

  return (
    <>
      {showData && data !== undefined && (
        <Box
          display={"inline-block"}
          justifyContent={"center"}
          alignContent={"center"}
          textAlign={"center"}
          marginTop={mobileCheck ? "250px" : "120px"}
          marginLeft={mobileCheck ? "50px" : ""}
        >
          <BarChart
            width={mobileCheck ? 1300 : 300}
            height={mobileCheck ? 400 : 250}
            data={
              selected.semana &&
              (selectedDay.lunes ||
                selectedDay.martes ||
                selectedDay.miercoles ||
                selectedDay.jueves ||
                selectedDay.viernes ||
                selectedDay.sabado ||
                selectedDay.domingo)
                ? [filterDay]
                : selected.semana && selectedDay.todo
                ? data.days
                : data.hours
            }
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
