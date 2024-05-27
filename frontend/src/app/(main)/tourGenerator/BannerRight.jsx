import React, { useEffect } from 'react'
import { Text, Title, TextInput, Button, Image } from '@mantine/core';
import { Josefin_Sans } from 'next/font/google';
import clsx from 'clsx';
import Aos from 'aos';
import classes from './bannerRight.module.css';


const font = Josefin_Sans({ subsets: ['latin'], weight: ['400'] });

const Banner = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className={classes.wrapper} data-aos="fade-up">
            <div className={classes.body} >
                <Title className={classes.title}><span style={{ color: '#66ff00' }}>Experience</span>  Tour Generator  <br /><span style={{ color: '#66ff00' }}>And</span> <br />   <span style={{ color: '#66ff00' }}>Free</span> Navigation  </Title>
                <Text fw={500} fz="lg" mb={5} className={font.className}>
                    Unlock the power of voice command and navigation with our Voice Assistant Plugin. Seamlessly integrate voice functionality into your website and offer users a hands-free browsing experience. Try it out for free and see how it can enhance your website&apos;s accessibility and user experience.
                </Text>

            </div>
            
            <video 
            onMouseOver={event => event.target.pause()}   
            onMouseOut={event => event.target.play()}    
            loop autoPlay muted height={"350"} width={"55%"} className={classes.video}>
                <source src={'Tournavigatorvideo3.mp4'} type="video/mp4" />
            </video>
           
        </div>
    )
}

export default Banner