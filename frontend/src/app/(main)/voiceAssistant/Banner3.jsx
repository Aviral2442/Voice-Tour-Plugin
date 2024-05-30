import React, { useEffect } from 'react'
import { Text, Title, TextInput, Button, Image } from '@mantine/core';
import classes from './banner3.module.css';
import { Josefin_Sans } from 'next/font/google';
import clsx from 'clsx';
import Aos from 'aos';


const font = Josefin_Sans({ subsets: ['latin'], weight: ['400'] });

const Banner3 = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className={classes.wrapper} data-aos="fade-up">
            <div className={classes.body} >
                <Title className={clsx(classes.title,font.className)}>Voice <span style={{ color: '#66ff00' }}>Search</span>  on  <span style={{ color: '#66ff00' }}>Mobile</span>  </Title>
                <Text fw={500} fz="lg" mb={5} className={classes.description}>
                Every day, more than half of mobile users rely on voice commands to find information, browse social media, and conduct local searches. With twenty percent of all mobile searches now performed by voice, optimizing for this interaction is crucial. Our voice assistant plugin brings cutting-edge voice search capabilities to both mobile apps and mobile websites, delivering an effortless and intuitive user experience.                </Text>

            </div>
            <Image src="banner.png" alt='voice banner' className={classes.image} />
        </div>
    )
}

export default Banner3