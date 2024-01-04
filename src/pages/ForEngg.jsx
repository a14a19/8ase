import Hero from "../components/Hero"
import { heroSectionEnggData } from "../data/heroSection"

function ForEngg() {
    return (
        <>
            <Hero title={heroSectionEnggData.title} subTitle={heroSectionEnggData.subtitle} bgImg={heroSectionEnggData.backgroundImg} clientTitle={heroSectionEnggData.clientsTitle} />
        </>
    )
}

export default ForEngg