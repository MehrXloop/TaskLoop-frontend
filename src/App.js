import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import TaskList from "./components/taskList/TaskList";
import TaskForm from "./components/taskForm/TaskForm";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/tasks" element={<TaskList/>}/>
          <Route path="/form" element={<TaskForm/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
