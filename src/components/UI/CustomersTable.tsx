import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import * as React from "react";
import { arrayCustomersColumns } from "../../../utils/constanst";

interface Props {
  data: any;
}

export const CustomersTable: React.FC<Props> = ({ data }) => {
  let acumulateCustomers1: number = 0;
  let acumulateCustomers2: number = 0;
  let acumulateCustomers3: number = 0;
  let acumulateCustomers4: number = 0;
  let acumulateCustomers5: number = 0;
  let acumulateCustomers6: number = 0;
  let acumulateCustomers7: number = 0;
  data.hours.slice(0, 3).map((item: any) => {
    acumulateCustomers1 += item["Clientes nuevos"];
  });

  data.hours.slice(3, 6).map((item: any) => {
    acumulateCustomers2 += item["Clientes nuevos"];
  });

  data.hours.slice(6, 9).map((item: any) => {
    acumulateCustomers3 += item["Clientes nuevos"];
  });

  data.hours.slice(9, 12).map((item: any) => {
    acumulateCustomers4 += item["Clientes nuevos"];
  });
  data.hours.slice(12, 15).map((item: any) => {
    acumulateCustomers5 += item["Clientes nuevos"];
  });
  data.hours.slice(15, 18).map((item: any) => {
    acumulateCustomers6 += item["Clientes nuevos"];
  });
  data.hours.slice(18, 21).map((item: any) => {
    acumulateCustomers7 += item["Clientes nuevos"];
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
            flexDirection={"column"}
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
            <br></br>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              textAlign={"center"}
              paddingRight={"120px"}
            >
              {data.hours.slice(0, 3).map((item: any) => {
                return (
                  <>
                    <Box marginLeft={"10px"}>{item["Clientes nuevos"]}</Box>
                  </>
                );
              })}
            </Box>
            <br></br>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              textAlign={"center"}
              paddingRight={"120px"}
            >
              {data.hours.slice(3, 6).map((item: any) => {
                return (
                  <>
                    <Box marginLeft={"10px"}>{item["Clientes nuevos"]}</Box>
                  </>
                );
              })}
            </Box>
            <br></br>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              textAlign={"center"}
              paddingRight={"120px"}
            >
              {data.hours.slice(6, 9).map((item: any) => {
                return (
                  <>
                    <Box marginLeft={"10px"}>{item["Clientes nuevos"]}</Box>
                  </>
                );
              })}
            </Box>
            <br></br>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              textAlign={"center"}
              paddingRight={"120px"}
            >
              {data.hours.slice(9, 12).map((item: any) => {
                return (
                  <>
                    <Box marginLeft={"10px"}>{item["Clientes nuevos"]}</Box>
                  </>
                );
              })}
            </Box>
            <br></br>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              textAlign={"center"}
              paddingRight={"120px"}
            >
              {data.hours.slice(12, 15).map((item: any) => {
                return (
                  <>
                    <Box marginLeft={"10px"}>{item["Clientes nuevos"]}</Box>
                  </>
                );
              })}
            </Box>
            <br></br>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              textAlign={"center"}
              paddingRight={"120px"}
            >
              {data.hours.slice(15, 18).map((item: any) => {
                return (
                  <>
                    <Box marginLeft={"10px"}>{item["Clientes nuevos"]}</Box>
                  </>
                );
              })}
            </Box>
            <br></br>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              textAlign={"center"}
              paddingRight={"120px"}
            >
              {data.hours.slice(18, 21).map((item: any) => {
                return (
                  <>
                    <Box marginLeft={"10px"}>{item["Clientes nuevos"]}</Box>
                  </>
                );
              })}
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              textAlign={"center"}
              marginTop={"-315px"}
              marginLeft={"420px"}
              gap={3}
            >
              <>
                <Box marginLeft={"10px"}>
                  {acumulateCustomers1}
                  <br></br>
                  <br></br>
                  {acumulateCustomers2}
                  <br></br>
                  <br></br>
                  {acumulateCustomers3}
                  <br></br>
                  <br></br>
                  {acumulateCustomers4}
                  <br></br>
                  <br></br>
                  {acumulateCustomers5}
                  <br></br>
                  <br></br>
                  {acumulateCustomers6}
                  <br></br>
                  <br></br>
                  {acumulateCustomers7}
                </Box>
              </>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
