import { MongoClient } from "mongodb";
import SkillArticle from "~/components/ui/skills/SkillArticle";
import Main from "../components/ui/mainArticle/main";
import Experiences from "~/components/ui/experiences/experiences";

export default function Home(props) {

  console.log(props.experiences)

  return (
    <main className="p-4">
      <Main />
      <SkillArticle skills={props.skills} />
      <Experiences experiences={props.experiences} />
    </main>
  );
}

interface Skill {
title: string,
description: string,
framework:string[],
language:string
}

interface Experience {
  date: string,
  company: string,
  framework:string[],
  post:string
}

export async function getStaticProps() {

  let skills: Skill[];
  let experiences: Experience[];
  let client;

  try {
    client = await MongoClient.connect('mongodb+srv://damienmiremont:PrbX6iYPg2hiURNc@cluster0.3ptf8hw.mongodb.net/portfolioDB?retryWrites=true&w=majority');
    const db = client.db();
    skills = await db.collection('skills').find().toArray();
    experiences = await db.collection('experiences').find().toArray();
  } catch(error) {
    console.error("Error fetching experiences:", error);
    skills = [];
    experiences = [];
  }
  finally {
    if (client) client.close();
 }

  return {
    props: {
      skills: JSON.parse(JSON.stringify(skills)),
      experiences: JSON.parse(JSON.stringify(experiences))
    }
  };
}
