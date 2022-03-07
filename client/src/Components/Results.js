import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
  Cell,
} from "recharts";
import { Spinner } from "react-bootstrap";

function Results() {
  const [allInfoStore, setAllInfoStore] = useState([]);
  const [processedData, setProcessedData] = useState([]);
  const [data, setData] = useState([]);
  let dataObj = [];
  const [regionArr, setRegionArr] = useState([]);

  useEffect(
    () =>
      fetch("/routines")
        .then((r) => r.json())
        .then((allInfo) => {
          graphRPE(allInfo);
          graphRegion(allInfo);
          console.log({ allInfo });
        }),
    []
  );

  function graphRegion(allInfo) {
    const neck = allInfo.filter((instance) => {
      return instance.muscle_group.region === "neck";
    });
    const back = allInfo.filter((instance) => {
      return instance.muscle_group.region === "back";
    });
    const shoulder = allInfo.filter((instance) => {
      return instance.muscle_group.region === "shoulder";
    });
    const knee = allInfo.filter((instance) => {
      return instance.muscle_group.region === "knee";
    });
    console.log("neck", neck, "b", back, "s", shoulder, "k", knee.length);
    setRegionArr([
      { region: "Neck", sessions: neck.length },
      { region: "Back", sessions: back.length },
      { region: "Shoulder", sessions: shoulder.length },
      { region: "Knee", sessions: knee.length },
    ]);
  }

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  function graphRPE(allInfo) {
    // Filtering all sessions to just be the one with correct region
    const regionChosenFilter = allInfo.filter((instance) => {
      return (
        instance.muscle_group.id ===
        parseInt(localStorage.getItem("muscle_group_id"))
      );
    });

    console.log({ regionChosenFilter });

    let tempHolder = 0;
    // mapping through all sessions
    regionChosenFilter.map((instance, i) => {
      // map deeper into each set stats array to get RPE avg
      instance.set_stats.map((statInstance) => {
        return (tempHolder += statInstance.RPE);
      });

      let avgRPE = tempHolder / instance.set_stats.length;
      console.log({ avgRPE }, i + 1);

      // setData([...data,{session: i + 1, avgRPE: avgRPE }])
      dataObj.push({ session: i + 1, avgRPE: avgRPE });

      console.log(dataObj);
      tempHolder = 0;
      // setProcessedData([...processedData,data])

      setData(...data, dataObj);
    });
  }
  // old
  // new
  return (
    <div>
      Results Page
      <div>
        {data.length > 0 ? (
          <ResponsiveContainer width="75%" height={400}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
                  <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <Area dataKey="avgRPE" stroke="#2451B7" fill="url(#color)" />
              <XAxis dataKey="session" />
              <YAxis dataKey="avgRPE" />
              <Tooltip />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </div>
      <div>
        <ResponsiveContainer width={400} height={400}>
          <PieChart width={400} height={400}>
            <Pie
              data={regionArr}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="sessions"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Results;
