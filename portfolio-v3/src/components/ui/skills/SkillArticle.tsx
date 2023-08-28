import Card from "./card/card";

const title = "Compétence";

export default function SkillArticle(props) {

    

  return (
    <article className="bg-primary text-secondary">
      <h1 className="text-center font-bold text-lg py-4">{title}</h1>
      {props.skills.map((skill, index) => (
        <Card key={index} skill={skill} />
      ))}
    </article>
  );
}
