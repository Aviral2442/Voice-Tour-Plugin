'use client'
import { Container, Title, Accordion } from "@mantine/core"
import classes from "./voicetestimonials.module.css"
import React from 'react'

const voicetestimonial = () => {
  return (
    <Container size="sm" className={classes.wrapper}>
    <Title ta="center" className={classes.title}>
      Frequently Asked Questions
    </Title>

    <Accordion variant="separated">
      <Accordion.Item className={classes.item} value="reset-password">
        <Accordion.Control>How can I reset my password?</Accordion.Control>
        <Accordion.Panel>{placeholder}</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item className={classes.item} value="another-account">
        <Accordion.Control>
          Can I create more that one account?
        </Accordion.Control>
        <Accordion.Panel>{placeholder}</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item className={classes.item} value="newsletter">
        <Accordion.Control>
          How can I subscribe to monthly newsletter?
        </Accordion.Control>
        <Accordion.Panel>{placeholder}</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item className={classes.item} value="credit-card">
        <Accordion.Control>
          Do you store credit card information securely?
        </Accordion.Control>
        <Accordion.Panel>{placeholder}</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item className={classes.item} value="payment">
        <Accordion.Control>
          What payment systems to you work with?
        </Accordion.Control>
        <Accordion.Panel>{placeholder}</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  </Container>
  )
}

export default voicetestimonial