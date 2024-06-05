'use client'
import React, { useState } from 'react'
import { TextInput, Textarea, SimpleGrid, Group, Title, Button, Container, Text, NativeSelect, FileInput, Divider } from '@mantine/core';
import { useForm } from '@mantine/form';

const Feedback = () => {

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      details: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  const [value, setValue] = useState('');
  return (
    <Container size="md" mt={20} mb={20}>
      <form onSubmit={form.onSubmit(() => { })}>
        <Title
          order={2}
          size="h1"
          style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
          fw={900}

        >
          User Feedback and Improvement Suggestions Form
        </Title>
        <Text mt={10}>
          We highly value your feedback and suggestions as they help us improve our Voice Navigation Plugin. Please take a moment to fill out this form with your thoughts and ideas.
        </Text>

        <Divider my="md" mt={30} />
        <Text mt={30} mb={10} fw={900}>
          Contact Information
        </Text>
        <SimpleGrid cols={{ base: 1, sm: 2 }} >
          <TextInput
            label="Name"
            placeholder="Your name"
            name="name"
            variant="filled"
            {...form.getInputProps('name')}
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            name="email"
            variant="filled"
            {...form.getInputProps('email')}
          />
        </SimpleGrid>

        <NativeSelect
          label="Feedback Category"
          value={value}
          mt="md"
          variant="filled"
          onChange={(event) => setValue(event.currentTarget.value)}
          data={[
            { label: 'Please select a category', value: 'please-select-a-category' },
            { label: 'General Feedback', value: 'general-feedback' },
            { label: 'Bug Report', value: 'bug-report' },
            { label: 'Feature Request', value: 'reature-request' },
            { label: 'Other', value: 'other' },
          ]}
        />


        <Divider my="md" mt={30} />
        <Text mt={30} mb={10} fw={900}>
          Feedback Details
        </Text>
        <TextInput
          label="Subject "
          placeholder="Briefly describe your feedback or suggestion"
          name="subject"
          variant="filled"
          {...form.getInputProps('subject')}
        />
        <Textarea
          mt="md"
          label="Details"
          placeholder="Please provide detailed information about your feedback, suggestion, or issue. If you're reporting a bug, include steps to reproduce the problem.
          "
          maxRows={10}
          minRows={5}
          autosize
          name="details"
          variant="filled"
          {...form.getInputProps('detals')}
        />

        <Divider my="md" mt={30} />
        <Text mt={30} mb={10} fw={900}>
          Attachment (Optional)
        </Text>
        <FileInput
          variant="filled"
          label="Attach a file"
          placeholder="Upload any relevant screenshots, documents, or files to support your feedback. "
        />

        <NativeSelect
          value={value}
          mt="md"
          label="User Experience Rating"
          variant="filled"
          onChange={(event) => setValue(event.currentTarget.value)}
          data={['How would you rate your overall experience with our Voice Navigation Plugin?', 'Excellent', 'Good', 'Fair', 'Poor']}
        />

        <Divider my="md" mt={30} />
        <Text mt={30} mb={10} fw={900}>
          Additional Comments
        </Text>
        <Textarea
          mt="md"
          label="Comments"
          placeholder="Any additional comments or suggestions? "
          maxRows={10}
          minRows={5}
          autosize
          name="comments"
          variant="filled"
          {...form.getInputProps('comments')}
        />
        <Group mt="xl">
          <Button type="submit" size="md">
            Submit
          </Button>
        </Group>
        
        <Divider my="md" mt={30} />

        <Text mt={30}>
          Thank you for taking the time to share your feedback. We appreciate your input and will review your submission to continue improving our services and products.
        </Text>
      </form>
    </Container>
  )
}

export default Feedback