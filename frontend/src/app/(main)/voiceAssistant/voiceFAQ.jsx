'use client'
import React, { useEffect } from 'react'
import { Title, Text, Button, Container } from "@mantine/core"
import classes from "./voiceFAQ.module.css"
import Aos from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'
import { Jost, Rammetto_One } from 'next/font/google'
import clsx from 'clsx'


const font = Jost({ subsets: ['latin'], weight: ['100', '400'] });
const fonts= Rammetto_One({ subsets: ['latin'], weight: ['400'] });

const VoiceFAQ = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);
    return (
        <Container className={classes.wrapper} size={1400} pt={50} pb={120} >

            <div className={classes.inner}>
                <Title className={clsx(classes.title,fonts.className)} data-aos="fade-up" >
                    Instant Answers to Your {" "}
                    <Text component="span" className={classes.highlight} inherit>
                        Burning
                    </Text>{" "}
                    Questions
                </Title>

                <Container p={20} size={900}>
                    <Text size="lg" className={classes.description} data-aos="fade-up">
                        Address common queries and concerns related to the Voice Assistant functionality.Provide detailed answers to questions
                        regarding voice command usage, compatibility with various browsers and devices, and customization options for different
                        user needs.
                    </Text>
                </Container>

                {/* <a href='http://localhost:3000/faq' className={classes.btnLink} > */}
                <div className={classes.controls}>
                    <Button
                        component={Link}
                        href='/faq'
                        className={clsx(classes.control,font.className)}
                        size="lg"
                        variant="default"
                       
                    >
                        Voice Assistant FAQ&apos;s
                        &nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#5BFF04" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                            <path d="M11 13l9 -9" />
                            <path d="M15 4h5v5" />
                        </svg>
                    </Button>

                    

                </div>
                {/* </a> */}
            </div>
        </Container>
    )
}

export default VoiceFAQ