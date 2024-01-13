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
import { dataPulso } from "../../../../utils/constanst";
import { Box } from "@mui/material";

interface Props {}

export const Pulso: React.FC<Props> = () => {
  const [showData, setShowData] = React.useState(false);

  React.useEffect(() => {
    setShowData(true);
  }, []);
  return (
    <>
      {showData && (
        <Box display={"inline-block"} marginTop={"250px"} marginLeft={"50px"}>
          <ComposedChart width={1300} height={400} data={dataPulso}>
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
