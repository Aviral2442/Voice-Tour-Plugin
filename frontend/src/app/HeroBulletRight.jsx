'use client'
import React from 'react'
import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem, Card, Flex, Paper } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from './HeroBulletRight.module.css';

export function HeroBulletRight() {
    return (
        <Container fluid className={classes.Container}>
            <div className={classes.inner}>
                <Group className={classes.Right}>
                    <Text c='#66FF00'>Use Cases</Text><br />
                    {' '}
                    <Title className={classes.Title}> Enhance Your Projects with<br /> Voice Assistant</Title>
                    <p className={classes.P}> Discover seamless website navigation like never before with our Voice Assistant feature. Say goodbye to traditional browsing methods and embrace the future of hands-free interaction. Experience convenience, efficiency, and accessibility at your fingertips.</p>
                    <Paper shadow="xs" radius="xs" className={classes.paper}>
                        <Flex
                            mih={50}
                            gap="md"
                            wrap={'wrap'}
                            
                            justify="flex-start"
                            align="flex-start"
                            direction="row"
                        >
                            <Button style={{flexGrow: 1}} variant="outline" color="#66FF00" radius="md">AI Voice Over for Videos</Button>
                            <Button style={{flexGrow: 1}} variant="outline" color="#66FF00" radius="md">Audio Publishing</Button>
                            <Button style={{flexGrow: 1}} variant="outline" color="#66FF00" radius="md">Audio story Telling</Button>
                            <Button style={{flexGrow: 1}} variant="outline" color="#66FF00" radius="md">Conversational AI</Button>
                            <Button style={{flexGrow: 1}} variant="outline" color="#66FF00" radius="md">custom Voice Creation</Button>
                            <Button style={{flexGrow: 1}} variant="outline" color="#66FF00" radius="md">E-Learning</Button>
                            <Button style={{flexGrow: 1}} variant="outline" color="#66FF00" radius="md">Podcasts</Button>
                        </Flex>
                        <Flex
                            mih={50}
                            gap="md"
                            justify="flex-start"
                            align="flex-start"
                            direction="row">
                            <Button variant="outline" color="#66FF00" radius="md">Gaming</Button>
                            <Button variant="outline" color="#66FF00" radius="md">IVR Systems</Button>
                            <Button variant="outline" color="#66FF00" radius="md">Translation & Dubbing</Button>
                            <Button variant="outline" color="#66FF00" radius="md">Voice Accesbility</Button>
                        </Flex>
                        <Flex
                            mih={50}
                            gap="md"
                            justify="flex-start"
                            align="flex-start"
                            direction="row" >
                            <Button variant="outline" color="#66FF00" radius="md">Voice API</Button>

                        </Flex>
                    </Paper>
                </Group>

                <Group >
                    <Paper shadow="xs" radius="xs" p="xl" className={classes.Paper}>
                        <Card shadow="sm" padding="lg" radius="md" withBorder bg="white" className={classes.Card}>
                            <Card.Section>
                                <Image src='GAMINg.png' className={classes.image} />
                            </Card.Section>
                        </Card>
                    </Paper>
                </Group>
            </div>
        </Container>
    )
}

export default HeroBulletRight