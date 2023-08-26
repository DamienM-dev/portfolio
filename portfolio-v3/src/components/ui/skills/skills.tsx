import Card from "./card/card";

const title = "Compétence";



export default function Skill(props) {
   return (
    <article className="bg-primary text-secondary">
        <h1 className="text-center font-bold text-lg">{title}</h1>
        <Card skill={props.skill}/>
    </article>
   )
}