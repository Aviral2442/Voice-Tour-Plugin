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
import Waitingforwhat from './waitingforwhat'
import HeroBulletLeft from './HeroBulletLeft'
import HeroBulletRight from './HeroBulletRight'
import VoiceitWorks from './voiceitWorks'
import VoiceFAQ from './voiceFAQ'

const page = () => {
  return (
    <div style={{overflowX:'hidden'}}>
      <>
        <Navbar />

        <Container>
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                Voice Assistant Plugin System
              </Title>
              <Text c="#FFFFFF" mt="md">
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
                  Enable Voice Assistant
                </Button>
                <Button
                  variant="default"
                  radius="xl"
                  size="md"
                  className={classes.control}
                >
                  Preview
                  &nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#65FF00" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                    <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                  </svg>
                </Button>
              </Group>
            </div>
            {/* <Image src={image.src} className={classes.image} /> */}
            <Image src="voicecommand.png" className={classes.image} />
          </div>
        </Container>


        <VisionMission />

        <HeroBulletLeft />
        
        <HeroBulletRight />
        <VoiceitWorks />


        <Waitingforwhat />
        <br />

        <VoiceFAQ />

        <Footer />
      </>
    </div>

  )
}

export default page