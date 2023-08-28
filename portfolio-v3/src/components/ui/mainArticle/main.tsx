import React, { useRef } from "react";


const principalTitle = "Concepteur, développeur d'Application";
const secondTitle = "En recherche d'une alternance pour un Master full stack";

export default function Main() {

  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <>
      <h1 className="text-center font-bold text-lg">{principalTitle}</h1>
      <h2 className="text-center">{secondTitle}</h2>
      <div>
            <lottie-player
              id="firstLottie"
              ref={ref}
              autoplay
              loop
              mode="normal"
              src="https://lottie.host/ac00ff28-3e7f-44b1-ad1f-2d04c2da4505/V2XpvfBWSP.json">
            </lottie-player>
        </div>
    </>
  );
}
