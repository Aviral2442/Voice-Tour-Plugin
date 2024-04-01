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
import classes from "./FeaturesCards.module.css"

const mockdata = [
    {
        title: "Activate the Voice Assistant",
        description:
            "Simply click the 'Activate Assistant' button or use the voice command to start interacting with our intelligent assistant.",
        icon: IconGauge
    },
    {
        title: "Navigate or Generate a Tour",
        description:
            "Choose between navigating the website using voice commands or generating a personalized tour to explore key sections.",
        icon: IconUser
    },
    {
        title: "Enhance with Plugins",
        description:
            "Customize your experience further by installing plugins to add new features or improve existing functionality.",
        icon: IconCookie
    }
]

export default function FeaturesCards() {

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
            <Group justify="center">
                <Badge variant="filled" size="lg">
                    Best Navigator Plugin ever
                </Badge>
            </Group>

            <Title order={2} className={classes.title} ta="center" mt="sm">
            Explore Our Innovative Key Features
            </Title>

            <Text c="dimmed" className={classes.description} ta="center" mt="md">
            Discover our standout features: voice-based navigation, personalized tours, 
            and customizable plugins, all designed to enhance your browsing
            </Text>

            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
                {features}
            </SimpleGrid>
        </Container>
    )
}

