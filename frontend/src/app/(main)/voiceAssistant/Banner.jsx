'use client'
import React, { useEffect } from 'react'
import { Text, Title, TextInput, Button, Image } from '@mantine/core';
import classes from './banner.module.css';
import { Josefin_Sans } from 'next/font/google';
import clsx from 'clsx';
import Aos from 'aos';


const font = Josefin_Sans({ subsets: ['latin'], weight: ['400'] });

const Banner = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className={classes.wrapper} data-aos="fade-up">
      <div className={classes.body} >
        <Title className={clsx(classes.title,font.className)}><span style={{ color: '#24C41C' }}>Experience</span>  Voice Command  <br /><span style={{ color: '#24C41C' }}>And</span> <br />   <span style={{ color: '#24C41C' }}>Free</span> Navigation  </Title>
        <Text fw={500} fz="lg" mb={5} className={classes.description}>
          Unlock the power of voice command and navigation with our Voice Assistant Plugin. Seamlessly integrate voice functionality into your website and offer users a hands-free browsing experience. Try it out for free and see how it can enhance your website&apos;s accessibility and user experience.
        </Text>

      </div>
      <Image src="banner.png" alt='voice banner' className={classes.image} />
    </div>
  )
}

export default Banner