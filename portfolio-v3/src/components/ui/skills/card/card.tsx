import React, { useRef } from "react";

const languageTitle = "Languages";
const frameworkTitle ="Frameworks";




export default function Card(props) {

    const {title, description, framework, language, icon} = props.skill;

    const ref = useRef(null);
    React.useEffect(() => {
      import("@lottiefiles/lottie-player");
    });
  

   return (
    <article className="px-4 pb-4">
        <section className="bg-secondary text-primary rounded-lg text-center p-2">
        <lottie-player
            id="skillAnimationLottie"
            className=""
            ref={ref}
            autoplay
            loop
            mode="normal"
            src={icon} >
        </lottie-player>

            <h2 className="pb-2 font-bold">{title}</h2>
            <p className="pb-3 italic">{description}</p>
            <h3 className="pb-2 font-semibold">{languageTitle}</h3>
            <p className="pb-2 font-medium ">{language}</p>
            <h3 className="pb-2 font-semibold">{frameworkTitle}</h3>
            <ul>
                {framework.map((fw, index) => <li key={index}>{fw}</li>)}
            </ul>

        </section>
 
    </article>
   )
}