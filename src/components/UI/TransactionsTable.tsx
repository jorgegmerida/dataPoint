import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  useMediaQuery,
} from "@mui/material";
import * as React from "react";
import { ITransactionColumn, ITransactionData } from "../../models";

interface Props {
  data: ITransactionData;
}

export const TransactionTable: React.FC<Props> = ({ data }) => {
  const mobileCheck = useMediaQuery("(min-width: 600px)");

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      marginLeft={mobileCheck ? "20px" : "-80px"}
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
          title={"Transacciones"}
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
            <Typography>Total</Typography>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              marginTop={"20px"}
            >
              {data.days.map((item: ITransactionColumn) => {
                return (
                  <>
                    <Typography>{item.transaccion}</Typography>
                    <br></br>
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
