'use client'
import { Container, Title } from '@mantine/core';
import React from 'react'
import classes from './about.module.css'

const About = () => {
  return (
    <>
    <Container  pt={80} >
      <Title order={1} className={classes.Title} >Voice & Tour Plugin System</Title>
    </Container>
    <Container>
      <p>Welcome to [Your Website Name], where innovation meets convenience in website navigation. Our cutting-edge platform harnesses the power of voice technology to revolutionize the way users interact with websites. With our intuitive voice-based website assistant, users can effortlessly navigate through website content, access information, and perform actions using simple voice commands. Additionally, our interactive website tour generator allows users to explore websites in a guided and personalized manner, enhancing their browsing experience. Our plugin-based system further extends the functionality of our platform, enabling users to customize their experience according to their preferences. Join us on a journey towards seamless website navigation and unparalleled user convenience with [Your Website Name]</p>
    </Container>
    </>
  )
}

export default About;