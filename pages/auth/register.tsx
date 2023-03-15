import React from "react";
import { Box, Button, Flex, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Layout } from "../../components/Layout";
import Link from "next/link";
import { createUser } from "../../lib/dbUtils";
import { UserProps } from "../../models/UserModel";

const Register = () => {
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },

    validate: {
      email: (value: string) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email",
      password: (value: string) =>
        value.length >= 6 ? null : "Password empty",
    },
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault;
    try {
      const user: UserProps = {
        firstName: e.firstName,
        lastName: e.lastName,
        email: e.email,
        password: e.password,
      };
      await createUser(user);
    } catch (error) {
      console.error(error);
    }
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
          <form onSubmit={form.onSubmit((e) => handleSubmit(e))}>
            <TextInput
              withAsterisk
              label="Prénom"
              type={"text"}
              {...form.getInputProps("firstName")}
            />
            <TextInput
              withAsterisk
              label="Nom"
              type={"text"}
              {...form.getInputProps("lastName")}
            />
            <TextInput
              style={{ marginBottom: 5 }}
              withAsterisk
              label="Email"
              placeholder="Adresse Email"
              {...form.getInputProps("email")}
            />
            <TextInput
              withAsterisk
              label="Mot de Passe"
              type={"password"}
              placeholder="Au moins 6 caractères"
              {...form.getInputProps("password")}
            />

            <Group position="right" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </form>
        </Box>
        <Link style={{ marginTop: 15 }} href={"/auth/signin"}>
          Déjà enregistré ?
        </Link>
      </Flex>
    </Layout>
  );
};

export default Register;
