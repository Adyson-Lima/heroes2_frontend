import { BrowserRouter, Routes, Route } from "react-router-dom";
import Heroes from "./pages/Heroes";
import NewUpdate from './pages/NewUpdate';

export default function HeroesRouter(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Heroes/>} />
        <Route path="/newupdate/:hero_id" element={<NewUpdate/>} />
      </Routes>
    </BrowserRouter>
  );
}