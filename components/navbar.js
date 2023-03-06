import { useState } from "react";

function NavLink({ to, clas, children }) {
  return (
    <a href={to} className={clas}>
      {children}
    </a>
  );
}
/*
function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
        {" "}
        {
          //logo container
        }
        <a className="text-xl font-semibold" href="/">
          LOGO
        </a>
      </div>
      <div className="flex flex-col ml-4">
        <a
          className="text-xl font-medium my-4"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          About
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Contact
        </a>
      </div>
    </div>
  );
}
*/
let connexionString = "Compte";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  var connexion = connexionString;
  return (
    <nav>
      <div class="navigationBar">
        <a href="." class="navigationLogo">
          LOGO{" "}
        </a>
        <div class="navigationChild">
          <NavLink to="." clas="navigationLink">
            Accueil{" "}
          </NavLink>
          <NavLink to="./evenement" clas="navigationLink">
            Évènements{" "}
          </NavLink>
          <NavLink to="./gallerie" clas="navigationLink">
            Gallerie{" "}
          </NavLink>
          <NavLink to="./musique" clas="navigationLink">
            Musiques{" "}
          </NavLink>
        </div>
        <div class="navigationCompte">
          <NavLink to="./compte">{connexion} </NavLink>
        </div>
      </div>
    </nav>
  );
}
