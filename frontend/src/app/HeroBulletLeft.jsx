'use client'
import React from 'react'
import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem, Card, Flex, Paper } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from './HeroBulletLeft.module.css';

const HeroBulletLeft = () => {
    return (
        <Container fluid className={classes.Container}>
            <div className={classes.inner}>
                <Group className={classes.Right}>
                    <Paper shadow="xs" radius="xs" p="xl" className={classes.Paper}>
                        <Card shadow="sm" padding="lg" radius="md" withBorder c='#1B1919' className={classes.Card}>
                            <Card.Section>
                                <Image src='micimg.png' className={classes.image} />
                            </Card.Section>
                        </Card>
                    </Paper>
                </Group>

                <Group className={classes.Left}>
                    <Text c='#4ECA3E' p={5}>Use Cases</Text>
                    <Title className={classes.Title}> Enhance Your Projects with<br /> Voice Assistant</Title>
                    <p className={classes.P}> Discover seamless website navigation like never before with our Voice Assistant feature. Say goodbye to traditional browsing methods and embrace the future of hands-free interaction. Experience convenience, efficiency, and accessibility at your fingertips.</p>
                    <Paper shadow="xs" radius="xs" className={classes.paper}>
                        <Flex
                            mih={50}
                            bg="#1B1919"
                            gap="md"
                            justify="flex-start"
                            align="flex-start"
                            direction="row"
                            wrap="wrap"
                        >
                            <Button variant="outline" color="#4ECA3E" radius="md">AI Voice Over for Videos</Button>
                            <Button variant="outline" color="#4ECA3E" radius="md">Audio Publishing</Button>
                            <Button variant="outline" color="#4ECA3E" radius="md">Audio story Telling</Button>
                        </Flex>
                        <Flex
                            mih={50}
                            bg="#1B1919"
                            gap="md"
                            justify="flex-start"
                            align="flex-start"
                            direction="row"
                            wrap="wrap"
                        >
                            <Button variant="outline" color="#4ECA3E" radius="md">Conversational AI</Button>
                            <Button variant="outline" color="#4ECA3E" radius="md">custom Voice Creation</Button>
                            <Button variant="outline" color="#4ECA3E" radius="md">E-Learning</Button>
                            <Button variant="outline" color="#4ECA3E" radius="md">Podcasts</Button>
                        </Flex>
                        <Flex
                            mih={50}
                            bg="#1B1919"
                            gap="md"
                            justify="flex-start"
                            align="flex-start"
                            direction="row"
                            wrap="wrap"
                        >
                            <Button variant="outline"  color="#4ECA3E"  radius="md">Gaming</Button>
                            <Button variant="outline"  color="#4ECA3E"  radius="md">IVR Systems</Button>
                            <Button variant="outline"  color="#4ECA3E"  radius="md">Translation & Dubbing</Button>
                            <Button variant="outline"  color="#4ECA3E"  radius="md">Voice Accesbility</Button>
                        </Flex>
                        <Flex
                            mih={50}
                            bg="#1B1919"
                            gap="md"
                            justify="flex-start"
                            align="flex-start"
                            direction="row"
                            wrap="wrap"
                        >
                            <Button variant="outline"  color="#4ECA3E"  radius="md">Voice API</Button>

                        </Flex>
                    </Paper>
                </Group>
            </div>
        </Container>
    )
}

export default HeroBulletLeft