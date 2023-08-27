import { MongoClient } from "mongodb";
import SkillArticle from "~/components/ui/skills/SkillArticle";
import Main from "../components/ui/mainArticle/main";

export default function Home(props) {

  return (
    <main className="p-4">
      <Main />
      <SkillArticle skills={props.skills} />
    </main>
  );
}

interface Skill {
title: string,
description: string,
framework:string[],
language:string
}

export async function getStaticProps() {



  let skills: Skill[] = [] ;
  let client;

  try {
    client = await MongoClient.connect('mongodb+srv://damienmiremont:PrbX6iYPg2hiURNc@cluster0.3ptf8hw.mongodb.net/portfolioDB?retryWrites=true&w=majority');
    const db = client.db();
    skills = await db.collection('skills').find().toArray();
  } catch(error) {
    skills = [];
  }

  return {
    props: {
      skills: JSON.parse(JSON.stringify(skills))
    }
  };
}
