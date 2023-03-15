import React, { ReactNode } from "react";
import Navbar from "./navbar";
import { Flex } from "@mantine/core";

export const Layout = ({
  children,
  underConstruct,
}: {
  children: ReactNode;
  underConstruct?: boolean;
}) => {
  return (
    <Flex direction={"column"} style={{ height: "100%" }}>
      <Flex
        justify={"center"}
        align={"center"}
        style={{ flex: 2, width: "100%" }}
      >
        <Navbar />
      </Flex>
      <main style={{ flex: 22 }}>{children}</main>
      {underConstruct ? (
        <Flex
          maw={"100%"}
          justify={"center"}
          align={"center"}
          sx={(theme) => ({
            backgroundImage: theme.fn.gradient({
              from: "red.6",
              to: "orange.6",
              deg: 45,
            }),
          })}
          style={{ color: "white", fontWeight: "bold" }}
        >
          ⚠ This page is under construction ⚠
        </Flex>
      ) : (
        <></>
      )}
    </Flex>
  );
};
