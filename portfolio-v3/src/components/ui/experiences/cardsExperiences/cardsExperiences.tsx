export default function CardsExperiences(props) {

    const {date, company, post, competences} = props.experience;

    return (
        <article>
            <section>
                <p>{date}</p>
                <h3>{company}</h3>
                <h2>{post}</h2>
                <ul>
                    {competences.map((cpt, index) => <li key={index}>{cpt}</li>)}
                </ul>
                <p>yudfdsbf</p>
            </section>
        </article>
    )
}