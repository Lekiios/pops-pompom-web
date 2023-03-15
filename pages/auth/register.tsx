import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Flex,
  Group,
  Paper,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { Layout } from "../../components/Layout";
import Link from "next/link";
import { createUser } from "../../lib/dbUtils";
import { UserProps } from "../../models/UserModel";
import { useRouter } from "next/router";

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
  const [creationFailed, setCreationFailed] = useState<boolean>(false);
  const router = useRouter();

  const capitalize = (s: string): string => {
    return s[0].toUpperCase() + s.slice(1);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault;
    try {
      const user: UserProps = {
        firstName: capitalize(e.firstName),
        lastName: capitalize(e.lastName),
        email: e.email,
        password: e.password,
      };
      const data = await createUser(user);
      setCreationFailed(false);
      router.push("/auth/signin");
    } catch (error) {
      setCreationFailed(true);
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
        <Paper maw={300} shadow="xl" radius="lg" p="xl">
          <Box maw={300} mx="auto">
            {creationFailed ? (
              <>
                <Alert
                  title={"Echec de la création de compte"}
                  variant={"light"}
                  color={"red"}
                >
                  Email déjà utilisé.
                </Alert>
              </>
            ) : (
              <></>
            )}
            <form
              style={{
                marginBottom: 15,
                display: "flex",
                gap: 5,
                flexDirection: "column",
              }}
              onSubmit={form.onSubmit((e) => handleSubmit(e))}
            >
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
                <Button
                  variant={"gradient"}
                  gradient={{
                    from: "pink.4",
                    to: "red.4",
                    deg: 45,
                  }}
                  type="submit"
                >
                  Submit
                </Button>
              </Group>
            </form>
            <Link href={"/auth/signin"}>Déjà enregistré ?</Link>
          </Box>
        </Paper>
      </Flex>
    </Layout>
  );
};

export default Register;
