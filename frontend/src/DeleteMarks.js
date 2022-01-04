import axios from "axios";
import React, { useState } from "react";

function DeleteMarks() {
  const [data, setData] = useState([
    {
      id: 1,
      quiz: 1,
      marks: 8,
    },
    {
      id: 2,
      quiz: 2,
      marks: 9,
    },
    {
      id: 3,
      quiz: 3,
      marks: 7,
    },
  ]);
  const removeMarks = (id) => {
    axios.delete(`/deletemarks/${id}`).then((res) => {
      const del = data.filter((user) => id !== user.id);
      setData(del);
    });
  };
  return (
    <div className="App">
      <div>
        <h1>Teacher Router</h1>
        <h3>Delete Marks Using Id</h3>
      </div>
      {data.map((myObj) => {
        const { id, quiz, marks } = myObj;
        return (
          <div key={id} className="container">
            <div className="underline">
              <h3 className="containerText">Quiz: {quiz}</h3>
              <h3 className="containerText">Marks: {marks}</h3>
              <button
                onClick={() => {
                  removeMarks(id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DeleteMarks;
