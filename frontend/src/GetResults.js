import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";

export default function GetResult() {
  const [id, setID] = React.useState("");
  const [resultArr, setResultArr] = React.useState([
    { Course_ID: 1, GPA: 3.56 },
    { Course_ID: 1, GPA: 3.56 },
    { Course_ID: 1, GPA: 3.56 },
    //i Have entered dummy data to give idea of how UI will look
  ]);
  const getResult = async () => {
    //backend will return array contain results
    const res = await axios.get(
      `http://localhost:5000/head/results/student/${id}`
    );
    setResultArr(res);
  };

  return (
    <div>
      <input
        placeholder="Enter Student ID"
        value={id}
        onChange={(e) => setID(e.target.value)}
      />
      <button
        style={{ padding: "10px", margin: "10px" }}
        onClick={() => getResult()}
      >
        Submit
      </button>

      <TableContainer>
        <div style={{ marginLeft: "1%" }}></div>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }} align="left">
                Course ID
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="left">
                GPA
              </TableCell>
              <TableCell
                style={{ fontWeight: "bold" }}
                align="left"
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resultArr.map((element) => (
              <TableRow>
                <TableCell align="left">{element.Course_ID}</TableCell>
                <TableCell align="left">{element.GPA}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div align="right" style={{ marginRight: "7%" }}></div>
      </TableContainer>
    </div>
  );
}
