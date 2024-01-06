import { techLogo } from "../data/heroSection"

export default function TopTechTools() {
    return (
        <section className="lg:max-w-[1140px] min-h-min mx-auto md:mb-[10rem] mb-[1rem]">
            <div className="slider my-16">
                <ul>
                    {
                        techLogo && techLogo.map((tech, i) => {
                            return (
                                <li key={i} className="flex p-5 mx-8 w-max justify-start items-center">
                                    <img src={tech.img} alt={tech.name} className="h-9 aspect-square me-3" />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}