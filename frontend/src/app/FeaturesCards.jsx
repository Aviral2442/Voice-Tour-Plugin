'use client'
import React, { useEffect } from 'react'
import {
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    useMantineTheme,
    Box,
    Image
} from "@mantine/core"
import { IconMicrophone, IconMapSearch, IconPlugConnected } from "@tabler/icons-react"
import classes from "./FeaturesCards.module.css"
import { Josefin_Sans, Rammetto_One } from 'next/font/google'
import clsx from 'clsx'
import Aos from 'aos'


const fonts = Rammetto_One({ subsets: ['latin'], weight: ['400'] });

const font = Josefin_Sans({ subsets: ['latin'], weight: ['100', '400'] });

const mockdata = [
    {
        title: "Activate the Voice Navigator",
        description:
            "Simply click the Activate Assistant button or use the voice command to start interacting with our intelligent assistant.",
        image: "volume.png"
    },
    {
        title: "Navigate or Generate a Tour",
        description:
            "Choose between navigating the website using voice commands or generating a personalized tour to explore key sections.",
        image: "statistics.png"
    },
    {
        title: "Enhance with Plugins",
        description:
            "Customize your experience further by installing plugins to add new features or improve existing functionality.",
        image: "solution.png"
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
            {/* <feature.icon
                style={{ width: rem(50), height: rem(50) }}
                stroke={2}
                color='#24C41C'
                
            /> */}
            <Image src={feature.image} alt='image ' style={{ width: rem(50), height: rem(50) }} />


            <Text fz="lg" fw={500} className={clsx(classes.cardTitle, font.className)} mt="md">
                {feature.title}
            </Text>
            <Text fz="sm" mt="sm" className={classes.cardDescription}>
                {feature.description}
            </Text>
        </Card>
    ))


    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);


    return (

        <Container size="lg" py="xl" className={classes.container} data-aos="fade-up" data-aos-duration="3000">
            <Group className={classes.group}>
                <Badge variant="filled" size="lg" radius="sm" bg='#ADFF2F' c='#262525' className={font.className}>
                    Best Navigator Plugin ever
                </Badge>
            </Group>

            <Title order={2} className={clsx(classes.title, fonts.className)} mt="lg" c='white'>
                Explore Our <span style={{ color: '#ADFF2F' }}>Innovative</span>  Key Features
            </Title>

            <Text className={classes.description} mt="lg">
                Discover our standout features: voice-based navigation, personalized tours,
                and customizable plugins, all designed to enhance your browsing
            </Text>

            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={60} data-aos="zoom-in-up">
                {features}
            </SimpleGrid>
        </Container>

    )
}

