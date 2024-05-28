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
    Box
} from "@mantine/core"
import { IconGauge, IconUser, IconCookie, IconMicrophone, IconMapSearch, IconPlugConnected } from "@tabler/icons-react"
import classes from "./FeaturesCards.module.css"
import { Josefin_Sans, Rammetto_One } from 'next/font/google'
import clsx from 'clsx'
import Aos from 'aos'


const fonts = Rammetto_One({ subsets: ['latin'], weight: ['400'] });

const font = Josefin_Sans({ subsets: ['latin'], weight: ['100','400'] });

const mockdata = [
    {
        title: "Activate the Voice Assistant",
        description:
            "Simply click the Activate Assistant button or use the voice command to start interacting with our intelligent assistant.",
        icon: IconMicrophone
    },
    {
        title: "Navigate or Generate a Tour",
        description:
            "Choose between navigating the website using voice commands or generating a personalized tour to explore key sections.",
        icon: IconMapSearch
    },
    {
        title: "Enhance with Plugins",
        description:
            "Customize your experience further by installing plugins to add new features or improve existing functionality.",
        icon: IconPlugConnected
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
                color='#66FF00'
                
            />
            <Text fz="lg" fw={500} className={clsx(classes.cardTitle,font.className)} mt="md">
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
    
        <Container size="lg" py="xl" data-aos="fade-up" pt={80} pb={130} >
            <Group justify="center">
                <Badge variant="filled" size="lg" radius="sm" bg='#39FF14' c='#262525' className={font.className}>
                    Best Navigator Plugin ever
                </Badge>
            </Group>

            <Title order={2} className={clsx(classes.title,fonts.className)} ta="center" mt="lg" c='white'>
            Explore Our <span style={{color:'#66FF00'}}>Innovative</span>  Key Features
            </Title>

            <Text  className={classes.description} ta="center" mt="lg">
            Discover our standout features: voice-based navigation, personalized tours, 
            and customizable plugins, all designed to enhance your browsing
            </Text>

            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={60}>
                {features}
            </SimpleGrid>
        </Container>
        
    )
}

