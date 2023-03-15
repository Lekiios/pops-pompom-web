import Head from "next/head";
import { Layout } from "../../components/Layout";
import React, { CSSProperties, ReactNode, useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { Router, useRouter } from "next/router";
import {
  Avatar,
  Button,
  Flex,
  Loader,
  LoadingOverlay,
  Paper,
} from "@mantine/core";
export interface StyleSheet {
  [key: string]: CSSProperties;
}

export const style: StyleSheet = {
  text: {
    fontSize: "100px",
    fontStyle: "italic",
  },
};

const FlexPaper = ({ children }: { children?: ReactNode }) => {
  return (
    <Paper
      shadow="xl"
      radius="lg"
      p="xl"
      sx={(theme) => ({
        backgroundImage: theme.fn.gradient({
          from: "pink.3",
          to: "red.3",
          deg: 45,
        }),
      })}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Paper>
  );
};

export default function Compte() {
  const [idGoogle, setId] = useState<string>("Maxime Le Bot");
  const [filiere, setFiliere] = useState<string>("APP3 Info");
  const [description, setDesc] = useState<string>("8 ans");
  const [anciennete, setAnciennete] = useState<string>(
    "Je suis celui qui fait les musiques :sunglasses:"
  );

  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/auth/signin");
    }
  }, [status]);

  if (status === "authenticated") {
    return (
      <Layout underConstruct>
        <Flex
          justify={"center"}
          align={"center"}
          direction={"row"}
          style={{ height: "100%", width: "100%", padding: 30 }}
        >
          <Flex
            style={{
              flex: 2,
              height: "100%",
              padding: 30,
            }}
          >
            <FlexPaper></FlexPaper>
          </Flex>
          <Flex direction={"column"} style={{ flex: 1, height: "100%" }}>
            <Flex style={{ flex: 1, padding: 30 }}>
              <FlexPaper>
                <Button
                  variant={"gradient"}
                  gradient={{ from: "gray.5", to: "gray.6", deg: 90 }}
                  onClick={() => signOut({ redirect: false })}
                  size={"xl"}
                >
                  DECONNEXION
                </Button>
              </FlexPaper>
            </Flex>
            <Flex style={{ flex: 3, padding: 30 }}>
              <FlexPaper></FlexPaper>
            </Flex>
          </Flex>
        </Flex>
      </Layout>
    );
  }

  return (
    <Layout>
      <Flex
        justify={"center"}
        align={"center"}
        style={{ height: "100%", width: "100%" }}
      >
        <Loader color={"pink"} size={"xl"} variant={"bars"} />
      </Flex>
    </Layout>
  );
}
