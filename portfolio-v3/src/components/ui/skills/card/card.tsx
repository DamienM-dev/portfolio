
const languageTitle = "Languages";
const frameworkTitle ="Frameworks";
const arrow ="->";



export default function Card(props) {

    const {title, description, framework, language} = props.skill;

   return (
    <article>
        <section className="bg-secondary text-primary rounded-lg">
            <img src="" alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
            <h3>{languageTitle}</h3>
            <p>{language}</p>
            <h3>{frameworkTitle}</h3>
            <ul>
                <li>{arrow}{framework}</li>
            </ul>

        </section>
 
    </article>
   )
}