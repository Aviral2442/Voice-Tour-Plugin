'use client'
import React from 'react'
import {
    Image,
    Text,
    Container,
    ThemeIcon,
    Title,
    SimpleGrid
  } from "@mantine/core"
// import IMAGES from "./images"
import classes from './useCase.module.css'

const data = [
    {
      image: "auditors",
      title: "Effortless Website Exploration",
      description:
        "Explore websites hands-free using our Voice Assistant feature. Whether you're browsing articles, shopping for products, or researching information, our intuitive assistant makes navigation seamless."
    },
    {
      image: "lawyers",
      title: "Guided Website Tours",
      description: "Generate personalized website tours with our Tour Generator tool. Perfect for first-time visitors or those seeking to explore specific sections, our tours provide a curated journey through the website's key content."
    },
    {
      image: "accountants",
      title: "Customizable Experience",
      description:
        "Tailor your browsing experience to suit your needs with our Plugin Customization feature. Install and activate plugins to add new functionalities, enhance existing features, and personalize your interaction with the website."
    },
    {
      image: "others",
      title: "Accessibility Enhancement",
      description: "Our platform improves website accessibility for users with disabilities by providing alternative navigation methods such as voice commands, enhancing their overall browsing experience."
    }
  ]

const UseCase = () => {

    const items = data.map(item => (
        <div className={classes.item} key={item.image}>
          <ThemeIcon
            variant="light"
            className={classes.itemIcon}
            size={60}
            radius="md"
          >
            {/* <Image src={IMAGES[item.image]} /> */}
          </ThemeIcon>
    
          <div>
            <Text fw={700} fz="lg" className={classes.itemTitle}>
              {item.title}
            </Text>
            <Text c="dimmed">{item.description}</Text>
          </div>
        </div>
      ))

  return (
    
<Container size={1000} className={classes.wrapper}>
      <Text className={classes.supTitle}>Use cases</Text>

      <Title className={classes.title} order={2}>
      Unlock <span className={classes.highlight}>Endless</span>   Possibilities
      </Title>

      <Container size={660} p={0}>
        <Text c="dimmed" className={classes.description}>
        Discover how our platform can be applied to various scenarios and industries, empowering users to navigate websites, conduct research, and streamline workflows with ease.
        </Text>
      </Container>

      <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt={30}>
        {items}
      </SimpleGrid>
    </Container>

  )
}

export default UseCase