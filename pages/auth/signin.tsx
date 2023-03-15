import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  Flex,
  Group,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { Layout } from "../../components/Layout";
import { signIn } from "next-auth/react";
import Link from "next/link";

const SignIn = () => {
  const [connectionRefused, setConnectionRefused] = useState<boolean>(false);
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },

    validate: {
      email: (value: string) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email",
      password: (value: string) => (value ? null : "Password empty"),
    },
  });

  const handleSubmit = async (value: any) => {
    value.preventDefault;

    const data = await signIn("credentials", {
      redirect: false,
      email: value.email,
      password: value.password,
    });
    console.log(data);
    data?.error ? setConnectionRefused(true) : setConnectionRefused(false);
  };

  return (
    <Layout>
      <Flex
        justify={"center"}
        align={"center"}
        mih={"100%"}
        direction={"column"}
      >
        <Box maw={300} mx="auto">
          {connectionRefused ? (
            <>
              <Alert
                title={"Connexion refusée"}
                variant={"light"}
                color={"red"}
              >
                Email ou mot de passe incorrect.
              </Alert>
            </>
          ) : (
            <></>
          )}
          <form onSubmit={form.onSubmit((e) => handleSubmit(e))}>
            <TextInput
              style={{ marginBottom: 5 }}
              withAsterisk
              label={"Email"}
              placeholder="Adresse Email"
              {...form.getInputProps("email")}
            />
            <TextInput
              withAsterisk
              type={"password"}
              label={"Mot de Passe"}
              placeholder="Mot de passe"
              {...form.getInputProps("password")}
            />

            <Checkbox
              mt="md"
              label="Se souvenir de moi"
              {...form.getInputProps("remember", { type: "checkbox" })}
            />

            <Group position="right" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </form>
        </Box>
        <Link style={{ marginTop: 15 }} href={"/auth/register"}>
          Pas encore enregistré ?
        </Link>
      </Flex>
    </Layout>
  );
};

export default SignIn;
