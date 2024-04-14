'use client'
import { Card, Container, Group, Image, Paper, Text, Title } from '@mantine/core'
import React from 'react'
import classes from './voiceIntro.module.css'

const VoiceIntro = () => {
    return (

        <div >
            <Title className={classes.Title} order={2}>Know more About Voice Assistant </Title>

            <Container size={1400} className={classes.container}>

                <Group className={classes.Left}>
                    {/* <div className={classes.innerSection}> */}
                        <Container size={1200} p={50}>
                        <Text  size="lg" >
                        Welcome to the future of digital interaction! Our Voice Assistant is at the forefront of revolutionizing how users engage with websites. Born from the desire to enhance accessibility and streamline user experiences, our technology offers a seamless, hands-free way to navigate the web.
                        </Text>
                        <br />
                        <Text  size="lg" >
                            We're proud to introduce our innovative Voice Assistant feature, designed to revolutionize website navigation. Say goodbye to traditional mouse clicks and keyboard inputs – with our Voice Assistant, users can seamlessly interact with websites using natural language commands. Whether you're browsing articles, shopping for products, or exploring services, our intelligent assistant is here to guide you every step of the way. Experience a new level of convenience and accessibility with our Voice Assistant, available at your fingertips.
                        </Text>
                        </Container>
                    {/* </div> */}
                </Group>

                <Group className={classes.Right}>
                    <Paper shadow="xs" radius="xs" p="xl" className={classes.Paper}>
                        <Card shadow="sm" padding="lg" radius="md" withBorder c='#1B1919' className={classes.Card}>
                            <Card.Section>
                                <Image src='micimg.png' className={classes.image} />
                            </Card.Section>
                        </Card>
                    </Paper>
                </Group>

            </Container>

        </div>
    )
}

export default VoiceIntro