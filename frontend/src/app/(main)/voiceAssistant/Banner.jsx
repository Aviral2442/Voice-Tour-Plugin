import React from 'react'
import { Text, Title, TextInput, Button, Image } from '@mantine/core';
import classes from './banner.module.css';
import { Josefin_Sans } from 'next/font/google';
import clsx from 'clsx';


const font = Josefin_Sans({ subsets: ['latin'], weight: ['400'] });

const Banner = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}><span style={{ color: '#66ff00' }}>Experience</span>  Voice Command  <br /><span style={{ color: '#66ff00' }}>&</span> <br /> Navigation <span style={{ color: '#66ff00' }}>for Free</span> </Title>
        <Text fw={500} fz="lg" mb={5} className={font.className}>
          Unlock the power of voice command and navigation with our Voice Assistant Plugin. Seamlessly integrate voice functionality into your website and offer users a hands-free browsing experience. Try it out for free and see how it can enhance your website's accessibility and user experience.
        </Text>

      </div>
      <Image src="banner.png" className={classes.image} />
    </div>
  )
}

export default Banner