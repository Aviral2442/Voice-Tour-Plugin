'use client';
import React from 'react'
import { Paper, Text, TextInput, Textarea, Button, Group, SimpleGrid, Container, Box } from '@mantine/core';
import { ContactIconsList } from './ContactIcons';
import classes from './GetInTouch.module.css';
import Navbar from '../navbar';
import { Footer } from '../footer';
import { Input } from 'postcss';


const Contact = () => {

  return (
    <Box >
      <Navbar />

      <Container size={1000}  mt={120} mb={120}>
        <Paper shadow="md" radius="lg" >
          <div className={classes.wrapper}>
            <div className={classes.contacts}>
              <Text fz="lg" fw={700} className={classes.title} c="black">
                Contact Details
              </Text>

              <ContactIconsList />
            </div>

            <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
              <Text fz="lg" fw={700} className={classes.title}>
                Get in touch
              </Text>

              <div className={classes.fields}>
                <SimpleGrid cols={{ base: 1, sm: 2 }}>
                  <TextInput label="Your name" placeholder="Your name"   />

                  <TextInput label="Your email" placeholder="hellovoicetour.com" required />
                </SimpleGrid>

                <TextInput mt="md" label="Subject" placeholder="Subject" required />

                <Textarea
                  mt="md"
                  label="Your message"
                  placeholder="Please include all relevant information"
                  minRows={3}
                />

                <Group justify="flex-end" mt="md">
                  <Button type="submit" variant='outline' color='#66ff00'
                    className={classes.control}>
                    Send message
                  </Button>
                </Group>
              </div>
            </form>
          </div>
        </Paper>
      </Container>

      <Footer />
    </Box>
  )
}

export default Contact