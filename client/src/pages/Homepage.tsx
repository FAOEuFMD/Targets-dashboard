import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import InfoButton from "../components/InfoButton";
import infoData from "../infoData";

const Homepage: React.FC = () => {
  const navigate = useNavigate();
  
  // Navigate to Key area number
  const takeToKeyarea = () => navigate("/Keyareas");

  return (
    <div>
      {/* <h1 className="title pt-10">EuFMD Milestones</h1> */}
      <div className="mx-auto">
        {/* Circle setup for focus areas */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="container relative flex items-center justify-center rounded-full bg-white overflow-hidden border-2 border-white 
          min-w-[400px] min-h-[400px] 
          sm:max-w-[400px] sm:max-h-[400px]
          md:max-w-[500px] md:max-h-[500px]
          lg:max-w-[550px] lg:max-h-[550px]
          w-full max-h-[90vh] aspect-square">
            <div
              id="focusThree"
              className="polypieceInner absolute w-full h-full focus-three hover:bg-teal-800"
              style={{
                clipPath: "polygon(50.3% 50%, 100% 1%, 100% 240%)",
                transform: "rotate(74deg)",
              }}
              onClick={takeToKeyarea}
            ></div>
            <div
              id="focusTwo"
              className="polypieceInner absolute w-full h-full focus-two hover:bg-teal-800"
              style={{
                clipPath: "polygon(50.3% 50%, 100% 1%, 100% 240%)",
                transform: "rotate(194deg)",
              }}
              onClick={takeToKeyarea}
            ></div>
            <div
              id="focusOne"
              className="polypieceInner absolute w-full h-full focus-one hover:bg-teal-800"
              style={{
                clipPath: "polygon(50.3% 50%, 100% 1%, 100% 240%)",
                transform: "rotate(314deg)",
              }}
              onClick={takeToKeyarea}
            ></div>
          </div>
        </div>
        {/* SVG set up and text/line inserts that overlay the circle */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          width="100%"   // sets the SVG to fill the container's width
          height="100%"  // sets the SVG to fill the container's height
          viewBox="0 0 600 600"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            x="30%"
            y="38%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="fill-white text-2xl sm:text-lg md:text-xl lg:text-2xl"
          >
            Protection of Livestock
          </text>
          <text
            x="70%"
            y="38%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="fill-white text-2xl sm:text-lg md:text-xl lg:text-2xl"
          >
            Respond to Crises
          </text>
          <text
            x="50%"
            y="73%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="fill-white text-2xl sm:text-lg md:text-xl lg:text-2xl"
          >
            Control of Diseases
          </text>
        </svg>
        {/* Static InfoButtons below each corresponding text */}
          <div className="absolute top-[40%] left-[40%]">
            <InfoButton infoText={infoData[0].focus_objective_name_1} />
          </div>
          <div className="absolute top-[40%] left-[60%]">
            <InfoButton infoText={infoData[1].focus_objective_name_2} />
          </div>
          <div className="absolute top-[75%] left-[50%]">
            <InfoButton infoText={infoData[2].focus_objective_name_3} />
          </div>
        </div>
      </div>
  );
};

export default Homepage;