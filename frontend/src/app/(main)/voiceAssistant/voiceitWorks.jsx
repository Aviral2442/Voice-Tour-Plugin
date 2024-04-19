import React from 'react'
import { ThemeIcon, Text, Title, Container, SimpleGrid, rem, Group, Card, Center } from '@mantine/core';
import classes from './voiceitWorks.module.css';
import { Josefin_Sans, Lora, Playfair_Display } from 'next/font/google';
import clsx from 'clsx';


const font = Josefin_Sans({ subsets: ['latin'], weight: ['400'] });


export const MOCKDATA = [
    {
        title: 'Activate the Voice Assistant',
        description:
            'Click the Activate Assistant button or use the voice command to start interacting with our intelligent assistant.',
    },
    {
        title: 'Navigate Websites',
        description:
            ' Speak your desired commands to navigate through website pages, access links, or perform actions such as searching or filling out forms.',
    },
    {
        title: 'Explore Features',
        description:
            'Discover additional features of the Voice Assistant, such as voice-controlled scrolling, zooming, and page navigation.',
    },

    {

        title: 'Customize Settings',
        description:
            ' Personalize your Voice Assistant experience by adjusting settings such as voice sensitivity, language preferences, and command recognition.',


    },
    {

        title: 'Compatibility',
        description:
            ' Our Voice Assistant is compatible with most modern web browsers and websites. While we strive to ensure compatibility across a wide range of platforms, please note that certain website structures or functionalities may impact the performance of the Voice Assistant.',

    },
];


export function Feature({ title, description, Number }) {
    return (
        <div>
            <Card h={200} className={classes.Card}>
                <Text mt="sm" fz={24} mb={7} c={"#66ff00"} className={font.className}>
                    {title}
                </Text>
                <Text size="sm" lh={1.6} className={classes.Descript} ta={"center"}>
                    {description}
                </Text>

            </Card>
        </div>
    );
}

export function VoiceitWorks() {
    const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

    return (
        <Container className={classes.wrapper} fluid  pt={180} pb={180}  >

            <SimpleGrid
                mt={60}
                cols={{ base: 1, sm: 2, md: 3 }}
                spacing={{ base: 'xl', md: 50 }}
                verticalSpacing={{ base: 'xl', md: 50 }}
            >
                <Group >
                    <Card bg={'black'} size="lg" p={0}>
                        <Title className={clsx(classes.Title, font.className)}>
                            How It Works<span className={classes.questionmark}>?</span>
                        </Title>
                        <Text mt={10} fz={15} className={classes.Descript}>Activate the Voice Assistant with a single click or voice command to navigate your website hands-free, streamlining your browsing experience with intuitive voice control.</Text>

                    </Card>
                </Group>
                {features}
            </SimpleGrid>
        </Container>
    )
}

export default VoiceitWorks