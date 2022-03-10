import { useEffect, useState } from "react";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { useNavigate } from "react-router-dom";


function BodyDiagram({
  setRegionSelected,
  regionSelected,
  buttonValue,
  setButtonValue,
}) {
  let navigate = useNavigate();
  const [muscleID, setMuscleID] = useState([]);
  
  
// Fetching muscle groups 
  useEffect(() => {
    localStorage.clear();
    fetch("/muscle_groups")
      .then((r) => r.json())
      .then((muscles) => {
        setMuscleID(muscles);
      });
  }, []);

  // Clearing Local storage when coming back to Body Diagram page,setting region selected state and storing in local storage as well
  function handleImgClick(e) {
    localStorage.clear();

    setRegionSelected({
      name: e.target.id,
      advanced: buttonValue,
      muscle_group_id: muscleID.find((muscle) => muscle.region === e.target.id)
        .id,
    });
    localStorage.setItem(
      "muscle_group_id",
      muscleID.find((muscle) => muscle.region === e.target.id).id
    );

    // on image click send to next page routines
    navigate(`/routines/`);
  }

  return (
    <div className="App-header">
      <div>
        <h2 className="BodyTitle">Point to your pain</h2>
        <div>
          <img
            className="grow"
            src="/images/back.png"
            alt="back region"
            id="back"
            onClick={(e) => {
              handleImgClick(e);
            }}
          />
          <img
            className="grow"
            src="/images/neck.png"
            alt="neck region"
            id="neck"
            onClick={(e) => handleImgClick(e)}
          />
        </div>
        <img
          className="grow"
          src="/images/knee.png"
          alt="knee region"
          id="knee"
          onClick={(e) => handleImgClick(e)}
        />
        <img
          className="grow"
          src="/images/shoulder.png"
          alt="shoulder region"
          id="shoulder"
          onClick={(e) => handleImgClick(e)}
        />
      </div>
      {/* Cool light switch type button, stores if workout is advanced or novice */}
      <div className="switchButton">
        <BootstrapSwitchButton
          checked={false}
          onlabel="Advanced exercises"
          onstyle="danger"
          offlabel="Novice exercises"
          offstyle="success"
          style={"w-50 mx-3"}
          onChange={() => {
            console.log(buttonValue);
            console.log(regionSelected);
            setButtonValue(!buttonValue);
          }}
        />
      </div>
      <div id="footer">
        <h6>
          <a href="https://www.vecteezy.com/free-vector/body-pain">
            Body Pain Vectors by Vecteezy
          </a>
        </h6>
      </div>
    </div>
  );
}

export default BodyDiagram;
