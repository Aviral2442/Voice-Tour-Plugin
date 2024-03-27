'use client'
import React from 'react';
import { useToggle, upperFirst, useInputState } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Container,
  Box,
  Center,
  Progress,
} from '@mantine/core';
import { GoogleButton } from './GoogleButton';
import { TwitterButton } from './TwitterButton';
import Link from 'next/link';
import { IconX } from '@tabler/icons-react';
import { IconCheck } from '@tabler/icons-react';

function PasswordRequirement({ meets, label }) {
  return (
    <Text component="div" c={meets ? 'teal' : 'red'} mt={5} size="sm">
      <Center inline>
        {meets ? <IconCheck size="0.9rem" stroke={1.5} /> : <IconX size="0.9rem" stroke={1.5} />}
        <Box ml={7}>{label}</Box>
      </Center>
    </Text>
  );
}

const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];

function getStrength(password) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 0);
}


export function Signup(props) {

  const [value, setValue] = useInputState('');
  const strength = getStrength(value);
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
  ));
  const bars = Array(4)
    .fill(0)
    .map((_, index) => (
      <Progress
        styles={{ section: { transitionDuration: '0ms' } }}
        value={
          value.length > 0 && index === 0 ? 100 : strength >= ((index + 1) / 4) * 100 ? 100 : 0
        }
        color={strength > 80 ? 'teal' : strength > 50 ? 'yellow' : 'red'}
        key={index}
        size={4}
      />
    ));

  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  return (
    <div>
      <Container size={500} mt={50} px={0} >
        <Paper radius="md" p="xl" withBorder {...props} size="xxs" shadow='md'>
          <Text size="lg" fw={500}>
            Welcome to Mantine, Register with
          </Text>

          <Group grow mb="md" mt="md">
            <GoogleButton radius="xl">Google</GoogleButton>
            <TwitterButton radius="xl">Twitter</TwitterButton>
          </Group>

          <Divider label="Or continue with email" labelPosition="center" my="lg" />

          <form onSubmit={form.onSubmit(() => { })}>
            <Stack>
                <TextInput
                  label="Name"
                  placeholder="Your name"
                  value={form.values.name}
                  onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                  radius="md"
                />
              

              <TextInput
                required
                label="Email"
                placeholder="hello@mantine.dev"
                value={form.values.email}
                onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                error={form.errors.email && 'Invalid email'}
                radius="md"
              />

              <PasswordInput
                value={value}
                onChange={setValue}
                placeholder="Your password"
                label="Password"
                required
              />

              <Group gap={5} grow mt="xs" mb="md">
                {bars}
              </Group>

              <PasswordRequirement label="Has at least 6 characters" meets={value.length > 5} />
              {checks}

              
                <Checkbox
                  label="I accept terms and conditions"
                  checked={form.values.terms}
                  onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                />
              
            </Stack>

            <Group justify="space-between" mt="xl">
              <Anchor component={Link} type="button" c="dimmed" href="/login" size="xs">
                Already have an account? Login
              </Anchor>
              <Button type="submit" radius="xl">
                Register
              </Button>
            </Group>
          </form>
        </Paper>
      </Container>
    </div>
  )
}

export default Signup