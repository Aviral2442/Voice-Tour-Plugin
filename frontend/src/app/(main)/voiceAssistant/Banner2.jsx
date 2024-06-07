'use client'
import React, { useEffect } from 'react'
import { Text, Title, TextInput, Button, Image } from '@mantine/core';
import classes from './banner2.module.css';
import { Josefin_Sans } from 'next/font/google';
import clsx from 'clsx';
import Aos from 'aos';

const font = Josefin_Sans({ subsets: ['latin'], weight: ['400'] });

const Banner2 = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className={classes.wrapper} data-aos="fade-up">
            <Image src="banner.png" alt='voice banner' className={classes.image} />
            <div className={classes.body} >
                <Title className={clsx(classes.title,font.className)}>Smart<span style={{ color: '#24C41C' }}> Voice</span>   Assistants
                </Title>
                <Text fw={500} fz="lg" mb={5} className={classes.description}>
                Enhance your website&apos;s interactivity with our advanced voice assistant capabilities. Let your users search by voice and get instant, precise results with our state-of-the-art voice search functionality. Whether you&apos;re integrating with Amazon Alexa or Google Assistant, our technology ensures a seamless, hands-free browsing experience.
                </Text>

            </div>
        </div>
    )
}

export default Banner2