import React, { useEffect } from 'react'
import { Text, Title, TextInput, Button, Image } from '@mantine/core';
import { Josefin_Sans } from 'next/font/google';
import clsx from 'clsx';
import Aos from 'aos';
import classes from './banner2.module.css';

const font = Josefin_Sans({ subsets: ['latin'], weight: ['400'] });

const Banner2 = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className={classes.wrapper} data-aos="fade-up">
            <video
                onMouseOver={event => event.target.pause()}
                onMouseOut={event => event.target.play()}
                loop autoPlay muted height={"400"} width={"60%"} className={classes.video}>
                <source src={'Tournavigatorvideo2.mp4'} type="video/mp4" />
            </video>

            <div className={classes.body} >
                <Title className={classes.title}>Smart<span style={{ color: '#66ff00' }}> Tour</span>   Generator
                </Title>
                <Text fw={500} fz="lg" mb={5} className={font.className}>
                    Enhance your website&apos;s interactivity with our advanced voice assistant capabilities. Let your users search by voice and get instant, precise results with our state-of-the-art voice search functionality. Whether you&apos;re integrating with Amazon Alexa or Google Assistant, our technology ensures a seamless, hands-free browsing experience.
                </Text>

            </div>
        </div>
    )
}

export default Banner2