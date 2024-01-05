import { useLayoutEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PrivacyPol from "../components/PrivacyPol";
import ForEngg from "./ForEngg";
import Hire8ase from "./Hire8ase";
import Main from "./Main";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Home() {

   const location = useLocation()
   const currentPath1 = location.pathname.split("/")[1];
   const currentPath2 = location.pathname.split("/")[2];

   useLayoutEffect(() => {

      return () => window.scrollTo({
         top: 0,
         opacity: 0,
         behavior: "smooth",
      });

   }, [currentPath1, currentPath2])

   return (
      <>
         <Header />
         <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/engineers" element={<ForEngg />} />
            <Route exact path="/hire-8ase" element={<Hire8ase />} />
            <Route exact path="/privacy-policy" element={<PrivacyPol />} />
         </Routes>
         <Footer />
      </>
   );
}
