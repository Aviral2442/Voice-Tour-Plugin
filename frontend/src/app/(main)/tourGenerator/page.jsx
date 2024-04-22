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
import classes from "./tourGenerator.module.css"
import VisionMission from './visionMission'
import Waitingforwhat from './waitingforwhat'
import HeroBulletRight from './HeroBulletRight'
import HeroBulletLeft from './HeroBulletLeft'
import TourFAQ from './tourFAQ'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <>
        <Navbar />

        <Container className={classes.mainContainer}>
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                Tour <span className={classes.highlight}>Generator</span> Plugin <br />{" "}
                {/* Welcome to the */}
              </Title>
              <Text c="dimmed" mt="md">
                Where you'll embark on a journey into the future of website navigation. Our innovative Voice Assistant feature 
                revolutionizes the way you interact with websites by harnessing the power of natural language commands. Say goodbye to 
                cumbersome mouse clicks and keyboard typing – with our Voice Assistant, browsing becomes intuitive and effortless.
              </Text>

              <Group mt={30}>
                <Button
                  radius="xl"
                  size="md"
                  className={classes.control}
                  component={Link}
                  href="/user/generate-tour"
                >
                  Generate Tour
                  &nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#65FF00" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                    <path d="M11 13l9 -9" />
                    <path d="M15 4h5v5" />
                  </svg>
                </Button>
                <Button
                  variant="default"
                  radius="xl"
                  size="md"
                  className={classes.control}
                  component={Link}
                  href="http://127.0.0.1:5500/tourPreview/index.html"
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
            <Image src='tourSec1.png' className={classes.image}/>
          </div>
        </Container>


        <VisionMission />

        <HeroBulletRight />

        <HeroBulletLeft />


        <Waitingforwhat />
        <br />

        <TourFAQ />

        <Footer />
      </>
    </div>

  )
}

export default page