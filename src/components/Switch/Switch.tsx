import * as React from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import StarsIcon from "@mui/icons-material/Stars";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import { Box, Button } from "@mui/material";
import styles from "./Switch.module.scss";
import { SwitchOptions } from "../../utils/constanst";
import { useSelectDashboards } from "../../stores/useSelectDashboards";

interface Props {}

export const Switch: React.FC<Props> = () => {
  const [activeOption, setActiveOption] = React.useState<SwitchOptions>(
    SwitchOptions.OPTION1
  );

  const { Dashboards, setDashboard } = useSelectDashboards();

  const handleSwitchClick = (option: SwitchOptions) => {
    setActiveOption(option);
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
      <Box className={styles.SwitchContainer}>
        <Button
          onClick={() => {
            setDashboard({ ...Dashboards, Customers: true, Pulso: false });
          }}
        >
          <Box
            className={styles.ToggleItem}
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
          }}
        >
          <Box
            className={styles.ToggleItem}
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
