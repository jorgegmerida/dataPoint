import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  useMediaQuery,
} from "@mui/material";
import * as React from "react";
import { arrayCustomersColumns } from "../../../utils/constanst";
import { ICustomer, ICustomerData } from "../../models";

interface Props {
  data: ICustomerData;
}

export const CustomersTable: React.FC<Props> = ({ data }) => {
  const mobileCheck = useMediaQuery("(min-width: 600px)");

  const acumulateArrayCustomers: number[] = [];
  data.Column1?.map((itemCol1: ICustomer, indexColumn1: number) => {
    return data.Column2?.map((itemCol2: ICustomer, indexColumn2: number) => {
      return data.Column3?.map((itemCol3: ICustomer, indexColumn3: number) => {
        if (indexColumn1 === indexColumn2 && indexColumn2 === indexColumn3) {
          const acumulate =
            itemCol1["clientesNuevos"] +
            itemCol2["clientesNuevos"] +
            itemCol3["clientesNuevos"];
          return acumulateArrayCustomers.push(acumulate);
        }
      });
    });
  });

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      marginLeft={mobileCheck ? "20px" : "-80px"}
      marginTop={"40px"}
      width={mobileCheck ? "auto" : "330px"}
    >
      <Card
        sx={{
          display: "flex",
          width: "auto",
          padding: "15px",
          flexDirection: "column",
          alignItems: "center",
          alignSelf: "stretch",
          borderradius: "10px",
          background: "#E6E1E6",
        }}
      >
        <CardHeader
          title={"Clientes"}
          sx={{
            textAlign: "center",
            color: "#000",
            fontFamily: "Roboto",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 100,
            lineHeight: "24px",
          }}
        />
        <CardContent>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            textAlign={"center"}
          >
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              textAlign={"center"}
              gap={mobileCheck ? 8.5 : 1.5}
            >
              {arrayCustomersColumns.map((titles, index: number) => {
                return (
                  <Box display={"flex"} key={index}>
                    <Typography>{titles}</Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
          <br></br>
          <Box
            display={"flex"}
            gap={mobileCheck ? 14 : 7.5}
            marginLeft={"26px"}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"left"}
              textAlign={"left"}
            >
              {data.Column1?.map((item: ICustomer, index: number) => {
                return (
                  <Box key={index}>
                    {item["clientesNuevos"]}
                    <br></br>
                    <br></br>
                  </Box>
                );
              })}
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"left"}
              textAlign={"left"}
            >
              {data.Column2?.map((item: ICustomer, index: number) => {
                return (
                  <Box key={index}>
                    {item["clientesNuevos"]}
                    <br></br>
                    <br></br>
                  </Box>
                );
              })}
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"left"}
              textAlign={"left"}
            >
              {data.Column3?.map((item: ICustomer, index: number) => {
                return (
                  <Box key={index}>
                    {item["clientesNuevos"]}
                    <br></br>
                    <br></br>
                  </Box>
                );
              })}
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              textAlign={"center"}
            >
              {acumulateArrayCustomers.map((item, index: number) => {
                return (
                  <Box key={index}>
                    {item}
                    <br></br>
                    <br></br>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
