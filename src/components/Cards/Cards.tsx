import * as React from "react";
import {
  Box,
  CardHeader,
  Collapse,
  IconButton,
  IconButtonProps,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import { Switch } from "../Switch";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useQuery } from "react-query";
import { useGetFetcher } from "../../hooks/useGetFetcher";
import { IDataPerMonths } from "../../models";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
const ExpandMore = styled((props: ExpandMoreProps) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const Cards: React.FC = () => {
  const fetcher = useGetFetcher();

  const mobileCheck = useMediaQuery("(max-width: 600px)");

  const { data } = useQuery("dataPerMonths", () =>
    fetcher("/api/dataPerMonths")
  );

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
      justifyItems={"center"}
    >
      <Box display={"flex"} flexDirection={"row"}>
        <Box
          marginRight={mobileCheck ? "80px" : "60px"}
          marginTop={mobileCheck ? "150px" : ""}
        >
          <Switch />
        </Box>
        {!mobileCheck && (
          <Box sx={{ marginRight: "20px" }}>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon
                sx={{ width: " 24px", height: "24px", color: "#000000" }}
              />
            </ExpandMore>
          </Box>
        )}
      </Box>

      <Collapse
        in={expanded}
        timeout="auto"
        unmountOnExit
        sx={{ marginTop: "20px" }}
      >
        {data !== undefined &&
          data.map((item: IDataPerMonths, index: number) => {
            return (
              <Box key={index}>
                <Card sx={{ width: 345 }} key={index}>
                  <CardHeader
                    title={item.title}
                    sx={{
                      textAlign: "center",
                      color: "#000",
                      fontFamily: "Roboto",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "24px",
                    }}
                  />
                  <CardContent>
                    <Box display={"flex"} flexDirection={"column"}>
                      <Box
                        display={"flex"}
                        flexDirection={"row"}
                        justifyContent={"space-between"}
                      >
                        <Typography color="text.secondary">
                          {item.subtilte1}
                        </Typography>
                        <Typography color="text.secondary">
                          {item.subtilte11}
                        </Typography>
                      </Box>
                      <Box
                        display={"flex"}
                        flexDirection={"row"}
                        justifyContent={"space-between"}
                      >
                        <Typography color="text.secondary">
                          {item.subtilte2}
                        </Typography>
                        <Typography color="text.secondary">
                          {item.subtilte22}
                        </Typography>
                      </Box>
                      <Box
                        display={"flex"}
                        flexDirection={"row"}
                        justifyContent={"space-between"}
                      >
                        <Typography color="text.secondary">
                          {item.subtilte3}
                        </Typography>
                        <Typography color="text.secondary">
                          {item.subtilte33}
                        </Typography>
                      </Box>
                      <Box
                        display={"flex"}
                        flexDirection={"row"}
                        justifyContent={"space-between"}
                      >
                        <Typography
                          sx={{
                            color: "#000",
                            fontFamily: "Roboto",
                            fontSize: "16px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "24px",
                          }}
                        >
                          {item.subtilte4}
                        </Typography>
                      </Box>
                      <Box
                        display={"flex"}
                        flexDirection={"row"}
                        justifyContent={"space-between"}
                      >
                        <Typography color="text.secondary">
                          {item.subtilte44}
                        </Typography>
                        <Typography color="text.secondary">
                          {item.subtilte441}
                        </Typography>
                      </Box>
                      <Box
                        display={"flex"}
                        flexDirection={"row"}
                        justifyContent={"space-between"}
                      >
                        <Typography color="text.secondary">
                          {item.subtilte444}
                        </Typography>
                        <Typography color="text.secondary">
                          {item.subtilte4441}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
                <br></br>
              </Box>
            );
          })}
      </Collapse>
    </Box>
  );
};
