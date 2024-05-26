'use client'
import { Text, Title } from '@mantine/core'
import React from 'react'
import classes from './getstarted.module.css'

const TourDoc = () => {
  return (
    <div className={classes.mainContainer} >
      {/* <Title order={1} c="#ffffff" >Getting started</Title> */}

      <Title pt={'20'} order={1} c="#ffffff">Welcome to the Tour Generator</Title>

      <Title order={3} className={classes.title} mt={10}>Introduction</Title>
      <Text className={classes.para} >Welcome to <span style={{ color: '#4dabf7' }} ><a href='/tourGenerator' >Tour Generator</a></span>, where we prioritize seamless navigation and exceptional user
        experiences. As the digital landscape evolves, providing users with intuitive ways to explore and interact with your website
        has become increasingly important. That&apos;s why we&apos;re thrilled to introduce our innovative Tour Plugin—a powerful tool designed
        to transform the way users navigate and engage with your website.</Text>
      <br />

      <Title order={5} c="#4dabf7">Introducing the Solution</Title>
      <Text className={classes.para} >Enter the Tour Plugin—a dynamic and versatile solution that addresses the inherent complexities
        of website navigation. Our plugin empowers website owners and administrators to create interactive guided tours that lead users
        through the key features, functionalities, and content of their websites in a structured and engaging manner.</Text>
      <br />
      <Text className={classes.para} >we believe that exceptional user experiences are the cornerstone of a successful website. With our
        Tour Plugin, you can elevate your website navigation, engage your audience, and leave a lasting impression on your visitors.
        Join us in revolutionizing the way users explore and interact with websites—one guided tour at a time.</Text>
      <br />
      <Text className={classes.para} >With the Tour Plugin, you can transform your website into a user-friendly and immersive
        destination that keeps visitors coming back for more.</Text>

      <Title order={3} className={classes.title} mt={10}>What is the Tour Generator ?</Title>
      <Text className={classes.para} >The Tour Generator is a dynamic tool integrated into our website that empowers users to create interactive
        guided tours. These tours serve as navigational aids, allowing visitors to explore and understand key features, content, or
        functionalities of the website in a structured manner.</Text>

      <Title order={3} className={classes.title} mt={10}> Key Features </Title>
      <Text className={classes.para} >The Tour Generator is a feature-rich component designed to elevate user engagement and enhance the browsing experience.
        Here&apos;s what you need to know:</Text>
      <ul className={classes.list}>
        <li><span style={{ color: '#4dabf7' }} >Interactive Tours -</span> Users can create step-by-step guided tours with ease.</li>
        <li><span style={{ color: '#4dabf7' }} >Customization Options -</span> Tailor tours to match website branding and design preferences.</li>
        <li><span style={{ color: '#4dabf7' }} >Easy Tour Creation -</span> Intuitive interface allows for easy creation and management of tours
          without the need for technical expertise.</li>
        <li><span style={{ color: '#4dabf7' }} >Simple Setup -</span> Intuitive interface ensures easy tour creation and management.</li>
        <li><span style={{ color: '#4dabf7' }} >Tour Analytics -</span> Track user interactions with tours and gain insights into user engagement and behavior to optimize tour effectiveness.</li>
        <li><span style={{ color: '#4dabf7' }} >Enhanced User Experience -</span> Guided tours lead to improved engagement and understanding
          of website content.</li>
        <li><span style={{ color: '#4dabf7' }} >Flexible Tour Sequencing -</span> Define the sequence of tour steps to ensure a logical and informative flow for users navigating your website.</li>
        <li><span style={{ color: '#4dabf7' }} >Seamless Integration -</span> Effortlessly integrate the Tour Generator into your website for a personalized
          browsing experience.</li>
        <li><span style={{ color: '#4dabf7' }} >Responsive Design -</span> Tours are optimized for various devices and screen sizes, ensuring a seamless experience across desktops, tablets, and mobile devices.</li>
        <li><span style={{ color: '#4dabf7' }} >Embeddable Shortcodes -</span> Easily embed tours into any page or post on your website using generated shortcodes, allowing for seamless integration with existing content.</li>
      </ul>

    </div>
  )
}

export default TourDoc