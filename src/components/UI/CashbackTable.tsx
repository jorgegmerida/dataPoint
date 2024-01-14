import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import * as React from "react";

interface Props {
  data: any;
}

export const CashbackTable: React.FC<Props> = ({ data }) => {
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
            flexDirection={"column"}
            justifyContent={"center"}
            textAlign={"center"}
          >
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              textAlign={"center"}
            >
              {data.slice(0, 4).map((item: any) => {
                return (
                  <>
                    <Box>{item}</Box>
                  </>
                );
              })}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
