import * as React from "react";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useQuery } from "react-query";
import { useGetFetcher } from "../../../hooks/useGetFetcher";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

interface Props {}

export const Pulso: React.FC<Props> = () => {
  const [showData, setShowData] = React.useState(false);
  const fetcher = useGetFetcher();

  const mobileCheck = useMediaQuery("(min-width: 600px)");

  const { data, status } = useQuery("dataPulso", () =>
    fetcher("/api/dataPulso")
  );

  React.useEffect(() => {
    setShowData(true);
  }, []);
  return (
    <>
      {showData && status === "success" && (
        <Box
          display={"inline-block"}
          marginTop={mobileCheck ? "250px" : "120px"}
          marginLeft={mobileCheck ? "50px" : "20px"}
        >
          {/* <ResponsiveContainer> */}
          <ComposedChart
            width={1300}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Dia1" barSize={20} fill="#2DCF5A" />
            <Bar dataKey="Dia10" barSize={20} fill="#358DEB" />
            <Bar dataKey="Dia20" barSize={20} fill="#EB7635" />
            <Line type="monotone" dataKey="Dia20" stroke="#ff7300" />
          </ComposedChart>

          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            marginTop={mobileCheck ? "5px" : "20px"}
            marginLeft={mobileCheck ? "600px" : ""}
          >
            <FileDownloadIcon sx={{ color: "#644BBA" }} />
            <Typography sx={{ color: "#644BBA" }}>Exportar tabla</Typography>
          </Box>
        </Box>
      )}
    </>
  );
};
