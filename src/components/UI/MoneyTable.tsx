import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  useMediaQuery,
} from "@mui/material";
import * as React from "react";
import { arrayMoneyColumns } from "../../../utils/constanst";
import { IMoneyColumn, IMoneyData } from "../../models";

interface Props {
  data: IMoneyData;
}

export const MoneyTable: React.FC<Props> = ({ data }) => {
  const mobileCheck = useMediaQuery("(min-width: 600px)");

  const acumulateArrayMoney: number[] = [];
  data.column1?.map((itemCol1: IMoneyColumn, indexColumn1: number) => {
    return data.column2?.map((itemCol2: IMoneyColumn, indexColumn2: number) => {
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
      marginLeft={mobileCheck ? "20px" : "-80px"}
      marginTop={"40px"}
      width={mobileCheck ? "auto" : "330px"}
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
              {arrayMoneyColumns.map((titles, index: number) => {
                return (
                  <Box display={"flex"} key={index}>
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
              {data.column1?.map((item: IMoneyColumn, index: number) => {
                return (
                  <Box key={index}>
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
              {data.column2?.map((item: IMoneyColumn, index: number) => {
                return (
                  <Box key={index}>
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
              {acumulateArrayMoney?.map((item, index) => {
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
