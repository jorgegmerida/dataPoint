import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import * as React from "react";
import { arrayMoneyColumns } from "../../../utils/constanst";

interface Props {
  data: any;
}

export const MoneyTable: React.FC<Props> = ({ data }) => {
  let acumulateArrayMoney: any = [];
  data.column1?.map((itemCol1: any, indexColumn1: number) => {
    return data.column2?.map((itemCol2: any, indexColumn2: number) => {
      if (indexColumn1 === indexColumn2) {
        const acumulate = itemCol1.dinero + itemCol2.dinero;
        return acumulateArrayMoney.push(acumulate);
      }
    });
  });

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      marginLeft={"20px"}
      marginTop={"40px"}
    >
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
          title={"Dinero"}
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
              {arrayMoneyColumns.map((titles) => {
                return (
                  <Box display={"flex"}>
                    <Typography>{titles}</Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box display={"flex"} gap={14} marginLeft={"14px"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"left"}
              textAlign={"left"}
              marginTop={"14px"}
            >
              {data.column1?.map((item: any) => {
                return (
                  <Box>
                    {item.dinero}
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
              marginTop={"14px"}
            >
              {data.column2?.map((item: any) => {
                return (
                  <Box>
                    {item.dinero}
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
              marginTop={"14px"}
            >
              {acumulateArrayMoney?.map((item: any) => {
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
