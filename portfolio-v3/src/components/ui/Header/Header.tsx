import Link from "next/link";

const nom = "MIREMONT Damien";
const accueil = "Accueil";
const aproposConst = "A propos";



export default function Header() {
    return (
        <header className="flex justify-between bg-primary text-secondary p-4">
        <h2 className="self-center">{nom}</h2>
      
          <ul>
            <li>
              <Link href="/">{accueil}</Link>
            </li>
            <li>
              <Link href="/aPropos">{aproposConst}</Link>
            </li>
          </ul>
      </header>
    )
}

