import "./App.css";
import React from "react";
import axios from "axios";
export default function GetMaterial() {
    const [material, setMaterial] = React.useState([
    "./materials/couresid/intro.pdf",
    "./materials/couresid/intro2.pdf",
    "./materials/couresid/intro3.pdf",
    "./materials/couresid/intro4.pdf",
  ]);

  const [id, setID] = React.useState(0);
  const [fn, setFn] = React.useState("");

  const getData = () => {
    axios.get(`http://localhost:4040/${id}/${fn}`);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h3>Class Name</h3>
      </header>
      <div>
        {material.map((item) => {
          return (
            <div
              style={{
                border: "1px solid black",
                margin: "1px",
                padding: "5px",
                flexDirection: "row",
              }}
            >
              <p className="List">{item}</p>
              <button
                onClick={() => {
                  getData();
                }}
              >
                Download
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
