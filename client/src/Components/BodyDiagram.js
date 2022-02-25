import { useState } from "react";
import { Button, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

function BodyDiagram() {
  const [buttonValue,setButtonValue] = useState(true);

    

  function handleImgClick(e) {
    if (e.target.alt === "back region") {
    } else if (e.target.alt === "neck region") {
    } else if (e.target.alt === "knee region") {
    } else if (e.target.alt === "shoulder region") {
    }
  }

  
  return (
    <div>
      <div>
        <h1 className="BodyTitle">Point to your pain</h1>
        <div>
          <img
            className="grow"
            src="/images/back.png"
            alt="back region"
            onClick={(e) => handleImgClick(e)}
          />
          <img
            className="grow"
            src="/images/neck.png"
            alt="neck region"
            onClick={(e) => handleImgClick(e)}
          />
        </div>
        <img
          className="grow"
          src="/images/knee.png"
          alt="knee region"
          onClick={(e) => handleImgClick(e)}
        />
        <img
          className="grow"
          src="/images/shoulder.png"
          alt="shoulder region"
          onClick={(e) => handleImgClick(e)}
        />
      </div>
      <BootstrapSwitchButton
        checked={false}
        onlabel="Advanced exercises"
        onstyle="danger"
        offlabel="Novice exercises"
        offstyle="success"
        style="w-50 mx-3"
        onChange={()=>setButtonValue(!buttonValue)}
      />
      <h6>
        <a href="https://www.vecteezy.com/free-vector/body-pain">
          Body Pain Vectors by Vecteezy
        </a>
      </h6>
    </div>
  );
}

export default BodyDiagram;
