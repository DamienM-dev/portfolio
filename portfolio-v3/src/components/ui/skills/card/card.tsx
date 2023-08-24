
const language = "Languages";
const framework ="Frameworks";
const arrow ="->";




export default function Card() {
   return (
    <article>
        <section className="bg-secondary text-primary rounded-lg">
            <img src="" alt="" />
            <h2>{}</h2>
            <p>{}</p>
            <h3>{language}</h3>
            <p>{}</p>
            <h3>{framework}</h3>
            <ul>
                <li>{}</li>
            </ul>

        </section>
 
    </article>
   )
}