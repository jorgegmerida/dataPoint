import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import * as React from "react";
import { arrayCustomersColumns } from "../../../utils/constanst";

interface Props {
  data: any;
}

export const CustomersTable: React.FC<Props> = ({ data }) => {
  let acumulateArrayCustomers: any = [];
  data.Column1?.map((itemCol1: any, indexColumn1: number) => {
    return data.Column2?.map((itemCol2: any, indexColumn2: number) => {
      return data.Column3?.map((itemCol3: any, indexColumn3: number) => {
        if (indexColumn1 === indexColumn2 && indexColumn2 === indexColumn3) {
          const acumulate =
            itemCol1["Clientes nuevos"] +
            itemCol2["Clientes nuevos"] +
            itemCol3["Clientes nuevos"];
          return acumulateArrayCustomers.push(acumulate);
        }
      });
    });
  });

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      marginLeft={"20px"}
      marginTop={"40px"}
      width={"auto"}
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
              gap={9}
            >
              {arrayCustomersColumns.map((titles) => {
                return (
                  <Box display={"flex"}>
                    <Typography>{titles}</Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
          <br></br>
          <Box display={"flex"} gap={16} marginLeft={"16px"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"left"}
              textAlign={"left"}
            >
              {data.Column1?.map((item: any) => {
                return (
                  <Box>
                    {item["Clientes nuevos"]}
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
              {data.Column2?.map((item: any) => {
                return (
                  <Box>
                    {item["Clientes nuevos"]}
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
              {data.Column3?.map((item: any) => {
                return (
                  <Box>
                    {item["Clientes nuevos"]}
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
              marginRight={"16px"}
            >
              {acumulateArrayCustomers.map((item: any) => {
                return (
                  <Box>
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
