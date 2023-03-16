import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Checkbox,
  Flex,
  Group,
  Loader,
  LoadingOverlay,
  Paper,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { Layout } from "../../components/Layout";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

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

  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/compte");
    }
  }, [status]);

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

  if (status === "unauthenticated") {
    return (
      <Layout>
        <Flex
          justify={"center"}
          align={"center"}
          mih={"100%"}
          direction={"column"}
        >
          <Paper maw={300} shadow="xl" radius="lg" p="xl">
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
            <Link href={"/auth/register"}>Pas encore enregistré ?</Link>
          </Paper>
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
        <Loader color={"pink"} size={"lg"} variant={"bars"} />
      </Flex>
    </Layout>
  );
};

export default SignIn;
