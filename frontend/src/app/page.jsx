'use client'
import React from 'react'
import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
  Overlay,
  Box,
  BackgroundImage
} from "@mantine/core"
import { IconCheck, IconProgressCheck } from "@tabler/icons-react"

import classes from "./page.module.css"
import FeaturesCards from './FeaturesCards'
import Faqsection from './faqSection'
import cx from 'clsx';
import { GithubIcon } from '@mantinex/dev-icons'
import Navbar from './(main)/navbar'
import { Footer } from './(main)/footer'


const page = () => {
  return (
    <>
    <Navbar/>
      <section  >
        <Box mx="auto" className={classes.box}>

          <Container  >
            <div className={classes.inner}>
              <div className={classes.content}>
                <Title className={classes.title}><span className={classes.highlight}>Welcome to</span> <br /><span className={classes.subtitle}>VoiceTourNavigator </span><br />Plugin System</Title>
                <Text mt="md">
                  Revolutionizing Website Navigation with Voice Technology
                </Text>

                <List className={classes.List} size="md" mt="xl" spacing="sm"

                  icon={
                    <ThemeIcon size={20} radius="xl" style={{backgroundImage: 'linear-gradient(to right, #01fffb, #4cbbff)'}}>
                      <IconCheck
                        style={{ width: rem(12), height: rem(12) }}
                        stroke={5}

                      />
                    </ThemeIcon>
                  }
                >
                  {/* <List.Item>
                  <b>Voice-Based Navigation</b> – build type safe applications, all
                  components and hooks export types
                </List.Item> */}
                  <List.Item>
                    <b>Voice-Based Navigation</b>
                  </List.Item>
                  <List.Item>
                    <b>Personalized Website Tours</b>
                  </List.Item>
                  <List.Item>
                    <b>Plugin Customization</b>
                  </List.Item>
                  <List.Item>
                    <b>Intuitive User Experience</b>
                  </List.Item>
                  <List.Item>
                    <b>Continuous Improvement</b>
                  </List.Item>
                </List>


                <Group className={classes.controls}>
                  <Button
                    size="sm"
                    className={classes.control}
                    variant="filled"
                  >
                    Get started
                  </Button>

                  <Button
                    component="a"
                    href="https://github.com/mantinedev/mantine"
                    size="sm"
                    variant="default"
                    className={classes.control}
                    leftSection={<GithubIcon size={20} />}
                  >
                    GitHub
                  </Button>
                </Group>

              </div>
              <Image src="micimg.png" className={classes.image} />
                
            </div>
          </Container>

        </Box>
      </section>

      <FeaturesCards />

      <Faqsection />

      <Footer/>

    </>
  )
}

export default page