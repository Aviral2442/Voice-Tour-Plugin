'use client'
import React from 'react'
import Navbar from '../navbar'
import { Footer } from '../footer'
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
// import image from "./image.svg"
import classes from "./voiceAssistant.module.css"
import VisionMission from './visionMission'
import Faq from './faq'

const page = () => {
  return (
    <div>
      <>
        <Navbar />

        <Container>
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                Voice <span className={classes.highlight}>Assistant</span> Plugin <br />{" "}
                {/* Welcome to the */}
              </Title>
              <Text c="dimmed" mt="md">
                Where you'll embark on a journey into the future of website navigation. Our innovative Voice Assistant feature revolutionizes the way you interact with websites by harnessing the power of natural language commands. Say goodbye to cumbersome mouse clicks and keyboard typing – with our Voice Assistant, browsing becomes intuitive and effortless.</Text>

              {/* <List
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
            <List.Item>
              <b>TypeScript based</b> – build type safe applications, all
              components and hooks export types
            </List.Item>
            <List.Item>
              <b>Free and open source</b> – all packages have MIT license, you
              can use Mantine in any project
            </List.Item>
            <List.Item>
              <b>No annoying focus ring</b> – focus ring will appear only when
              user navigates with keyboard
            </List.Item>
          </List> */}

              <Group mt={30}>
                <Button radius="xl" size="md" className={classes.control}>
                  Start For free
                </Button>
                <Button
                  variant="default"
                  radius="xl"
                  size="md"
                  className={classes.control}
                >
                  Customize
                </Button>
              </Group>
            </div>
            {/* <Image src={image.src} className={classes.image} /> */}
          </div>
        </Container>


        <VisionMission />

        <Faq />


        <br />
        <Footer />
      </>
    </div>

  )
}

export default page