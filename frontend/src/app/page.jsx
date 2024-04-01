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
  rem
} from "@mantine/core"
import { IconCheck } from "@tabler/icons-react"

import classes from "./page.module.css"
import FeaturesCards from './FeaturesCards'
import Faqsection from './faqSection'


const page = () => {
  return (
    <>
      <section>
        <Container size="md" p={0}>
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                <span className={classes.subtitle} >Welcome to<br /></span>
                {/* <span className={classes.highlight}> */}
                VoiceTour 
                {/* </span>  */}
                Navigator <br />{" "}
                Plugin System
              </Title>
              <Text c="dimmed" mt="md">
              Revolutionizing Website Navigation with Voice Technology
              </Text>

              <List
                mt={30}
                spacing="sm"
                size="sm"
                icon={
                  <ThemeIcon size={20} radius="xl">
                    <IconCheck
                      style={{ width: rem(12), height: rem(12) }}
                      stroke={1.5}
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

              <Group mt={30}>
                <Button radius="xl" size="md" className={classes.control}>
                  Get started
                </Button>
                <Button
                  variant="default"
                  radius="xl"
                  size="md"
                  className={classes.control}
                >
                  Source code
                </Button>
              </Group>
            </div>
            <Image src="hero.png" className={classes.image} />
          </div>
        </Container>
      </section>

        <FeaturesCards/>

      <Faqsection/>

    </>
  )
}

export default page