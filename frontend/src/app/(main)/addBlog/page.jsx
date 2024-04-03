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
import classes from './addBlog.module.css'

const Addblog = () => {
  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Blog Post
      </Title>


      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(signupSubmit)}>
          <TextInput label="Title" required />
          <TextInput label="Description" required />

          <Button fullWidth mt="xl">
            Post Upload
          </Button>
        </form>
      </Paper>
    </Container>
  )
}

export default Addblog