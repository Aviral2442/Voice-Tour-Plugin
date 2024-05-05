import React, { useEffect } from 'react'
import { ThemeIcon, Text, Title, Container, SimpleGrid, rem } from '@mantine/core';
import { IconVolume, IconSitemap, IconVectorSpline, IconUserX, IconInfinity } from '@tabler/icons-react';
import classes from './keyfeatures.module.css';
import { Josefin_Sans } from 'next/font/google';
import Aos from 'aos';

const font = Josefin_Sans({ subsets: ['latin'], weight: ['400'] });


export const MOCKDATA = [
    {
        icon: IconVolume,
        title: 'Voice-Based Navigation',
        description:
            'Users can navigate websites effortlessly using natural language voice commands, eliminating the need for traditional mouse clicks and keyboard inputs.',
    },
    {
        icon: IconSitemap,
        title: 'Personalized Website Tours',
        description:
            'The platform offers a Tour Generator tool that enables users to create customized website tours, allowing them to explore key sections of websites in a guided manner tailored to their interests.',
    },
    {
        icon: IconVectorSpline,
        title: 'Plugin Customization',
        description:
            'Users can enhance their browsing experience by installing and using various plugins that add new features or improve existing functionality, providing flexibility and customization options.',
    },

];
export const DATA = [
    {
        icon: IconUserX,
        title: 'Intuitive User Experience',
        description:
            'The website aims to offer a smooth browsing experience for users of all technical levels, prioritizing usability and accessibility.',
    },
    {
        icon: IconInfinity,
        title: 'Continuous Improvement',
        description:
            'The platform continuously evolves, prioritizing enhancements, compatibility, and user feedback for an exceptional browsing experience.',
    },
]


export function Feature({ icon: Icon, title, description }) {
    return (
        <div >
            <ThemeIcon variant="light" size={40} radius={40}>
                <Icon style={{ width: rem(25), height: rem(25), color: '#66ff00' }} stroke={1.5} />
            </ThemeIcon>
            <Text mt="sm" mb={7} fw={700} fz="lg" c={"white"} className={font.className}>
                {title}
            </Text>
            <Text size="md" c="dimmed" lh={1.6} className={classes.itemDescription}>
                {description}
            </Text>
        </div>
    );
}
const Keyfeatures = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);
    const features2 = DATA.map((feature, index) => <Feature {...feature} key={index} />);

    return (
        <Container className={classes.wrapper} fluid>
            <Title className={classes.title} data-aos="fade-up">
                Key <span style={{ color: '#66ff00' }}>Features</span>
            </Title>



            <SimpleGrid
                mt={60}
                cols={{ base: 1, sm: 2, md: 3 }}
                spacing={{ base: 'xl', md: 50 }}
                verticalSpacing={{ base: 'xl', md: 50 }}
                data-aos="fade-up"   data-aos-anchor-placement="bottom-bottom"
            >
                {features}
            </SimpleGrid>
            <div className={classes.secondContainer} data-aos="fade-up"   data-aos-anchor-placement="bottom-bottom">
                <SimpleGrid
                    cols={{ base: 1, md: 2 }} spacing="xl" mt={50}
                >
                    {features2}
                </SimpleGrid>
            </div>
        </Container>
    )
}

export default Keyfeatures