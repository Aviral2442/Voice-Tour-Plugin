'use client';
import React from 'react'
import { Paper, Text, TextInput, Textarea, Button, Group, SimpleGrid, Container } from '@mantine/core';
import { ContactIconsList } from './ContactIcons';
// import bg from './bg.svg';
import classes from './GetInTouch.module.css';


const Contact = () => {
  return (
    <Container size={1000} mt={120} mb={120}>
      <Paper shadow="md" radius="lg">
        <div className={classes.wrapper}>
          <div className={classes.contacts}>
            <Text fz="lg" fw={700} className={classes.title} c="black">
              Contact information
            </Text>

            <ContactIconsList />
          </div>

          <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
            <Text fz="lg" fw={700} className={classes.title}>
              Get in touch
            </Text>

            <div className={classes.fields}>
              <SimpleGrid cols={{ base: 1, sm: 2 }}>
                <TextInput label="Your name" placeholder="Your name" />
                <TextInput label="Your email" placeholder="hello@mantine.dev" required />
              </SimpleGrid>

              <TextInput mt="md" label="Subject" placeholder="Subject" required />

              <Textarea
                mt="md"
                label="Your message"
                placeholder="Please include all relevant information"
                minRows={3}
              />

              <Group justify="flex-end" mt="md">
                <Button type="submit" className={classes.control}>
                  Send message
                </Button>
              </Group>
            </div>
          </form>
        </div>
      </Paper>
    </Container>
  )
}

export default Contact