import { BrowserRouter, Routes, Route } from "react-router-dom";
import Heroes from "./pages/Heroes";
// import NewUpdate from './pages/NewUpdate';

export default function HeroesRouter(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Heroes/>} />
      </Routes>
    </BrowserRouter>
  );
}