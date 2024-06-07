'use client'
import React, { useEffect } from 'react'
import {
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme
} from "@mantine/core"
import { IconDeviceVisionPro, IconTarget } from "@tabler/icons-react"
import classes from "./visionMission.module.css"
import clsx from 'clsx'
import { Josefin_Sans, Rammetto_One } from 'next/font/google'
import Aos from 'aos'

const font = Josefin_Sans({ subsets: ['latin'], weight: ['100', '400'] });
const fonts = Rammetto_One({ subsets: ['latin'], weight: ['400'] });


const mockdata = [
  {
    title: "Our Vision",
    description:
      "Experience the next frontier of website interaction with Voice revolutionary Voice Assistants. Our technology redefines user engagement and accessibility, empowering individuals and businesses to navigate the digital landscape effortlessly.",
    icon: IconDeviceVisionPro
  },
  {
    title: "Our Mission",
    description:
      "With VoiceTour Navigator, we envision a future where voice technology stands at the forefront of digital innovation. Our vision is to lead the way in creating accessible, immersive, and personalized online experiences, transforming the way users interact with websites worldwide.",
    icon: IconTarget
  }
]

const VisionMission = () => {
  const theme = useMantineTheme()
  const features = mockdata.map(feature => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color="#24C41C"
      />
      <Text fz="lg" fw={500} className={clsx(classes.cardTitle, font.className)} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm"  mt="sm" className={classes.cardDescription}>
        {feature.description}
      </Text>
    </Card>
  ))

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Container size="lg" py="xl" pt={180} pb={180} className={classes.Container}>

      <Title className={clsx(classes.title,fonts.className)} ta="center"  c='white' data-aos="fade-up">
        Embracing  <span style={{ color: '#24C41C' }}>Voice</span>  Technology
      </Title>

      <Text className={classes.description} ta="center" mt="sm" data-aos="fade-up">
        Explore the transformative power of voice technology in website interaction, redefining engagement and accessibility.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mt={50} data-aos="zoom-in">
        {features}
      </SimpleGrid>
    </Container>
  )
}

export default VisionMission