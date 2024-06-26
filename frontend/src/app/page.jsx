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
  Box,
  Menu,
  Center,
  Flex
} from "@mantine/core"
import { IconCheck, IconMicrophone, IconProgressCheck, IconTournament } from "@tabler/icons-react"

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
import { Allura, Josefin_Sans, Jost, Poppins, Rammetto_One, Whisper } from 'next/font/google'
import clsx from 'clsx'
import UseCases from './UseCases'
import Keyfeatures from './Keyfeatures'
import Link from 'next/link'

const fontbutton = Jost({ subsets: ['latin'], weight: ['100', '400'] });
const font = Rammetto_One({ subsets: ['latin'], weight: ['400'] });
const whisper = Poppins({ subsets: ['latin'], weight: ['100', '400'] });
const fontss = Josefin_Sans({ subsets: ['latin'], weight: ['100', '400'] });

const Page = () => {


  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Navbar />


      <Box mx="auto" className={classes.Box} >
        <Container size='lg'>
          <div className={classes.inner}>
            <div className={classes.content} data-aos="fade-up">
              <Title className={classes.title}><span className={clsx(classes.highlight, whisper.className)}>Welcome to</span> <br />
                <span className={clsx(classes.subtitle, font.className)}>VoiceTourNavigator</span><br />
                Plugin System</Title>
              <Text mt="md" size='lg' className={clsx(classes.description, fontss.className)}>
                Revolutionizing Website Navigation with Voice Technology
              </Text>

              <List className={clsx(classes.List, fontss.className)} size="md" mt="xl" spacing="sm"
                icon={
                  <ThemeIcon size={20} radius="xl" style={{ backgroundColor: '#ADFF2F' }} >
                    <IconCheck
                      style={{ width: rem(12), height: rem(12) }}
                      stroke={5}
                      color='black'
                    />
                  </ThemeIcon>
                }
              >

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


              <Group className={clsx(classes.controls, fontbutton.className)} >
                <Menu position="right" offset={1} withArrow arrowPosition="center" >
                  <Menu.Target>
                    <Button
                      size="sm"
                      className={classes.controlfirst}
                      variant="outline"
                      color='#ADFF2F'
                      radius="md"
                      fz={18}
                    >
                      Get started
                    </Button>
                  </Menu.Target>
                  <Menu.Dropdown bg={"#262525"} w={190} ta={"center"}>

                    <Menu.Item
                      component={Link}
                      href="/voiceDOCs"
                      ta={"center"}
                      c={"#ADFF2F"}
                      fz={18}
                      className={fontbutton.className}
                    >
                      Voice DOCs
                    </Menu.Item>
                    <Menu.Item
                      component={Link}
                      href="/tourDOCs"
                      ta={"center"}
                      c={"#ADFF2F"}
                      fz={18}
                      className={fontbutton.className}
                    >
                      Tour DOCs
                    </Menu.Item>

                  </Menu.Dropdown>
                </Menu>


                <Button
                  component={Link}
                  href="https://github.com/Aviral2442/Voice-Tour-Plugin"
                  size="sm"
                  variant="outline"
                  color='#ADFF2F'
                  radius="md"
                  fz={18}
                  className={classes.control}
                  leftSection={<GithubIcon size={24} />}
                >
                  GitHub
                </Button>
              </Group>

            </div>
            <Image src="voicesearchmain.jpg" alt='voice search ' className={classes.image} data-aos="fade-up" />

          </div>
        </Container>

      </Box>


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

export default Page