import CardsExperiences from "./cardsExperiences/cardsExperiences"

const title = "Expériences"

export default function Experiences(props) {
    return (
        <article>
            <h1>{title}</h1>
            {props.experiences.map((experience,index) => (
            <CardsExperiences key = {index} experience={experience }/>
            ))}
        </article>
    )
}