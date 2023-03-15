import React, { useState } from "react";
import Link from "next/link";
import { Button, Flex, Paper } from "@mantine/core";
import { signOut, useSession } from "next-auth/react";
import {
  IconHome,
  IconCalendarEvent,
  IconPhoto,
  IconMusic,
} from "@tabler/icons-react";
import Image from "next/image";
import { useRouter } from "next/router";
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

interface INavLinkProps {
  url: string;
  title: string;
  icon: JSX.Element;
}
const NavLink = ({ url, title, icon }: INavLinkProps) => {
  return (
    <Link
      style={{
        display: "flex",
        alignItems: "end",
        gap: 5,
        color: "whitesmoke",
        fontWeight: "bold",
      }}
      href={url}
    >
      {icon}
      {title.toUpperCase()}
    </Link>
  );
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  return (
    <Paper
      shadow={"md"}
      radius={"xs"}
      sx={(theme) => ({
        backgroundImage: theme.fn.gradient({
          from: "pink.4",
          to: "red.4",
          deg: 45,
        }),
      })}
      style={{
        color: "white",
        padding: 15,
        paddingInline: "10%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        height: "100%",
        width: "100%",
      }}
    >
      <Flex style={{ flex: 1 }}>
        <Link href="/">
          <Image
            priority
            src={"/pompom_logo.png"}
            width={60}
            height={60}
            alt="pompomPopsLogo"
          />
        </Link>
      </Flex>
      <Flex
        gap={20}
        align={"center"}
        style={{ flex: 16, color: "#0070f3", marginLeft: 15 }}
      >
        <NavLink url={"/"} title={"accueil"} icon={<IconHome />} />
        <NavLink
          url={"/evenements"}
          title={"evenements"}
          icon={<IconCalendarEvent />}
        />
        <NavLink url={"/gallerie"} title={"galerie"} icon={<IconPhoto />} />
        <NavLink url={"/musique"} title={"musique"} icon={<IconMusic />} />
      </Flex>
      <Flex
        justify={"right"}
        align={"center"}
        style={{ flex: 8, color: "#f27a09" }}
      >
        {status === "authenticated" ? (
          <Flex align={"center"} justify={"right"} gap={20}>
            <Button
              variant={"gradient"}
              gradient={{ from: "gray.6", to: "gray.5", deg: 90 }}
              size={"md"}
            >
              <Link href="/compte">COMPTE</Link>
            </Button>
            {router.pathname !== "/compte" ? (
              <Button
                variant={"gradient"}
                gradient={{ from: "gray.5", to: "gray.6", deg: 90 }}
                onClick={() => signOut({ redirect: false })}
                size={"md"}
              >
                DECONNEXION
              </Button>
            ) : (
              <></>
            )}
          </Flex>
        ) : (
          <Button
            variant={"gradient"}
            gradient={{ from: "gray.5", to: "gray.6", deg: 90 }}
            size={"md"}
          >
            <Link href={"/auth/signin"}>CONNEXION</Link>
          </Button>
        )}
      </Flex>
    </Paper>
  );
}
