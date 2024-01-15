import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  useMediaQuery,
} from "@mui/material";
import * as React from "react";
import { arrayCashbackColumns } from "../../../utils/constanst";
import { ICashbackDataColumn, ICushback } from "../../models";

interface Props {
  data: ICushback;
}

export const CashbackTable: React.FC<Props> = ({ data }) => {
  const mobileCheck = useMediaQuery("(min-width: 600px)");

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      marginTop={"40px"}
      marginLeft={"20px"}
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
          title={"Cashback"}
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
              {arrayCashbackColumns.map((titles, index: number) => {
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
              {data.column1?.map((item: ICashbackDataColumn, index: number) => {
                return (
                  <Box key={index}>
                    {item.cashback}
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
              {data.column2?.map((item: ICashbackDataColumn, index: number) => {
                return (
                  <Box key={index}>
                    {item.cashback}
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
