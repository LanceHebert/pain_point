import { useState } from "react";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import {  useNavigate } from "react-router-dom";


function BodyDiagram({setRegionSelected,regionSelected,buttonValue,setButtonValue}) {
  
  let navigate = useNavigate();


  function handleImgClick(e) {
  // console.log(`${e.target.id}n`);
    setRegionSelected({...regionSelected,id:e.target.id})
     navigate(`/exercises`)   
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
            id="back"
            onClick={(e) => handleImgClick(e)}
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
