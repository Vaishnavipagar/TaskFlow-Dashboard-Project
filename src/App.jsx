import { BrowserRouter, Routes, Route } from "react-router-dom";

import Tasks from "./pages/Tasks";

import Login from "./pages/Login";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/tasks"
          element={<Tasks />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;