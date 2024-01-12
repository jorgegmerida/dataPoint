import * as React from "react";
import {
  Box,
  CardHeader,
  Collapse,
  IconButton,
  IconButtonProps,
  Typography,
  styled,
} from "@mui/material";
import { SwitchOptions } from "../../utils/constanst";
import { Switch } from "../Switch";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const Cards: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"right"}
      alignContent={"flex-end"}
      alignItems={"flex-end"}
      textAlign={"right"}
      justifyItems={"right"}
      marginRight={"180px"}
      marginTop={"-50px"}
    >
      <Box display={"flex"} flexDirection={"row"}>
        <Box marginRight={"60px"}>
          <Switch />
        </Box>
        <Box>
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
      </Box>

      <Collapse
        in={expanded}
        timeout="auto"
        unmountOnExit
        sx={{ marginTop: "20px" }}
      >
        <Card sx={{ width: 345 }}>
          <CardHeader
            title="Noviembre"
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
                <Typography color="text.secondary">Clientes</Typography>
                <Typography color="text.secondary">81.420</Typography>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"space-between"}
              >
                <Typography color="text.secondary">Ventas Totales</Typography>
                <Typography color="text.secondary">81.420</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Collapse>
    </Box>
  );
};
