'use client'
import { Anchor, Text, Title } from '@mantine/core'
import React from 'react'
import classes from './help.module.css'


const HelpCenter = () => {
  return (

    <div className={classes.mainContainer}>
      <Title order={1} mb={8} c="#ffffff">Voice & Tour Help Center</Title>

      <Text className={classes.para} >The Tour Generator is a feature-rich component designed to elevate user engagement and enhance the browsing experience.
        Here&apos;s what you need to know:</Text>

      <div className="help-center-page">
        <h1 style={{ color: '#ffffff' }} > Help Center</h1>
        <section className="help-category">
          <Title mb={8} className={classes.title}>Tour Generator</Title>
          <Text mb={12} className={classes.para}>Explore resources and find answers to common questions about using the Tour Generator.</Text>
          <Anchor href=''>FAQ</Anchor><br />
          <Anchor href="/troubleshooting">Troubleshooting</Anchor><br />
          <Anchor href="/community-support">Community Forums</Anchor><br />
          <Anchor href="/contact">Contact Us</Anchor><br />
        </section>
        <section className="help-category">
          <Title mt={13} mb={8} className={classes.title}>Account Management</Title>
          <Text mb={12} className={classes.para}>Learn how to manage your account settings, subscriptions, and billing information.</Text>
          <Anchor href="/account-settings">Account Settings</Anchor><br />
          <Anchor href="/subscriptions">Subscriptions</Anchor><br />
          <Anchor href="/billing">Billing</Anchor><br />
        </section>
      </div>
    </div>
  )
}

export default HelpCenter
