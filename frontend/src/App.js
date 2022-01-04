import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import GetMaterial from "./GetMaterial";
import GetResult from "./GetResults";
import DeleteMarks from "./DeleteMarks";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function createData(CourseName, Cr, Marks, GPA) {
  return { CourseName, Cr, Marks, GPA };
}

const rows = [
  createData("Topics in Computer Science ", 3, "90%", 3.7),
  createData("Theory of Automata", 3, "90%", 3.3),
  createData("Machine Learning ", 3, "90%", 3.7),
  createData("Numerical Computing ", 3, "80%", 3.3),
  createData("Mobile Application Developement ", 4, "90%", 3.3),
];

export default function App() {
  const Home = () => {
    return (
      <div>
        <ul>
          <li>
            <Link to="/getmaterial">Check Material</Link>
          </li>
          <li>
            <Link to="/deleteMarks">Delete Marks</Link>
          </li>
          <li>
            <Link to="/getresult">Check Result</Link>
          </li>
        </ul>
      </div>
    );
  };
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/getmaterial" element={<GetMaterial />}></Route>
        <Route exact path="/getresult" element={<GetResult />}></Route>
        <Route exact path="/deleteMarks" element={<DeleteMarks />}></Route>
      </Routes>
    </Router>
  );
}
