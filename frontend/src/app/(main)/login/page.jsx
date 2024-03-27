'use client'
import React from 'react';
import { useToggle, upperFirst } from "@mantine/hooks"
import { Form, useForm } from "@mantine/form"
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Title
} from "@mantine/core"
import { GoogleButton } from "./GoogleButton"
import { TwitterButton } from "./TwitterButton"
import classes from './login.module.css';
import cx from 'clsx';
import { MantineProvider, Container, createTheme } from '@mantine/core';
import Link from 'next/link';
import { BackgroundImage, Center, Box } from '@mantine/core';


const theme = createTheme({
  components: {
    Container: Container.extend({
      classNames: (_, { size }) => ({
        root: cx({ [classes.responsiveContainer]: size === 'responsive' }),
      }),
    }),
  },
});


export function Login() {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      terms: true,

    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length <= 8 ? 'Password should include at least 8 characters' : null),

    },
  });



  return (
    <MantineProvider theme={theme} >
      <Box mx="auto" >
        <BackgroundImage
          src="https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg"
          radius="md"
          h={700}
        >
          <Center p="md">
            <Container size="responsive" mt={50} h={700} w={700} >
              <Paper withBorder shadow="md" p={30} mt={30} radius="md" p="xl" withBorder className={classes.Paper}>
                <Title className={classes.title} >
                  Welcome to Mantine, Login with
                </Title>
                <Group grow mb="md" mt="md">
                  <GoogleButton radius="xl" variant="outline" color="rgba(0, 0, 0, 1)">Google</GoogleButton>
                  <TwitterButton radius="xl" variant="outline" color="rgba(0, 0, 0, 1)">Twitter</TwitterButton>
                </Group>

                <Divider label="Or continue with email" labelPosition="center" my="lg" />
                <form onSubmit={form.onSubmit((values) => console.log(values))}>

                  <TextInput withAsterisk label="Email" placeholder="your@email.com"
                    {...form.getInputProps('email')} required />
                  <PasswordInput label="Password"
                    placeholder="Your password"
                    value={form.values.password}
                    onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                    error={form.errors.password && 'Password should include at least 8 characters'}
                    required mt="md" />
                    
                  <Group justify="space-between" mt="lg">
                    <Checkbox label="Remember me"
                       checked={form.values.terms}
                       onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                    />
                    <Anchor component="button" size="sm">
                      Forgot password?
                    </Anchor>
                  </Group>
                  <Group justify="space-between" mt="xl">
                    <Anchor component={Link} underline="hover" type="button" c="dimmed" href="/signup" size="xs">
                      Don't have an account? Register
                    </Anchor>
                    <Button type="submit" variant="outline" color="rgba(0, 0, 0, 1)"
                    >
                      Login
                    </Button>
                  </Group>
                </form>
              </Paper>
            </Container>
          </Center>
        </BackgroundImage>
      </Box>
    </MantineProvider>
  )
}

export default Login;