'use client'
import React from 'react'
import {
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    useMantineTheme
  } from "@mantine/core"
  import { IconGauge, IconUser, IconCookie } from "@tabler/icons-react"
  import classes from "./visionMission.module.css"

  const mockdata = [
    {
      title: "Our Vision",
      description:
        "Experience the next frontier of website interaction with [Your Category Name]'s revolutionary Voice Assistants. Our technology redefines user engagement and accessibility, empowering individuals and businesses to navigate the digital landscape effortlessly.",
      icon: IconGauge
    },
    {
      title: "Our Mission",
      description:
        "With VoiceTour Navigator, we envision a future where voice technology stands at the forefront of digital innovation. Our vision is to lead the way in creating accessible, immersive, and personalized online experiences, transforming the way users interact with websites worldwide.",
      icon: IconUser
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
        color={theme.colors.blue[6]}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ))

  return (
    <Container size="lg" py="xl">

      <Title order={2} className={classes.title} ta="center" mt="sm">
      Embracing Voice Technology
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Explore the transformative power of voice technology in website interaction, redefining engagement and accessibility.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  )
}

export default VisionMission