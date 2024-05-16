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
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import logimg from './logimg.json';
import Lottie from 'lottie-react';
import { Rammetto_One } from 'next/font/google';
import clsx from 'clsx';
import useAppContext from '@/context/AppContext';
import { useGoogleLogin } from '@react-oauth/google';

const font = Rammetto_One({ subsets: ['latin'], weight: ['400'] });

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

  const router = useRouter();

  const { setLoggedIn, setCurrentUser } = useAppContext();

  const form = useForm({
    initialValues: {
      email: '',
      password: ''
    },

    validate: {
      email: val => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: val =>
        val.length <= 6 ? "Password should include at least 6 characters" : null
    }
  })

  const loginSubmit = (values) => {
    console.log(values);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/authenticate`,{
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        if (response.status === 200) {
          toast.success('loggedin successfully');
          response.json().then(data => {
            localStorage.setItem('user', JSON.stringify(data));
            setCurrentUser(data);
            setLoggedIn(true);
            // set token to cookie
            document.cookie = `token=${data.token}`;
            router.push('/');
          })
        } else {
          toast.error('Invalid Credentials')
        }
      }).catch((err) => {
        console.log(err);
        toast.error('Invalid Credentials')
      });
  }


const login = useGoogleLogin({
  onSuccess: tokenResponse => {
    
  },
});

  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <MantineProvider theme={theme} >
          <Box mx="auto" >
            <BackgroundImage src=''
              radius="md">
              <Center p="md">
                <Container size="responsive" w={700} >
                  <Paper shadow="md" p={30} mt={10} mb={30} radius="md" className={classes.Paper}>
                    <Title className={classes.title} >
                       <span className={clsx(classes.subtitle,font.className)}>Login</span> </Title>
                    {/* <Text className={classes.text}>Login with</Text> */}

                    <Group grow mb="md" mt="lg" >
                      <GoogleButton onClick={() => login()} radius="xl" className={classes.Button}>Google</GoogleButton>
                      <TwitterButton radius="xl" className={classes.Button}>Facebook</TwitterButton>
                    </Group>

                    <Divider label={
                      <p style={{ color: '#4ECA3E' }}>Or continue with email</p>
                    } labelPosition="center" my="lg" color='white' />

                    <form onSubmit={form.onSubmit(loginSubmit)}>

                      <TextInput withAsterisk variant="filled" label="Email" placeholder="your@email.com"
                        {...form.getInputProps('email')} required />

                      <PasswordInput label="Password"
                        variant="filled"
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
                        <Anchor component={Link} href="/resetPassword" size="sm">
                          Forgot password?
                        </Anchor>
                      </Group>
                      <Group justify="space-between" mt="xl">
                        <Anchor component={Link} underline="hover" c="dimmed" href="/signup" size="xs">
                          Don't have an account? Register
                        </Anchor>
                        <Button type="submit" className={classes.button} variant="outline" color="black">
                          <p className={classes.p}>Login</p>
                        </Button>
                      </Group>
                    </form>
                  </Paper>

                </Container>

              </Center>

            </BackgroundImage>
          </Box>
        </MantineProvider>
      </div>
      <Lottie loop={true} animationData={logimg} className={classes.image} />
    </div>
  )
}

export default Login;