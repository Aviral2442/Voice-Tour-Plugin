'use client'
import React from 'react'
import {
    Badge,
    Group,
    Card,
    SimpleGrid,
    rem,
    useMantineTheme,
    Text,
    Container,
    Title
} from "@mantine/core"
import { IconGauge, IconUser, IconCookie } from "@tabler/icons-react"
import classes from './whychoose.module.css'

const mockdata = [
    {
        title: "Innovative Solutions",
        description:
            "We offer cutting-edge technologies that redefine digital interactions, making your web experience more accessible and engaging.",
        icon: IconGauge
    },
    {
        title: "User-Centric Design",
        description:
            "Both our Voice Assistant and Tour Generator are developed with the end-user in mind, focusing on ease of use and practical functionality to cater to a broad audience.",
        icon: IconUser
    },
    {
        title: "Accessibility Commitment",
        description:
            "We are dedicated to making the digital world accessible to everyone, including those with disabilities, by adhering to the highest standards of accessibility.",
        icon: IconCookie
    }
]

const Whychoose = () => {
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
                    Why Choose us
                </Badge>
            </Group>

            <Title order={2} className={classes.title} ta="center" mt="sm">
            Elevating Your Online Experience with Cutting-Edge Technology 
            </Title>

            <Text c="dimmed" className={classes.description} ta="center" mt="lg">
            Discover why our platform is the preferred choice for transforming website interactions. With our innovative Voice Assistant
             and intuitive Tour Generator, we ensure that every user enjoys a seamless, accessible, and engaging online experience.
              Choose us to navigate and explore digital spaces with unparalleled ease and efficiency.
            </Text>

            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
                {features}
            </SimpleGrid>
        </Container>)
}

export default Whychoose