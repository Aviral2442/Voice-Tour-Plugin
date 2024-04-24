'use client'
import React from 'react'
import classes from './about.module.css'
import Navbar from '../navbar';
import { Footer } from '../footer';
import cx from "clsx"
import { Title, Text, Container, Button, Overlay, Group, Paper, Card, Image } from "@mantine/core"
import Testimonial from '@/app/Testimonial';
import { StatsRing } from './progress';
import VoiceIntro from './voiceIntro';
import Whychoose from './whychoose';
import { Cormorant_Garamond, Josefin_Sans, Rammetto_One } from 'next/font/google';
import clsx from 'clsx';

const fonts = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });
const font = Josefin_Sans({ subsets: ['latin'], weight: ['400'] });
const fontss = Rammetto_One({ subsets: ['latin'], weight: ['400'] });


const About = () => {

  return (
    <>

      {/* Navbar */}
      <Navbar />
      <div className={classes.wrapper1}>
        <Title className={clsx(classes.title1, fontss.className)}>About <span style={{ color: '#66ff00' }}>Us</span></Title>
      </div>

      {/* Hero Section */}
      <div className={classes.wrapper}>
        <Overlay color="#000" opacity={0.2} zIndex={1} />

        <div className={classes.inner}>
          <Title className={clsx(classes.title, font.className)}>
            Voice <span style={{ color: '#66ff00' }}>&</span> Tour <span style={{ color: '#66ff00' }}>Plugin System</span>
            {/* <Text component="span" inherit className={classes.highlight}>
              SYSTEM
            </Text> */}
          </Title>

          <Container size={1200}>
            <Text size="lg" className={clsx(classes.description, fonts.className)}>
              Welcome to Voice & Tour PS, where website navigation gets a futuristic upgrade. Our platform integrates cutting-edge voice technology, transforming how users interact with websites. With our intuitive voice assistant, navigating, accessing information, and executing commands becomes effortless. Explore websites with our personalized tour generator, enhancing your browsing experience. Our plugin system lets you tailor your journey. Experience seamless navigation and unmatched convenience with Voice & Tour PS.

            </Text>
          </Container>
          <div className={classes.controls}>
            <a href='http://localhost:3000/signup/'>
              <Button className={classes.control} variant="filled" color='white' radius="md">
                Started for Free
              </Button></a>

          </div>

        </div>
      </div>

      {/* Progress Bar */}
      <StatsRing />

      {/* Voice Introduction */}
      <VoiceIntro />

      {/* Why Choose us */}
      <Whychoose />

      {/* Testimonial */}

      <Testimonial />

      {/* Footer */}
      <Footer />
    </>
  )
}

export default About;