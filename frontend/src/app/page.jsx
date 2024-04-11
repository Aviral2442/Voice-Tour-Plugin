'use client'
import React, { useEffect } from 'react'
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
import Aos from 'aos'
// import AOS from 'aos'
import 'aos/dist/aos.css'
import Testimonial from './Testimonial'
import HeroBulletRight from './HeroBulletRight'
import HeroBulletLeft from './HeroBulletLeft'




const page = () => {


  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Navbar />
      <section  >
        <Box mx="auto" className={classes.box}>

          <Container  >
            <div className={classes.inner}>
              <div className={classes.content} data-aos="fade-up">
                <Title className={classes.title}><span className={classes.highlight}>Welcome to</span> <br /><span className={classes.subtitle}>VoiceTourNavigator </span><br />Plugin System</Title>
                <Text mt="md">
                  Revolutionizing Website Navigation with Voice Technology
                </Text>

                <List className={classes.List} size="md" mt="xl" spacing="sm"

                  icon={
                    <ThemeIcon size={20} radius="xl" style={{ backgroundColor: '#90CDB7' }} >
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
                    variant="outline"
                    color='white'
                  >
                    Get started
                  </Button>

                  <Button
                    component="a"
                    href="https://github.com/mantinedev/mantine"
                    size="sm"
                    variant="outline"
                    color='white'
                    className={classes.control}
                    leftSection={<GithubIcon size={20} />}
                  >
                    GitHub
                  </Button>
                </Group>

              </div>
              <Image src="herosection.png" className={classes.image} data-aos="fade-up" />

            </div>
          </Container>

        </Box>
      </section>

      <FeaturesCards />

      <HeroBulletRight/>

      <HeroBulletLeft/>

      <Faqsection />

     <Testimonial />

      <Footer />

    </>
  )
}

export default page