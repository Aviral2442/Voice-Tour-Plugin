'use client'
import React, { useEffect } from 'react'
import { Title, Text, Button, Container } from "@mantine/core"
import classes from "./tourFAQ.module.css"
import Aos from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'

const TourFAQ = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <Container className={classes.wrapper} size={1400}>

            <div className={classes.inner}>
                <Title className={classes.title} data-aos="fade-up" >
                    Swift {" "}
                    <Text component="span" className={classes.highlight} inherit>
                        Solutions
                    </Text>{" "}
                    to Your Queries
                </Title>

                <Container p={20} size={900}>
                    <Text size="lg" c="dimmed" className={classes.description} data-aos="fade-up">
                        Tackle prevalent inquiries and issues pertaining to the Tour Generator&apos;s capabilities.
                        Offer thorough responses to questions concerning how to create tours, compatibility with different types
                         of content and websites, and options for personalizing tours to user preferences.

                    </Text>
                </Container>

                {/* <a href='http://localhost:3000/faq' className={classes.btnLink} > */}
                <div className={classes.controls}>
                    <Button
                        component={Link}
                        href='/faq'
                        className={classes.control}
                        size="lg"
                        variant="default"
                        color="#5BFF04"
                    >
                        Tour Generator FAQ'&apos;s
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

export default TourFAQ