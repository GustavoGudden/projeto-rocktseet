import { Route, Routes } from "react-router-dom";
import { Eventos } from "./pages/eventos";
import { Sub } from "./pages/sub";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Sub />}></Route>
      <Route path="/event" element={<Eventos />}></Route>
      <Route path="/event/lesson/:slug" element={<Eventos />}></Route>
    </Routes>
  );
}
