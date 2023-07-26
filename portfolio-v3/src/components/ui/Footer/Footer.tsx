export default function Footer() {
    return(
        <footer className="flex justify-between text-primary border-t border-primary p-4 m-auto max-w-7xl">
        <p>© MIREMONT damien</p>
        <ul className="flex">
          <li>
            <a>
              <img src="/icons/courrier.png" alt="email lien" className="w-6"/>
            </a>
          </li>
          <li>
            <a href="">
              <img src="/icons/github.png" alt="github lien" className="w-6"/>
            </a>
          </li>
          <li>
            <a href="">
              <img src="/icons/linkedin.png" alt="linkedin lien" className="w-6"/>
            </a>
          </li>
        </ul>
      </footer>
    )
}