'use client'
import React from 'react'
import classes from './about.module.css'
import Navbar from '../navbar';
import { Footer } from '../footer';
import cx from "clsx"
import { Title, Text, Container, Button, Overlay } from "@mantine/core"
import Testimonial from '@/app/Testimonial';
import { StatsRing } from './progress';
import VoiceIntro from './voiceIntro';

const About = () => {
  return (
    <>

    {/* Navbar */}
    <Navbar />


    {/* Hero Section */}
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.2} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
        Voice & Tour Plugin System
          {/* <Text component="span" inherit className={classes.highlight}>
             SYSTEM
          </Text> */}
        </Title>

        <Container size={1200}>
          <Text size="lg" className={classes.description}>
          Welcome to Voice & Tour PS , where innovation meets convenience in website navigation. Our cutting-edge platform harnesses the power of voice technology to revolutionize the way users interact with websites. With our intuitive voice-based website assistant, users can effortlessly navigate through website content, access information, and perform actions using simple voice commands. Additionally, our interactive website tour generator allows users to explore websites in a guided and personalized manner, enhancing their browsing experience. Our plugin-based system further extends the functionality of our platform, enabling users to customize their experience according to their preferences. Join us on a journey towards seamless website navigation and unparalleled user convenience with Voice & Tour PS.

          </Text>
        </Container>

        <div className={classes.controls}>
          <a href='http://localhost:3000/signup/'>
          <Button className={classes.control} variant="white" size="lg">
            Started for Free
          </Button></a>
          
        </div>
      </div>
    </div>

    {/* Progress Bar */}
    <StatsRing />

    {/* Voice Introduction */}
    <VoiceIntro />

    {/* Testimonial */}
    
    <Testimonial />

    {/* Footer */}
    <Footer />
    </>
  )
}

export default About;