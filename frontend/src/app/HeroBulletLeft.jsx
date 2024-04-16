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
                        <Card shadow="sm" radius="md" withBorder className={classes.Card}>
                            <Card.Section>
                                <Image src='chatbott.png' className={classes.image} />
                            </Card.Section>
                        </Card>
                    </Paper>
                </Group>

                <Group className={classes.Left}>
                    <Text c='#66FF00'  >Use Cases</Text>
                    <Title className={classes.Title}>Enhance Your Projects with Tour Generator</Title>
                    <p className={classes.P}> Take control of your website exploration with our Tour Generator feature. Customize your browsing experience by creating personalized tours that guide you through the most relevant sections of any website. Explore with ease and efficiency, tailored to your interests and preferences.
                    </p>
                    <Paper shadow="xs" radius="xs" className={classes.paper}>
                        <Flex
                            mih={40}
                            gap="md"
                            wrap={'wrap'}
                            justify="flex-start"
                            align="flex-start"
                            direction="row"
                            mb={10}
                        >
                            <Button variant="outline" color="#66FF00" radius="md">AI Voice Over for Videos</Button>
                            <Button variant="outline" color="#66FF00" radius="md">Audio Publishing</Button>
                            <Button variant="outline" color="#66FF00" radius="md">Audio story Telling</Button>
                        </Flex>
                        <Flex
                            mih={40}
                            gap="md"
                            wrap={'wrap'}
                            justify="flex-start"
                            align="flex-start"
                            direction="row"
                            mb={10}
                        >
                            <Button variant="outline" color="#66FF00" radius="md">Conversational AI</Button>
                            <Button variant="outline" color="#66FF00" radius="md">custom Voice Creation</Button>
                            <Button variant="outline" color="#66FF00" radius="md">E-Learning</Button>
                            <Button variant="outline" color="#66FF00" radius="md">Podcasts</Button>
                        </Flex>
                        <Flex
                            mih={40}
                            gap="md"
                            wrap={'wrap'}
                            justify="flex-start"
                            align="flex-start"
                            direction="row"
                            mb={10}>
                            <Button variant="outline" color="#66FF00" radius="md">Gaming</Button>
                            <Button variant="outline" color="#66FF00" radius="md">IVR Systems</Button>
                            <Button variant="outline" color="#66FF00" radius="md">Translation & Dubbing</Button>
                            <Button variant="outline" color="#66FF00" radius="md">Voice Accesbility</Button>
                        </Flex>
                        <Flex
                            mih={40}
                            gap="md"
                            wrap={'wrap'}
                            justify="flex-start"
                            align="flex-start"
                            direction="row"
                            mb={10}>
                            <Button variant="outline" color="#66FF00" radius="md">Voice API</Button>

                        </Flex>
                    </Paper>
                </Group>
            </div>
        </Container>
    )
}

export default HeroBulletLeft