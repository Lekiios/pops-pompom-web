import React, { ReactNode } from "react";
import Navbar from "./navbar";
import { Flex } from "@mantine/core";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex direction={"column"} style={{ height: "100%" }}>
      <Flex
        justify={"center"}
        align={"center"}
        style={{ flex: 1, width: "100%" }}
      >
        <Navbar />
      </Flex>
      <main style={{ flex: 20 }}>{children}</main>
    </Flex>
  );
};
