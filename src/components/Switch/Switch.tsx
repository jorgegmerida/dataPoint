import * as React from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import StarsIcon from "@mui/icons-material/Stars";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import { Box, Button } from "@mui/material";
import { SwitchOptions } from "../../../utils/constanst";
import { useSelectDashboards } from "../../stores/useSelectDashboards";
import { evInteraction } from "../../models";
import { useWindowDataLayer } from "../../../utils/useWindowDataLayer";

interface Props {}

export const Switch: React.FC<Props> = () => {
  const windowDataLayer = useWindowDataLayer();
  const { Dashboards, setDashboard } = useSelectDashboards();

  const [activeOption, setActiveOption] = React.useState<SwitchOptions>(
    SwitchOptions.OPTION1
  );

  const handleSwitchClick = (option: SwitchOptions) => {
    setActiveOption(option);
  };

  const dataLayer1: evInteraction = {
    event: "evInteraction",
    category: "button",
    action: "click",
    label: "Gráfico|Pulso",
    value: "no_aplica",
    component: "no_aplica",
    description: "no_aplica",
    result: "no_aplica",
    destination: "no_aplica",
  };

  React.useEffect(() => {
    if (Dashboards.Customers) {
      setActiveOption(SwitchOptions.OPTION1);
    } else {
      setActiveOption(SwitchOptions.OPTION2);
    }
  }, [Dashboards]);

  return (
    <Stack direction="row" spacing={2}>
      <Box
        sx={{
          display: "flex",
          borderRadius: "50px",
          border: "1.5px solid #644BBA",
          justifyContent: "center",
          alignItems: "center",
          width: "250px",
          height: "max-content",
          padding: "1px 1px",
        }}
      >
        <Button
          onClick={() => {
            setDashboard({ ...Dashboards, Customers: true, Pulso: false });
            windowDataLayer({ ...dataLayer1, label: "Gráfico" });
          }}
        >
          <Box
            sx={{
              height: "30px",
              width: "150px",
              display: "flex",
              borderRadius: "35px",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            style={{
              backgroundColor:
                activeOption === SwitchOptions.OPTION1 || Dashboards.Customers
                  ? "#644BBA"
                  : "transparent",
            }}
            onClick={() => handleSwitchClick(SwitchOptions.OPTION1)}
          >
            <Box
              display={"flex"}
              flexDirection={"row"}
              sx={{
                color:
                  activeOption === SwitchOptions.OPTION1 || Dashboards.Customers
                    ? "#FFF"
                    : "#644BBA",
              }}
            >
              <BarChartIcon />
              <Typography
                sx={{
                  fontSize: "14px",
                  textAlign: "center",
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "22px" /* 157.143% */,
                  letterSpacing: " 0.5px",
                  color:
                    activeOption === SwitchOptions.OPTION1 ||
                    Dashboards.Customers
                      ? "#FFF"
                      : "#644BBA",
                  marginLeft: "6px",
                  marginTop: "4px",
                }}
              >
                Gráfico
              </Typography>
            </Box>
          </Box>
        </Button>
        <Button
          onClick={() => {
            setDashboard({ ...Dashboards, Customers: false, Pulso: true });
            windowDataLayer({ ...dataLayer1, label: "Pulso" });
          }}
        >
          <Box
            sx={{
              height: "30px",
              width: "150px",
              display: "flex",
              borderRadius: "35px",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            style={{
              backgroundColor:
                activeOption === SwitchOptions.OPTION2 || Dashboards.Pulso
                  ? "#644BBA"
                  : "transparent",
            }}
            onClick={() => handleSwitchClick(SwitchOptions.OPTION2)}
          >
            <Box
              display={"flex"}
              flexDirection={"row"}
              sx={{
                color:
                  activeOption === SwitchOptions.OPTION2 || Dashboards.Pulso
                    ? "#FFF"
                    : "#644BBA",
              }}
            >
              <StarsIcon />
              <Typography
                sx={{
                  fontSize: "14px",
                  textAlign: "center",
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "22px" /* 157.143% */,
                  letterSpacing: " 0.5px",
                  color:
                    activeOption === SwitchOptions.OPTION2 || Dashboards.Pulso
                      ? "#FFF"
                      : "#644BBA",
                  marginLeft: "6px",
                  marginTop: "4px",
                }}
              >
                Pulso
              </Typography>
            </Box>
          </Box>
        </Button>
      </Box>
    </Stack>
  );
};
