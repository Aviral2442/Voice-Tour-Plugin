import React from 'react'
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import classes from "./voicetestimonial.module.css"
import { ThemeIcon, Progress, Text, Group, Badge, Paper, rem, Container, SimpleGrid, Image, ActionIcon, Grid, Flex, Card, Button, Title } from '@mantine/core';
import { IconArrowBadgeLeft, IconArrowBadgeRight, IconArrowLeft, IconArrowRight, IconQuote, IconSwimming } from '@tabler/icons-react';
import { Avatar } from '@mantine/core';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Josefin_Sans, Rammetto_One } from 'next/font/google';
import clsx from 'clsx';

const font = Josefin_Sans({ subsets: ['latin'], weight: ['400'] });
const fonts = Rammetto_One({ subsets: ['latin'], weight: ['400'] });

const Testimonial = () => {
    const autoplay = useRef(Autoplay({ delay: 2000 }));
    return (
        <>
            <Title order={1}  className={clsx(classes.Title, fonts.className)}>
                Read trusted <span style={{ color: '#ADFF2F' }}>reviews</span> from our <span style={{ color: '#ADFF2F' }}>customers</span>
            </Title>
            <Carousel
                className={classes.Carousel}
                // withIndicators
                classNames={classes}

                height={350}
                slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
                nextControlIcon={<IconArrowBadgeRight style={{ width: rem(26), height: rem(26) }} />}
                previousControlIcon={<IconArrowBadgeLeft style={{ width: rem(26), height: rem(26) }} />}
                loop
                align="center"
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
            >
                <Carousel.Slide>
                    <Container className={classes.Container}>
                        <Card shadow="sm" padding="lg" radius="md" withBorder className={classes.cardsquare}>
                            <Card.Section>
                                <div className={classes.bg}>
                                    <Avatar src='quote.png' alt="it's me" className={classes.icon3} style={{ width: rem(52), height: rem(52) }} />
                                </div>
                            </Card.Section>

                            <Group className={classes.midcontent} >
                                <Text fw={700} className={clsx(classes.name, font.className)}>Rohit Singh</Text>
                                <Text size="sm" className={classes.review}>
                                    Using the Voice Assistant on this website has been a game-changer for me. It&apos;s so intuitive and easy to use, and it&apos;s made navigating complex websites a breeze!
                                </Text>
                            </Group>
                        </Card>
                    </Container>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Container className={classes.Container}>
                        <Card shadow="sm" padding="lg" radius="md" withBorder className={classes.cardsquare}>
                            <Card.Section>
                                <div className={classes.bg}>
                                    <Avatar src='quote.png' alt="it's me" className={classes.icon3} style={{ width: rem(52), height: rem(52) }} />
                                </div>
                            </Card.Section>

                            <Group className={classes.midcontent} >
                                <Text fw={700} className={clsx(classes.name, font.className)}>Vijay Nair</Text>
                                <Text size="sm" className={classes.review}>
                                    I&apos;m amazed by the accuracy and responsiveness of the Voice Assistant. It&apos;s like having a personal guide right there to help me find what I need quickly and efficiently.                            </Text>
                            </Group>
                        </Card>
                    </Container>
                </Carousel.Slide>

                <Carousel.Slide>
                    <Container className={classes.Container}>
                        <Card shadow="sm" padding="lg" radius="md" withBorder className={classes.cardsquare}>
                            <Card.Section>
                                <div className={classes.bg}>
                                    <Avatar src='quote.png' alt="it's me" className={classes.icon3} style={{ width: rem(52), height: rem(52) }} />
                                </div>
                            </Card.Section>

                            <Group className={classes.midcontent} >
                                <Text fw={700} className={clsx(classes.name, font.className)}>Neha Verma</Text>
                                <Text size="sm" className={classes.review}>
                                    As someone with visual impairment, the Voice Assistant has truly enhanced my online experience. It&apos;s incredibly empowering to be able to navigate websites with just my voice.                            </Text>
                            </Group>
                        </Card>
                    </Container>
                </Carousel.Slide>


                <Carousel.Slide>
                    <Container className={classes.Container}>
                        <Card shadow="sm" padding="lg" radius="md" withBorder className={classes.cardsquare}>
                            <Card.Section>
                                <div className={classes.bg}>
                                    <Avatar src='quote.png' alt="it's me" className={classes.icon3} style={{ width: rem(52), height: rem(52) }} />
                                </div>
                            </Card.Section>

                            <Group className={classes.midcontent} >
                                <Text fw={700} className={clsx(classes.name, font.className)}>Sophia Wilson</Text>
                                <Text size="sm" className={classes.review}>
                                    The Voice Assistant has made browsing the web so much more convenient for me. I can multitask while navigating websites, which saves me a ton of time and effort.                            </Text>
                            </Group>
                        </Card>
                    </Container>
                </Carousel.Slide>

                <Carousel.Slide>
                    <Container className={classes.Container}>
                        <Card shadow="sm" padding="lg" radius="md" withBorder className={classes.cardsquare}>
                            <Card.Section>
                                <div className={classes.bg}>
                                    <Avatar src='quote.png' alt="it's me" className={classes.icon3} style={{ width: rem(52), height: rem(52) }} />

                                </div>
                            </Card.Section>

                            <Group className={classes.midcontent} >
                                <Text fw={700} className={clsx(classes.name, font.className)}>Ramesh Patel</Text>
                                <Text size="sm" className={classes.review}>
                                    I love how customizable the Voice Assistant is. I can tailor it to my preferences and make my browsing experience truly personalized. It&apos;s like having my own virtual assistant!                            </Text>
                            </Group>
                        </Card>
                    </Container>
                </Carousel.Slide>

                <Carousel.Slide>
                    <Container className={classes.Container}>
                        <Card shadow="sm" padding="lg" radius="md" withBorder className={classes.cardsquare}>
                            <Card.Section>
                                <div className={classes.bg}>
                                    <Avatar src='quote.png' alt="it's me" className={classes.icon3} style={{ width: rem(52), height: rem(52) }} />
                                </div>
                            </Card.Section>

                            <Group className={classes.midcontent} >
                                <Text fw={700} className={clsx(classes.name, font.className)}> Daniel Anderson</Text>
                                <Text size="sm" className={classes.review}>
                                    I was skeptical at first, but after trying out the Voice Assistant, I&apos;m a believer! It&apos;s so natural and intuitive, and I find myself using it all the time now                            </Text>
                            </Group>
                        </Card>
                    </Container>
                </Carousel.Slide>
            </Carousel>
        </>
    )
}

export default Testimonial