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
  Bar,
  Cell,
  Legend,
  Scatter,
  ComposedChart,
  Line,
} from "recharts";
import { Spinner, Card, Container, Row, Col } from "react-bootstrap";

function Results() {
  const [allInfoStore, setAllInfoStore] = useState([]);
  const [processedData, setProcessedData] = useState([]);
  const [data, setData] = useState([]);
  const [regionArr, setRegionArr] = useState([]);
  const [painData, setPainData] = useState([]);
  const [setsReps, setSetsReps] = useState([]);

  useEffect(
    () =>
      fetch("/routines")
        .then((r) => r.json())
        .then((allInfo) => {
          // Filtering all sessions to just be the one with correct region
          const regionChosenFilter = allInfo.filter((instance) => {
            return (
              instance.muscle_group.id ===
              parseInt(localStorage.getItem("muscle_group_id"))
            );
          });
          // Invoking logic for each Chart
          graphRPE(regionChosenFilter);
          graphPain(regionChosenFilter);
          graphRegion(allInfo);
          graphRepsSets(regionChosenFilter);
        }),
    []
  );
  // Graph region PIE CHART   ********

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

  // Graph RPE AREA CHART ******
  async function graphRPE(regionChosenFilter) {
    let tempHolder = 0;
    // mapping through all sessions
    const hereBeData = regionChosenFilter.map((instance, i) => {
      // map deeper into each set stats array to get RPE avg
      instance.set_stats.map((statInstance) => {
        return (tempHolder += statInstance.RPE);
      });

      let avgRPE = tempHolder / instance.set_stats.length;
      // console.log({ avgRPE }, i + 1);
      tempHolder = 0;

      return { session: i + 1, avgRPE: avgRPE };
    });
    setData(hereBeData);
  }
  // Graph Pain Scatter Chart **************
  function graphPain(regionChosenFilter) {
    // console.log({ regionChosenFilter });
    const painArr = regionChosenFilter.map((instance, i) => {
      return { session: i + 1, pain: instance.pain };
    });
    setPainData(painArr);
  }

  // Graph Reps and Sets chart ****************************
  function graphRepsSets(regionChosenFilter) {
    console.log({ regionChosenFilter });

    let setsHolder = 0;
    let repsHolder = 0;
    // mapping through all sessions
    const hereBeCombinedStatObj = regionChosenFilter.map((instance, i) => {
      // map deeper into each set stats array to get RPE avg
      instance.set_stats.map((statInstance) => {
        setsHolder += statInstance.sets;
        repsHolder +=
          (statInstance.reps + statInstance.sets * 20) /
          (statInstance.sets + 1);
      });

      let avgRepsPerSet = repsHolder / instance.set_stats.length;
      let avgTotalSets = setsHolder / instance.set_stats.length;

      console.log({ avgRepsPerSet, avgTotalSets }, i + 1);
      repsHolder = 0;
      setsHolder = 0;

      return {
        session: i + 1,
        avgRepsPerSet: avgRepsPerSet,
        avgTotalSets: avgTotalSets,
      };
    });
    setSetsReps(hereBeCombinedStatObj);
  }

  return (
    <div className="exerciseContainer">
      Results Page
      <Container>
        <Row>
          <Col>
            <div>
              <Card>
                <ResponsiveContainer width="100%" height={400}>
                  <ComposedChart
                    width={500}
                    height={400}
                    data={painData}
                    margin={{
                      top: 20,
                      right: 20,
                      bottom: 20,
                      left: 20,
                    }}
                  >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="session" scale="band" />
                    <YAxis domain={[1, 10]} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pain" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="pain" stroke="#ff7300" />
                  </ComposedChart>
                </ResponsiveContainer>
              </Card>
            </div>
          </Col>
          <Col>
            <div>
              <Card>
                {data.length > 0 ? (
                  <ResponsiveContainer width="100%" height={400}>
                    <AreaChart data={data}>
                      <defs>
                        <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                          <stop
                            offset="0%"
                            stopColor="#2451B7"
                            stopOpacity={0.4}
                          />
                          <stop
                            offset="75%"
                            stopColor="#2451B7"
                            stopOpacity={0.05}
                          />
                        </linearGradient>
                      </defs>
                      <Area
                        dataKey="avgRPE"
                        stroke="#2451B7"
                        fill="url(#color)"
                      />
                      <XAxis dataKey="session" />
                      <YAxis dataKey="avgRPE" domain={[1, 10]} />
                      <Tooltip />
                      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                      <Legend />
                    </AreaChart>
                  </ResponsiveContainer>
                ) : (
                  <Spinner animation="border" variant="primary" />
                )}
              </Card>
            </div>
          </Col>
          <Col>
            <div>
              <Card>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart
                    width={500}
                    height={400}
                    data={setsReps}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="avgTotalSets"
                      stackId="1"
                      stroke="#8884d8"
                      fill="#8884d8"
                    />
                    <Area
                      type="monotone"
                      dataKey="avgRepsPerSet"
                      stackId="1"
                      stroke="#82ca9d"
                      fill="#82ca9d"
                    />
                    {/* <Area
              type="monotone"
              dataKey="amt"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            /> */}
                    <Legend />
                  </AreaChart>
                </ResponsiveContainer>
              </Card>
            </div>
          </Col>
        </Row>
        <div>
          <Card>
            <ResponsiveContainer width="100%" height={400}>
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
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default Results;
