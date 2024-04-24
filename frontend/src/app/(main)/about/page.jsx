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

      <Container fluid className={classes.Container} pb={100}>
        <div className={classes.Inner}>
          <Group className={classes.Right}>

            <Title className={clsx(classes.Title, font.className)}>
              Voice <span style={{ color: '#66ff00' }}>&</span> Tour <span style={{ color: '#66ff00' }}>Plugin System</span>
            </Title>
            <p className={clsx(classes.Description, font.className)}> 
            Welcome to Voice & Tour PS , where innovation meets convenience in website navigation. Our cutting-edge platform harnesses the power of voice technology to revolutionize the way users interact with websites. With our intuitive voice-based website assistant, users can effortlessly navigate through website content, access information, and perform actions using simple voice commands. Additionally, our interactive website tour generator allows users to explore websites in a guided and personalized manner, enhancing their browsing experience. Our plugin-based system further extends the functionality of our platform, enabling users to customize their experience according to their preferences. Join us on a journey towards seamless website navigation and unparalleled user convenience with Voice & Tour PS.
            </p>
            <div className={classes.controls}>
            <a href='http://localhost:3000/signup/'>
              <Button className={classes.control} variant="filled" color='white'  radius="md">
                Started for Free
              </Button></a>

          </div>


          </Group>

          <Group >
            <Paper shadow="xs" radius="xs" p="xl" className={classes.Paper}>
              <Card shadow="sm" padding="lg" radius="md" withBorder bg="rgb(22, 18, 18)" className={classes.Card}>
                <Card.Section>
                  <Image src='GAMINg.png' className={classes.image} />
                </Card.Section>
              </Card>
            </Paper>
          </Group>
        </div>
      </Container>


      {/* Hero Section */}
      {/* <div className={classes.wrapper}>
        <Overlay color="#000" opacity={0.2} zIndex={1} />

        <div className={classes.inner}>
          <Title className={clsx(classes.title, font.className)}>
            Voice <span style={{ color: '#66ff00' }}>&</span> Tour <span style={{ color: '#66ff00' }}>Plugin System</span>
            {/* <Text component="span" inherit className={classes.highlight}>
             SYSTEM
          </Text> */}
          {/* </Title> */}

          {/* <Container size={1200}>
            <Text size="lg" className={clsx(classes.description, fonts.className)}>
              Welcome to Voice & Tour PS , where innovation meets convenience in website navigation. Our cutting-edge platform harnesses the power of voice technology to revolutionize the way users interact with websites. With our intuitive voice-based website assistant, users can effortlessly navigate through website content, access information, and perform actions using simple voice commands. Additionally, our interactive website tour generator allows users to explore websites in a guided and personalized manner, enhancing their browsing experience. Our plugin-based system further extends the functionality of our platform, enabling users to customize their experience according to their preferences. Join us on a journey towards seamless website navigation and unparalleled user convenience with Voice & Tour PS.

            </Text>
          </Container>

          <div className={classes.controls}>
            <a href='http://localhost:3000/signup/'>
              <Button className={classes.control} variant="outline" c="#66ff00" size="md" radius="md">
                Started for Free
              </Button></a>

          </div>
        </div> */}
      {/* </div> */} 

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