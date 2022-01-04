import "./App.css";
import React from "react";
import axios from "axios";
export default function GetMaterial() {
  const [material, setMaterial] = React.useState([
    "./materails/couresid/intro.pdf",
    "./materails/couresid/intro.pdf",
  ]);
  //dummy data will be updated when call is made , only added to show ui look
  const getMaterial = async () => {
    const res = await axios.get(`http://localhost:5000/students/Material/`);
    setMaterial(res);
  };

  React.useEffect(() => {
    getMaterial();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h3>Materials</h3>
      </header>
      <div>
        {material.map((item) => {
          return (
            <div
              style={{
                border: "1px solid black",
                margin: "1px",
                padding: "5px",
              }}
            >
              <p className="List">
                <a href="https://www.google.com">{item}</a>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
