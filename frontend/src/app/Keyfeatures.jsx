import React, { useEffect } from 'react'
import { ThemeIcon, Text, Title, Container, SimpleGrid, rem, Image } from '@mantine/core';
import { IconVolume, IconSitemap, IconVectorSpline, IconUserX, IconInfinity } from '@tabler/icons-react';
import classes from './keyfeatures.module.css';
import { Josefin_Sans, Rammetto_One } from 'next/font/google';
import Aos from 'aos';
import clsx from 'clsx';

const font = Josefin_Sans({ subsets: ['latin'], weight: ['400'] });
const fonts = Rammetto_One({ subsets: ['latin'], weight: ['400'] });


export const MOCKDATA = [
    {
        image: "recording.png",
        title: 'Voice-Based Navigation',
        description:
            'Users can navigate websites effortlessly using natural language voice commands, eliminating the need for traditional mouse clicks and keyboard inputs.',
    },
    {
        image: "online-education_1127660.png",
        title: 'Personalized Website Tours',
        description:
            'The platform offers a Tour Generator tool that enables users to create customized website tours, allowing them to explore key sections of websites in a guided manner tailored to their interests.',
    },
    {
        image: "3d-print.png",
        title: 'Plugin Customization',
        description:
            'Users can enhance their browsing experience by installing and using various plugins that add new features or improve existing functionality, providing flexibility and customization options.',
    },

];
export const DATA = [
    {
        image: "driver-license.png",
        title: 'Intuitive User Experience',
        description:
            'The website aims to offer a smooth browsing experience for users of all technical levels, prioritizing usability and accessibility.',
    },
    {
        image: "continuous-improvement.png",
        title: 'Continuous Improvement',
        description:
            'The platform continuously evolves, prioritizing enhancements, compatibility, and user feedback for an exceptional browsing experience.',
    },
]


// export function Feature({ icon: Icon, title, description }) {
//     return (
//         <div >
//             <ThemeIcon variant="light" size={40} radius={40}>
//                 <Icon style={{ width: rem(25), height: rem(25), color: 'white' }} stroke={1.5} />
//             </ThemeIcon>
//             <Text mt="sm" mb={7} fw={700} fz="lg" c={"#ADFF2F"} className={font.className}>
//                 {title}
//             </Text>
//             <Text size="md" lh={1.6} className={classes.itemDescription}>
//                 {description}
//             </Text>
//         </div>
//     );
// }
const Keyfeatures = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    // const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);
    // const features2 = DATA.map((feature, index) => <Feature {...feature} key={index} />);

    const features = MOCKDATA.map(feature => (
        <div >
            {/* <ThemeIcon variant="light" size={40} radius={40}> */}
            {/* <Icon style={{ width: rem(25), height: rem(25), color: 'white' }} stroke={1.5} /> */}
            <Image src={feature.image} alt='image ' style={{ width: rem(50), height: rem(50), color: 'white' }} />
            {/* </ThemeIcon> */}
            <Text mt="sm" mb={7} fw={700} fz="lg" c={"#ADFF2F"} className={font.className}>
                {feature.title}
            </Text>
            <Text size="md" lh={1.6} className={classes.itemDescription}>
                {feature.description}
            </Text>
        </div>
    ))

    const features2 = DATA.map(feature => (
        <div >
            {/* <ThemeIcon variant="light" size={40} radius={40}> */}
            {/* <Icon style={{ width: rem(25), height: rem(25), color: 'white' }} stroke={1.5} /> */}
            <Image src={feature.image} alt='image ' style={{ width: rem(50), height: rem(50), color: 'white' }} />
            {/* </ThemeIcon> */}
            <Text mt="sm" mb={7} fw={700} fz="lg" c={"#ADFF2F"} className={font.className}>
                {feature.title}
            </Text>
            <Text size="md" lh={1.6} className={classes.itemDescription}>
                {feature.description}
            </Text>
        </div>
    ))

    return (
        <Container className={classes.wrapper} fluid data-aos="fade-up">
            <Title className={clsx(classes.title, fonts.className)} >
                Key <span style={{ color: '#ADFF2F' }}>Features</span>
            </Title>



            <SimpleGrid
                mt={60}
                cols={{ base: 1, sm: 2, md: 3 }}
                spacing={{ base: 'xl', md: 50 }}
                verticalSpacing={{ base: 'xl', md: 50 }}
            >
                {features}
            </SimpleGrid>
            <div className={classes.secondContainer} >
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