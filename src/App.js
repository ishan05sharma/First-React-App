import React, { useState } from "react";
import "./styles.css";

const destinations = {
  Comfortable: ["Delhi", "Mumbai", "Shimla"],
  Adventurous: ["pahad1", "pahad2", "pahad3"],
  NatureLover: ["Nature1", "Nature2", "Nature3"]
};

var placesweknow = Object.keys(destinations);

export default function App() {
  const [placelist, setplacelist] = useState();

  function nrenderlist(option = "Comfortable") {
    var place = destinations[option];
    var i = 0;
    for (i = 0; i < place.length; i++) {
      console.log(place[i]);
      setplacelist(place[i]);
    }
  }

  return (
    <div className="App">
      <h1>✈Travel</h1>
      <p>Choose an placelist according to your situation</p>
      <ul>
        {placesweknow.map(function (option) {
          return (
            <span>
              <button onClick={() => nrenderlist(option)}>{option}</button>
            </span>
          );
        })}
      </ul>
      <hr />
      <ul>
        {placesweknow.map(function (place) {
          return (
            <span>
              <li className="non-bullet card">{placelist}</li>
            </span>
          );
        })}
      </ul>

      {/* {placelist!=[]?
          <ul>
             {placelist.map( t=>
                <li>{t.value}</li>
             )} 
          </ul>
          
          :null} */}
    </div>
  );
}
