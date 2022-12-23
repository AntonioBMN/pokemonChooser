import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Pokemon from "../Pages/pokemon";

function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Pokemon" replace />} />
        <Route path="/Pokemon" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoutes;
