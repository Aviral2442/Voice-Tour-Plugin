import React from 'react'
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import classes from "./Testimonial.module.css"
import { ThemeIcon, Progress, Text, Group, Badge, Paper, rem, Container, SimpleGrid, Image, ActionIcon, Grid } from '@mantine/core';
import { IconArrowBadgeLeft, IconArrowBadgeRight, IconArrowLeft, IconArrowRight, IconSwimming } from '@tabler/icons-react';
import { Avatar } from '@mantine/core';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

const Testimonial = () => {
    const autoplay = useRef(Autoplay({ delay: 2000 }));
    return (

        <Carousel
            withIndicators
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
                    <Paper radius="md" withBorder className={classes.card} >

                        <Grid grow gutter="xl">
                            <Grid.Col span={3} >
                                <ActionIcon className={classes.icon1} size={70} radius='xl'  >
                                    <Avatar src='ava.jpg' alt="it's me" style={{ width: rem(62), height: rem(62) }} />

                                </ActionIcon>
                            </Grid.Col>

                            <Grid.Col span={7}>
                                <Text fw={700} className={classes.name}>
                                    Sarah M
                                </Text>
                                <Text c="dimmed" fz="sm" >
                                    @sarahm
                                </Text>
                                <Text className={classes.review} >
                                    Using the Voice Assistant on this website has been a game-changer for me. It's so intuitive and easy to use, and it's made navigating complex websites a breeze!
                                </Text>
                            </Grid.Col>
                            <Grid.Col span={2}>
                                {"  "}
                                <ActionIcon className={classes.icon} size={60} radius='md' color='black'>
                                    <Avatar src='https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/x/x_sharing_card.png.twimg.768.png' alt="it's me" style={{ width: rem(52), height: rem(52) }} />

                                </ActionIcon>
                            </Grid.Col>
                        </Grid>
                    </Paper>
                </Container>
            </Carousel.Slide>
            <Carousel.Slide>
                <Container className={classes.Container} >
                    <Paper radius="md" withBorder className={classes.card} >

                        <Grid grow gutter="xl">
                            <Grid.Col span={3} >
                                <ActionIcon className={classes.icon1} size={70} radius='xl'  >
                                    <Avatar src='ava.jpg' alt="it's me" style={{ width: rem(62), height: rem(62) }} />

                                </ActionIcon>
                            </Grid.Col>

                            <Grid.Col span={7}>
                                <Text fw={700} className={classes.name}>
                                    John D
                                </Text>
                                <Text c="dimmed" fz="sm" >
                                    @johnd
                                </Text>
                                <Text className={classes.review} >
                                    I'm amazed by the accuracy and responsiveness of the Voice Assistant. It's like having a personal guide right there to help me find what I need quickly and efficiently.
                                </Text>
                            </Grid.Col>
                            <Grid.Col span={2}>
                                {"  "}
                                <ActionIcon className={classes.icon} size={60} radius='md' color='black'>
                                    <Avatar src='https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/x/x_sharing_card.png.twimg.768.png' alt="it's me" style={{ width: rem(52), height: rem(52) }} />

                                </ActionIcon>
                            </Grid.Col>
                        </Grid>
                    </Paper>
                </Container>
            </Carousel.Slide>

            <Carousel.Slide>
                <Container className={classes.Container}>
                    <Paper radius="md" withBorder className={classes.card} >

                        <Grid grow gutter="xl">
                            <Grid.Col span={3} >
                                <ActionIcon className={classes.icon1} size={70} radius='xl'  >
                                    <Avatar src='ava.jpg' alt="it's me" style={{ width: rem(62), height: rem(62) }} />

                                </ActionIcon>
                            </Grid.Col>

                            <Grid.Col span={7}>
                                <Text fw={700} className={classes.name}>
                                    Emily L
                                </Text>
                                <Text c="dimmed" fz="sm" >
                                    @emilyl
                                </Text>
                                <Text className={classes.review} >
                                    As someone with visual impairment, the Voice Assistant has truly enhanced my online experience. It's incredibly empowering to be able to navigate websites with just my voice.
                                </Text>
                            </Grid.Col>
                            <Grid.Col span={2}>
                                {"  "}
                                <ActionIcon className={classes.icon} size={60} radius='md' color='black'>
                                    <Avatar src='https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/x/x_sharing_card.png.twimg.768.png' alt="it's me" style={{ width: rem(52), height: rem(52) }} />

                                </ActionIcon>
                            </Grid.Col>
                        </Grid>
                    </Paper>
                </Container>
            </Carousel.Slide>


            <Carousel.Slide>
                <Container className={classes.Container}>
                    <Paper radius="md" withBorder className={classes.card} >

                        <Grid grow gutter="xl">
                            <Grid.Col span={3} >
                                <ActionIcon className={classes.icon1} size={70} radius='xl'  >
                                    <Avatar src='ava.jpg' alt="it's me" style={{ width: rem(62), height: rem(62) }} />

                                </ActionIcon>
                            </Grid.Col>

                            <Grid.Col span={7}>
                                <Text fw={700} className={classes.name}>
                                    Michael P
                                </Text>
                                <Text c="dimmed" fz="sm" >
                                    @michaelp
                                </Text>
                                <Text className={classes.review} >
                                    The Voice Assistant has made browsing the web so much more convenient for me. I can multitask while navigating websites, which saves me a ton of time and effort.
                                </Text>
                            </Grid.Col>
                            <Grid.Col span={2}>
                                {"  "}
                                <ActionIcon className={classes.icon} size={60} radius='md' color='black'>
                                    <Avatar src='https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/x/x_sharing_card.png.twimg.768.png' alt="it's me" style={{ width: rem(52), height: rem(52) }} />

                                </ActionIcon>
                            </Grid.Col>
                        </Grid>
                    </Paper>
                </Container>
            </Carousel.Slide>

            <Carousel.Slide>
                <Container className={classes.Container}>
                    <Paper radius="md" withBorder className={classes.card} >

                        <Grid grow gutter="xl">
                            <Grid.Col span={3} >
                                <ActionIcon className={classes.icon1} size={70} radius='xl'  >
                                    <Avatar src='ava.jpg' alt="it's me" style={{ width: rem(62), height: rem(62) }} />

                                </ActionIcon>
                            </Grid.Col>

                            <Grid.Col span={7}>
                                <Text fw={700} className={classes.name}>
                                    Lisa S
                                </Text>
                                <Text c="dimmed" fz="sm" >
                                    @lisas
                                </Text>
                                <Text className={classes.review} >
                                    I was skeptical at first, but after trying out the Voice Assistant, I'm a believer! It's so natural and intuitive, and I find myself using it all the time now.
                                </Text>
                            </Grid.Col>
                            <Grid.Col span={2}>
                                {"  "}
                                <ActionIcon className={classes.icon} size={60} radius='md' color='black'>
                                    <Avatar src='https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/x/x_sharing_card.png.twimg.768.png' alt="it's me" style={{ width: rem(52), height: rem(52) }} />

                                </ActionIcon>
                            </Grid.Col>
                        </Grid>
                    </Paper>
                </Container>
            </Carousel.Slide>

            <Carousel.Slide>
                <Container className={classes.Container}>
                    <Paper radius="md" withBorder className={classes.card} >

                        <Grid grow gutter="xl">
                            <Grid.Col span={3} >
                                <ActionIcon className={classes.icon1} size={70} radius='xl'  >
                                    <Avatar src='ava.jpg' alt="it's me" style={{ width: rem(62), height: rem(62) }} />

                                </ActionIcon>
                            </Grid.Col>

                            <Grid.Col span={7}>
                                <Text fw={700} className={classes.name}>
                                    Alex W
                                </Text>
                                <Text c="dimmed" fz="sm" >
                                    @alexw
                                </Text>
                                <Text className={classes.review} >
                                    I love how customizable the Voice Assistant is. I can tailor it to my preferences and make my browsing experience truly personalized. It's like having my own virtual assistant!
                                </Text>
                            </Grid.Col>
                            <Grid.Col span={2}>
                                {"  "}
                                <ActionIcon className={classes.icon} size={60} radius='md' color='black'>
                                    <Avatar src='https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/x/x_sharing_card.png.twimg.768.png' alt="it's me" style={{ width: rem(52), height: rem(52) }} />

                                </ActionIcon>
                            </Grid.Col>
                        </Grid>
                    </Paper>
                </Container>
            </Carousel.Slide>
        </Carousel>
    )
}

export default Testimonial