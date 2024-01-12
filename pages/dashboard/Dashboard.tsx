import * as React from "react";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
// import { DataRibbon } from "../../src/components/Dashboard/DataRibbon/DataRibbon";
// import { TransactionsPerDay } from "../../src/components/Dashboard/TransactionsPerDay/TransactionsPerDay";
import { LineChart } from "@mui/x-charts";
import { Box, Button } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface Props {}

const Dashboard: React.FC<Props> = () => {
  // const [showData, setShowData] = React.useState(true);

  const { isReady } = useRouter();

  // React.useEffect(() => {
  //   setShowData(true);
  // }, []);
  return (
    <Box display={"flex"}>
      <Grid>
        <Box display={"flex"}>
          <Button>HOY</Button>
          <Button>7D</Button>
          <Button>Este Mes</Button>
          <Button>6M</Button>
          <Button>YTD/YTG</Button>
          <Button>1A</Button>
          <Button>MÁX</Button>
        </Box>
        <br></br>
      </Grid>
    </Box>
  );
  // if (isReady) {
  //   return (
  //     <>
  //       (
  //       <Grid>
  //         <br>ssss</br>
  //       </Grid>
  //       )
  //     </>
  //   );
  // } else {
  //   return <></>;
  // }
};

export default Dashboard;
