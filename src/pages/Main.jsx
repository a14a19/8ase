import EmployeeReviews from "../components/EmployeeReviews"
import EngineeringCompany from "../components/EngineeringCompany"
import Hero from "../components/Hero"
import MoreThanEngineers from "../components/MoreThanEngineers"
import SubFooter from "../components/SubFooter"
import { heroSectionHomeData } from "../data/heroSection"

function Main() {
    return (
        <>
            <Hero title={heroSectionHomeData.title} subTitle={heroSectionHomeData.subtitle} bgImg={heroSectionHomeData.backgroundImg} clientTitle={heroSectionHomeData.clientsTitle} />
            <MoreThanEngineers />
            <SubFooter />
            {/* <EngineeringCompany />
            <EmployeeReviews /> */}
        </>
    )
}

export default Main