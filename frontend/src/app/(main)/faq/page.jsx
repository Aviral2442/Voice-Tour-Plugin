'use client'
import React, { useState } from 'react'
import {
  Title,
  Container,
  Text,
  UnstyledButton,
  Overlay,
  SimpleGrid,
  Accordion
} from "@mantine/core"
import classes from './faq.module.css'
import faqData from './faqData'
import { ContactIconsList } from '../contact/ContactIcons'
import Lottie from 'lottie-react'
import FAQ from './FAQ.json'

const categories = [
  {
    label: "Voice Assistant FAQ's",
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    label: "Tour Generator FAQ's",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  {
    label: "Website FAQ's",
    image:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  }
]

const Faq = () => {

  const [selFaq, setSelFaq] = useState('voice')
  const [faqList, setFaqList] = useState(faqData[selFaq]);

  const items = categories.map(category => (
    <UnstyledButton
      style={{ backgroundImage: `url(${category.image})` }}
      className={classes.categoryCard}
      key={category.label}
    >
      <Overlay color="#000" opacity={0.6} zIndex={1} />
      <Text size="xl" ta="center" fw={700} className={classes.categoryLabel}>
        {category.label}
      </Text>
    </UnstyledButton>
  ))



  return (
    <>
      <Container className={classes.wrapper} size="lg">
        <div className={classes.header} >
          <div>
            <Title className={classes.Title}>Frequently Asked Questions</Title>
          </div>

          <div className={classes.contact}>
            <Lottie animationData={FAQ} loop={true}  className={classes.image} />
          </div>
        </div>

        <SimpleGrid cols={{ base: 1, sm: 3 }} onClick={open} >{items}</SimpleGrid>

      </Container>
      <Container size="md" className={classes.wrapper}>
        <Title ta="center" className={classes.title}>
          Frequently Asked Questions
        </Title>

        <Accordion variant="separated">
          {
            faqList.map((faqItem, index) => (
              <Accordion.Item className={classes.item} value={faqItem.title} key={index}>
                <Accordion.Control>{faqItem.title}</Accordion.Control>
                <Accordion.Panel>{faqItem.description}</Accordion.Panel>
              </Accordion.Item>
            ))
          }

        </Accordion>
      </Container>
    </>
  )
}

export default Faq