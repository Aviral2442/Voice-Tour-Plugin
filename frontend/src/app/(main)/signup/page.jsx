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
  Image,
  Input,
  NumberInput
} from "@mantine/core"
import { GoogleButton } from "./GoogleButton"
import { TwitterButton } from "./TwitterButton"
import classes from './signup.module.css';
import Link from 'next/link';
import { BackgroundImage, Center, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from "react"
import { IconX, IconCheck } from "@tabler/icons-react"
import { Progress, Popover, rem } from "@mantine/core"
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { Cormorant_Garamond, Josefin_Sans, Rammetto_One } from 'next/font/google';
import clsx from 'clsx';
import { Container } from '@mantine/core';

const font = Rammetto_One({ subsets: ['latin'], weight: ['400'] });
const fonts = Josefin_Sans({ subsets: ['latin'], weight: ['400'] });

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
      phone: '',
      password: '',
      confirmPassword: '',
      avatar: '',
      termsOfService: false,
      createdAt: new Date()
    },

    validate: {
      name: (value) => (value.length < 5 ? 'Name must have at least 5 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      phone: (value) =>  (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value) ? null : 'Invalid Number'),
      confirmPassword: (v) =>
        v !== value ? 'Passwords did not match' : null,
    },
  });

  const signupSubmit = (values) => {
    values.avatar = selImage.name;
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
  const [selImage, setselImage] = useState('');
  const uploadeImage = async (e) => {
    const file = e.target.files[0];
    setselImage(file);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
        toast.success('File Uploaded!!');
      }
    });


  }


  return (

    <Container size="sm" pt={60} pb={60} >
      <Paper withBorder shadow="md"  {...props} radius="md" p="md" className={classes.Paper} >
        <Title className={clsx(classes.title, font.className)} >
          SignUp</Title>

        <Group grow mb="md" mt="lg" >
          <GoogleButton radius="xl" className={classes.Button}>Google</GoogleButton>
          <TwitterButton radius="xl" className={classes.Button}>Facebook</TwitterButton>
        </Group>

        <Divider label={
          <p style={{ color: '#4ECA3E' }}>Or Signup with</p>
        }
          labelPosition="center" my="lg" />

        <form onSubmit={form.onSubmit(signupSubmit)} className={fonts.className}>

          <TextInput label="Name" placeholder="Full Name"  {...form.getInputProps('name')} />

          <TextInput withAsterisk label="Email" placeholder="your@email.com"
            {...form.getInputProps('email')} required mt="md" />

          <NumberInput label="Phone Number" placeholder="Phone Number" {...form.getInputProps('phone')}  mt="md" />

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
          <div className={classes.file} >
            <label
              htmlFor="avatar"
              className=""
            >
              Choose Profile photo
            </label>
            <div className="mt-1 ">
              <Input
                onChange={uploadeImage}
                id="avatar"
                name="avatar"
                type="file"
                required=""
              />

            </div>

          </div>

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
            <Button type="submit" variant="outline" color="black" className={classes.button}
            >
              <p className={classes.p}>Sign Up</p>
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  )
}

export default SignUp;