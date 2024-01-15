import * as React from "react";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Box, useMediaQuery } from "@mui/material";
import { useQuery } from "react-query";
import { useGetFetcher } from "../../../hooks/useGetFetcher";

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
          <ComposedChart
            width={mobileCheck ? 1300 : 300}
            height={mobileCheck ? 400 : 200}
            data={data}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Area
              type="monotone"
              dataKey="amt"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          </ComposedChart>
        </Box>
      )}
    </>
  );
};
