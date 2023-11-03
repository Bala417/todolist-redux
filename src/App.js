import {} from "@reduxjs/toolkit";
import CreateTodo from "./component/CreateTodo";
import UpdateTodo from "./component/UpdateTodo";
import Home from "./component/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateTodo />} />
        <Route path="/update/:id" element={<UpdateTodo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
