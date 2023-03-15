import React, { useState } from "react";
import Link from "next/link";
import { Button, Flex } from "@mantine/core";
import { signIn } from "next-auth/react";

export interface INavLinkProps {
  to: string;
  clas?: string;
  children?: string[];
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
  let connexion = connexionString;
  return (
    <nav
      className="navigationBar"
      style={{ padding: 10, height: "100%", width: "100%" }}
    >
      <Flex style={{ flex: 2 }}>
        <Link href="/" className="navigationLogo">
          LOGO{" "}
        </Link>
      </Flex>
      <Flex
        justify={"space-evenly"}
        align={"center"}
        style={{ flex: 5, color: "#0070f3" }}
      >
        <Link href="/">Accueil </Link>
        <Link href="/evenement">Évènements </Link>
        <Link href="/gallerie">Gallerie </Link>
        <Link href="/musique">Musiques </Link>
      </Flex>
      <Flex
        justify={"right"}
        align={"center"}
        style={{ flex: 2, color: "#f27a09" }}
      >
        <Link href={"/auth/signin"}>Connexion</Link>
        <Link href="/compte">{connexion} </Link>
      </Flex>
    </nav>
  );
}
