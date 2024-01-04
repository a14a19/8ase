import Home from "../src/pages/home";
import { Routes, Route } from "react-router-dom";
import HireXTeam from "../src/pages/HireXTeam";

export default function App() {
   return (
      <>
         <Routes>
            
            <Route path="/" element={<Home />} />
            
         </Routes>
      </>
   );
}
