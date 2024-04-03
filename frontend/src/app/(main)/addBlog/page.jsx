'use client'
import React from 'react'
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button
} from "@mantine/core"
import classes from './addBlog.module.css'

const Addblog = () => {
  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Blog Post
      </Title>


      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form>
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