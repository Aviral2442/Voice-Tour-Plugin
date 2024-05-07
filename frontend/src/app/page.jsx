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
import 'aos/dist/aos.css'
import Testimonial from './Testimonial'
import HeroBulletRight from './HeroBulletRight'
import HeroBulletLeft from './HeroBulletLeft'
import { Poppins, Rammetto_One, Whisper } from 'next/font/google'
import clsx from 'clsx'
import UseCases from './UseCases'
import Keyfeatures from './Keyfeatures'

const whisper = Poppins({ subsets: ['latin'], weight: ['100', '400'] });
const font = Rammetto_One({ subsets: ['latin'], weight: ['400'] });

const page = () => {


  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Navbar />
      <section  >
        <Box mx="auto" className={classes.Box} >

          <Container size='lg'>
            <div className={classes.inner}>
              <div className={classes.content} data-aos="fade-up">
                <Title className={classes.title}><span className={clsx(classes.highlight, whisper.className)}>Welcome to</span> <br />
                  <span className={clsx(classes.subtitle, font.className)}>VoiceTourNavigator </span><br />
                  Plugin System</Title>
                <Text mt="md" className={classes.description}>
                  Revolutionizing Website Navigation with Voice Technology
                </Text>

                <List className={classes.List} size="md" mt="xl" spacing="sm"

                  icon={
                    <ThemeIcon size={20} radius="xl" style={{ backgroundColor: '#66FF00' }} >
                      <IconCheck
                        style={{ width: rem(12), height: rem(12) }}
                        stroke={5}
                        color='black'
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
                    component="a"
                    href="/"
                    size="sm"
                    className={classes.controlfirst}
                    variant="filled"
                    color='white'
                    radius="md"
                  >
                    Get started
                  </Button>

                  <Button
                    component="a"
                    href="https://github.com/Aviral2442/Voice-Tour-Plugin"
                    size="sm"
                    variant="outline"
                    color='white'
                    radius="md"
                    className={classes.control}
                    leftSection={<GithubIcon size={20} />}
                  >
                    GitHub
                  </Button>
                </Group>

              </div>
              <Image src="voicesearchmain.jpg" className={classes.image} data-aos="fade-up" />

            </div>
          </Container>

        </Box>
      </section>

      <FeaturesCards />

      <UseCases />

      <Keyfeatures />
      
      <HeroBulletRight />

      <HeroBulletLeft />


      <Testimonial />

      <Faqsection />


      <Footer />


    </>
  )
}

export default page