import EmployeeReviews from "../components/EmployeeReviews";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MoreThanEngineers from "../components/MoreThanEngineers"
import { heroSectionHomeData } from "../data/heroSection";
import EngineeringCompany from "../components/EngineeringCompany";



export default function Home() {

   return (
      <>
         <Header />
         <Hero title={heroSectionHomeData.title} subTitle={heroSectionHomeData.subtitle} bgImg={heroSectionHomeData.backgroundImg} clientTitle={heroSectionHomeData.clientsTitle} />
         <MoreThanEngineers />    
         <EngineeringCompany />
         <EmployeeReviews />
         <Footer />
      </>
   );
}
