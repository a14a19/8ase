import Footer from "../components/Footer";
import Header from "../components/Header";
import ForEngg from "./ForEngg";
import Hire8ase from "./Hire8ase";
import Main from "./Main";
import { Routes, Route } from "react-router-dom";

export default function Home() {

   return (
      <>
         <Header />
         <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/engineers" element={<ForEngg />} />
            <Route exact path="/hire-8ase" element={<Hire8ase />} />
         </Routes>
         <Footer />
      </>
   );
}
