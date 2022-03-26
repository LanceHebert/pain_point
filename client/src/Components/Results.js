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
  // Pie,
  Bar,
  Cell,
  Legend,
  ComposedChart,
  Line,
} from "recharts";
import { Spinner, Card, Container, Row, Col } from "react-bootstrap";
import {
  VictoryPie,
  VictoryContainer,
  VictoryLegend,
  VictoryTooltip,
} from "victory";

function Results() {
  const [allInfoStore, setAllInfoStore] = useState([]);
  const [data, setData] = useState([]);
  const [regionArr, setRegionArr] = useState([]);
  const [painData, setPainData] = useState([]);
  const [setsReps, setSetsReps] = useState([]);

  useEffect(
    () =>
      fetch("/routines")
        .then((r) => r.json())
        .then((allInfo) => {
          console.log({allInfo});
          setAllInfoStore(allInfo);
          // Filtering all sessions to just be the one with correct region
          const regionChosenFilter = allInfo.filter((instance) => {
            return (
              instance.muscle_group.id ===
              parseInt(localStorage.getItem("muscle_group_id"))
            );
          });
          // Invoking logic for each Chart
          localStorage.setItem("initialPain", regionChosenFilter[0].pain);

          graphRPE(regionChosenFilter);
          graphPain(regionChosenFilter);
          graphRegion(allInfo);
          graphRepsSets(regionChosenFilter);

          checkResult(regionChosenFilter);
          calcAvgExercise(allInfo);
          reverseDate();
        }),
    []
  );

  // Adjusting date format to be more readable
 function reverseDate() {
    if (allInfoStore.length > 1 && allInfoStore[allInfoStore.length - 1].date !== null ) {
      const splitDate = allInfoStore[allInfoStore.length - 1].date.split("-");
      const newDate = splitDate[1] + "-" + splitDate[2] + "-" + splitDate[0];
      return newDate;
    }
  }

  function calcAvgExercise() {
    let tempHolder = 0;
    // mapping through all sessions
    if (allInfoStore.length > 1) {
      allInfoStore.map((session, i) => {
        tempHolder += session.exercises.length;
      });
      return (tempHolder / allInfoStore.length).toFixed(2);
    }
  }
  // Checking the difference between initial pain and current selected pain
  function checkResult() {
    if (allInfoStore.length > 0) {
      return (
        ((allInfoStore[allInfoStore.length - 1].pain -
          parseInt(localStorage.getItem("initialPain"))) /
          parseInt(localStorage.getItem("initialPain"))) *
        100
      ).toFixed(2);
    } else {
      return <Spinner animation="border" variant="primary" />;
    }
  }

  // Graph region PIE CHART   ********
  // Setting data for pie chart to equal each region
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
    // Ternary Logic for showing blank session to prevent text overlapping for empty session edgecase
    setRegionArr([
      neck.length > 0
        ? {
            region: "Neck",
            sessions: neck.length,
            label: `Neck: ${neck.length}`,
          }
        : { region: " ", sessions: 0, label: `` },
      shoulder.length > 0
        ? {
            region: "Shoulder",
            sessions: shoulder.length,
            label: `Shoulder: ${shoulder.length}`,
          }
        : { region: " ", sessions: 0, label: `` },
      back.length > 0
        ? {
            region: "Back",
            sessions: back.length,
            label: `Back: ${back.length}`,
          }
        : { region: " ", sessions: 0, label: `` },
      knee.length > 0
        ? {
            region: "Knee",
            sessions: knee.length,
            label: `Knee: ${knee.length}`,
          }
        : { region: " ", sessions: 0, label: `` },
    ]);
  }

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

      tempHolder = 0;

      return { session: i + 1, avgRPE: avgRPE };
    });
    setData(hereBeData);
  }
  // Graph Pain Scatter Chart **************
  function graphPain(regionChosenFilter) {
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
      <Container>
        <Row className="pt-5">
          <Col lg={6} className="">
            <Card>
              <h2 className="card-title">Regions Trained </h2>
            </Card>
            <Card>
              {regionArr.length > 0 ? (
                <>
                  <VictoryLegend
                    x={75}
                    y={100}
                    height={170}
                    title="Sessions Per Region"
                    centerTitle
                    orientation="horizontal"
                    gutter={20}
                    style={{
                      border: { stroke: "black" },
                      title: { fontSize: 20 },
                    }}
                    data={[
                      { name: "Neck", symbol: { fill: "tomato" } },
                      { name: "Shoulder", symbol: { fill: "green" } },
                      { name: "Back", symbol: { fill: "gold" } },
                      { name: "Knee", symbol: { fill: "blue" } },
                    ]}
                  />
                  <VictoryPie
                    // labelComponent={<VictoryTooltip data={regionArr.sessions}/>}
                    data={regionArr}
                    x={"region"}
                    y={"sessions"}
                    style={{ labels: { fontSize: 10, fill: "black" } }}
                    height={300}
                    containerComponent={<VictoryContainer responsive={true} />}
                    colorScale={["tomato", "green", "gold", "blue", "navy"]}
                  />
                </>
              ) : (
                <Spinner animation="border" variant="primary" />
              )}
            </Card>
          </Col>
          <Col>
            <Col>
              <Card className="mb-3 me-3 ms-3 p-2 ">
                <h2 className="card-title">
                  {" "}
                  {allInfoStore.length > 0 ? (
                    reverseDate()
                  ) : (
                    // null
                    <Spinner animation="border" variant="primary" />
                  )}
                </h2>
                <h3>Region Selected: {localStorage.getItem("region")}</h3>
              </Card>
            </Col>
            <Col>
              <Card className="m-3 p-2">
                <h3>
                  Initial Pain Level:{"  "}
                  {parseInt(localStorage.getItem("initialPain"))}
                </h3>

                {allInfoStore.length > 0 ? (
                  <h3>
                    Current Pain Level:
                    {allInfoStore[allInfoStore.length - 1].pain}
                  </h3>
                ) : (
                  <Spinner animation="border" variant="primary" />
                )}
                <br />

                {checkResult() > 1 ? (
                  <h3 className="badResult">
                    {checkResult()} % increase in pain
                  </h3>
                ) : (
                  <>
                    <h3 className="goodResult">
                      <i className="fas fa-thumbs-up icon-format"></i>
                      {checkResult()}% decrease in pain
                    </h3>
                  </>
                )}
              </Card>
            </Col>
            <Col>
              <Card className="m-3 p-2">
                <h3>
                  {allInfoStore.length > 0 ? (
                    allInfoStore.length
                  ) : (
                    <Spinner animation="border" variant="primary" />
                  )}{" "}
                  Total Sessions{" "}
                </h3>
                <h3>Average Exercises per Session: {calcAvgExercise()}</h3>
              </Card>
            </Col>
          </Col>
        </Row>

        <Row sm={12} md={12} className="pt-4 pb-3">
          <h2 className="card-title">
            Session Stats
            <hr />
          </h2>
          <Col className="p-1">
            <Card>
              <h2 className="card-title">Pain Level </h2>
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
                  <XAxis
                    dataKey="session"
                    scale="band"
                   
                    
                  />
                  <YAxis
                    domain={[1, 10]}
                    label={{
                      value: "Pain Level",
                      angle: -90,
                      position: "insideLeft",
                    }}
                  />
                  <Tooltip labelFormatter={() => ``} />
                  <Legend />
                  <Bar dataKey="pain" barSize={20} fill="#413ea0" />
                  <Line type="monotone" dataKey="pain" stroke="#ff7300" />
                </ComposedChart>
              </ResponsiveContainer>
            </Card>
          </Col>
          <Col className="p-1">
            <Card>
              <h2 className="card-title">RPE Average </h2>
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
                    <YAxis dataKey="avgRPE" domain={[1, 10]} label={{
                      value: "RPE",
                      angle: -90,
                      position: "insideLeft",
                    }} />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Legend />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                <Spinner animation="border" variant="primary" />
              )}
            </Card>
          </Col>
          <Col className="p-1">
            <Card>
              <h2 className="card-title"> Reps and Sets </h2>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart
                  width={500}
                  height={400}
                  data={setsReps}
                  margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
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

                  <Legend />
                </AreaChart>
              </ResponsiveContainer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Results;
