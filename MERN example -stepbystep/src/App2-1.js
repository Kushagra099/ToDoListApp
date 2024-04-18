import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SimpleTodosList from "./components/simpletodolist4";
import CreateTask from "./components/createtask1";

// import Junk from "./components/junk";

export default function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
    {/* <Navbar /> */}

      {/* <div className="container"> */}
        <Route path="/" exact element={<SimpleTodosList />} />
        <Route path="/create" element={<CreateTask />} />
      {/* </div> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}
