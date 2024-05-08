'use client'
import { Autocomplete, Text, Title } from '@mantine/core'
import React from 'react'
import classes from './helpCenter.module.css'
import { IconSearch } from '@tabler/icons-react'


const HelpCenter = () => {
  return (
    
    <div className={classes.mainContainer}>
      <Title pt={'20'} order={1} c="#ffffff">Voice & Tour Help Center</Title>
      <br/>
      <Text className={classes.para} >The Tour Generator is a feature-rich component designed to elevate user engagement and enhance the browsing experience. 
      Here's what you need to know:</Text>

      {/* <Autocomplete
            className={classes.search}
            placeholder="Search"
            leftSection={<IconSearch />}
            data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
            visibleFrom="xs"
          /> */}

      <div className="help-center-page">
            <h1>Help Center</h1>
            <section className="help-category">
                <h2>Tour Generator</h2>
                <p>Explore resources and find answers to common questions about using the Tour Generator.</p>
                <a href=''>FAQ</a><br/>
                <a href="/troubleshooting">Troubleshooting</a><br/>
                <a href="/community-support">Community Forums</a><br/>
                <a href="/contact">Contact Us</a><br/>
            </section>
            <section className="help-category">
                <h2>Account Management</h2>
                <p>Learn how to manage your account settings, subscriptions, and billing information.</p>
                <a href="/account-settings">Account Settings</a><br/>
                <a href="/subscriptions">Subscriptions</a><br/>
                <a href="/billing">Billing</a><br/>
            </section>
            {/* Add more help categories and links as needed */}
        </div>

    </div>
    
  )
}

export default HelpCenter
