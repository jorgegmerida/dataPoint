import * as React from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import StarsIcon from "@mui/icons-material/Stars";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import { Box } from "@mui/material";
import styles from "./Switch.module.scss";
import { SwitchOptions } from "../../utils/constanst";

interface Props {}

export const Switch: React.FC<Props> = () => {
  const [activeOption, setActiveOption] = React.useState<SwitchOptions>(
    SwitchOptions.OPTION1
  );

  const handleSwitchClick = (option: SwitchOptions) => {
    setActiveOption(option);
  };

  return (
    <Stack direction="row" spacing={2}>
      <Box className={styles.SwitchContainer}>
        <Box
          className={styles.ToggleItem}
          style={{
            backgroundColor:
              activeOption === SwitchOptions.OPTION1
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
                activeOption === SwitchOptions.OPTION1 ? "#FFF" : "#644BBA",
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
                  activeOption === SwitchOptions.OPTION1 ? "#FFF" : "#644BBA",
                marginLeft: "6px",
                marginTop: "4px",
              }}
            >
              Gráfico
            </Typography>
          </Box>
        </Box>
        <Box
          className={styles.ToggleItem}
          style={{
            backgroundColor:
              activeOption === SwitchOptions.OPTION2
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
                activeOption === SwitchOptions.OPTION2 ? "#FFF" : "#644BBA",
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
                  activeOption === SwitchOptions.OPTION2 ? "#FFF" : "#644BBA",
                marginLeft: "6px",
                marginTop: "4px",
              }}
            >
              Pulso
            </Typography>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};
