// import EmployeeReviews from "../components/EmployeeReviews";
// import EngineeringCompany from "../components/EngineeringCompany";
import Hero from "../components/Hero";
import MoreThanEngineers from "../components/MoreThanEngineers";
import { heroSectionHomeData } from "../data/heroSection";
import ScaleYourTeam from "../components/ScaleYourTeam";
import SubFooter from "../components/SubFooter"

function Main() {
    return (
        <>
            <Hero
                title={heroSectionHomeData.title}
                subTitle={heroSectionHomeData.subtitle}
                bgImg={heroSectionHomeData.backgroundImg}
                clientTitle={heroSectionHomeData.clientsTitle}
            />
            <ScaleYourTeam />
            <MoreThanEngineers />
            <SubFooter />
            {/* <EngineeringCompany />
            <EmployeeReviews /> */}
        </>
    );
}

export default Main;
