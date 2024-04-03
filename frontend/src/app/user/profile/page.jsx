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
import classes from './webPage.module.css'

const WebPage = () => {
  return (
    <Container size={420} my={40}>
    <Title ta="center" className={classes.title}>
     Create Profile
    </Title>
    {/* <Text c="dimmed" size="sm" ta="center" mt={5}>
      Do not have an account yet?{" "}
      <Anchor size="sm" component="button">
        Fill the Form
      </Anchor>
    </Text> */}

    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
      <TextInput label="Name" placeholder="Enter your name " required />
      <TextInput label="Address" placeholder="Enter your address" required />
      <TextInput label="Description" placeholder="Enter your description" required />
      
      {/* <Group justify="space-between" mt="lg">
        <Checkbox label="Remember me" />
        <Anchor component="button" size="sm">
          Forgot password?
        </Anchor>
      </Group> */}
      <Button fullWidth mt="xl">
        Upload Profile
      </Button>
    </Paper>
  </Container>
  )
}

export default WebPage;