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
  Title,
  Image
} from "@mantine/core"
import { GoogleButton } from "./GoogleButton"
import { TwitterButton } from "./TwitterButton"
import classes from './signup.module.css';
import cx from 'clsx';
import { MantineProvider, Container, createTheme } from '@mantine/core';
import Link from 'next/link';
import { BackgroundImage, Center, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from "react"
import { IconX, IconCheck } from "@tabler/icons-react"
import { Progress, Popover, rem } from "@mantine/core"
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

function PasswordRequirement({ meets, label }) {
  return (
    <Text
      c={meets ? "teal" : "red"}
      style={{ display: "flex", alignItems: "center" }}
      mt={7}
      size="sm"
    >
      {meets ? (
        <IconCheck style={{ width: rem(14), height: rem(14) }} />
      ) : (
        <IconX style={{ width: rem(14), height: rem(14) }} />
      )}{" "}
      <Box ml={10}>{label}</Box>
    </Text>
  )
}

const requirements = [
  { re: /[0-9]/, label: "Includes number" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" }
]

function getStrength(password) {
  let multiplier = password.length > 5 ? 0 : 1

  requirements.forEach(requirement => {
    if (!requirement.re.test(password)) {
      multiplier += 1
    }
  })

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10)
}


export function SignUp(props) {
  const router = useRouter();
  const [popoverOpened, setPopoverOpened] = useState(false)
  const [value, setValue] = useState("")
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(value)}
    />
  ))

  const strength = getStrength(value)
  const color = strength === 100 ? "teal" : strength > 50 ? "yellow" : "red"

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      termsOfService: false,
      createdAt: new Date()
    },

    validate: {
      name: (value) => (value.length < 5 ? 'Name must have at least 5 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      confirmPassword: (v) =>
        v !== value ? 'Passwords did not match' : null,
    },
  });

  const signupSubmit = (values) => {
    values.password = value;
    console.log(values);

    fetch('http://localhost:5000/user/add', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          toast.success('User Registered successfully');
          setValue('');
          form.reset();
          router.push('/login')
        } else {
          toast.error('Some Error Occured');
        }

      }).catch((err) => {
        console.log(err);
        toast.error('Some Error Occured');
      });



  }


  return (

    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Center >
          <Container w={700} fluid me={10}>
            <Paper withBorder shadow="md"  {...props} radius="md" p="md" className={classes.Paper}>
              <Title className={classes.title} >
                SignUp</Title>

              <Group grow mb="md" mt="lg" >
                <GoogleButton radius="xl" className={classes.Button}>Google</GoogleButton>
                <TwitterButton radius="xl" className={classes.Button}>Facebook</TwitterButton>
              </Group>

              <Divider label={
                <p style={{ color: '#4ECA3E' }}>Or Signup with</p>
              }
                labelPosition="center" my="lg" />

              <form onSubmit={form.onSubmit(signupSubmit)}>

                <TextInput label="Name" placeholder="Full Name"  {...form.getInputProps('name')} />

                <TextInput withAsterisk label="Email" placeholder="your@email.com"
                  {...form.getInputProps('email')} required mt="md" />

                <Popover
                  opened={popoverOpened}
                  position="bottom"
                  width="target"
                  transitionProps={{ transition: "pop" }}
                >
                  <Popover.Target>
                    <div
                      onFocusCapture={() => setPopoverOpened(true)}
                      onBlurCapture={() => setPopoverOpened(false)}
                    >
                      <PasswordInput label="Password"
                        placeholder="Your password"
                        value={value}
                        onChange={event => setValue(event.currentTarget.value)}
                        error={form.errors.password && 'Password should include at least 8 characters'}
                        mt="md"

                        required />
                    </div>
                  </Popover.Target>
                  <Popover.Dropdown>
                    <Progress color={color} value={strength} size={5} mb="xs" />
                    <PasswordRequirement
                      label="Includes at least 6 characters"
                      meets={value.length > 5}
                    />
                    {checks}
                  </Popover.Dropdown>
                </Popover>
                <PasswordInput
                  mt="sm"
                  label="Confirm password"
                  placeholder="Confirm password"
                  {...form.getInputProps('confirmPassword')}
                />



                <Group justify="space-between" mt="lg">
                  <Checkbox label="I accept the Terms of Use & Privacy Policy"
                    checked={form.values.terms}
                    {...form.getInputProps('termsOfService', { type: 'checkbox' })}
                  />
                </Group>
                <Group justify="space-between" mt="xl">
                  <Anchor component={Link} underline="hover" type="button" c="dimmed" href="/login" size="xs">
                    Already have an account? Login here
                  </Anchor>
                  <Button type="submit" variant="outline" color="rgba(255, 255, 255, 1)" className={classes.button}
                  >
                    <p className={classes.p}>Sign Up</p>
                  </Button>
                </Group>
              </form>
            </Paper>
          </Container>
        </Center>


      </div>
      <Image src="Signup.gif" className={classes.image} />
    </div>

  )
}

export default SignUp;