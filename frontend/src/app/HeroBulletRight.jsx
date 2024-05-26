'use client'
import React from 'react'
import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem, Card, Flex, Paper } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from './HeroBulletRight.module.css';
import clsx from 'clsx';

export function HeroBulletRight() {
    return (
        <Container fluid className={classes.Container} pb={100}>
            <div className={classes.inner}>
                <Group className={classes.Right}>

                    <Title className={classes.Title}>Enhance Your Projects with Tour Generator</Title>
                    <p className={classes.P}>
                        Take control of your website exploration with our Tour Generator feature. Customize your browsing experience by creating personalized tours that guide you through the most relevant sections of any website. Explore with ease and efficiency, tailored to your interests and preferences.
                    </p>

                    <Flex
                        mih={40}
                        gap="md"
                        wrap={'wrap'}
                        justify="flex-start"
                        align="flex-start"
                        direction="row"
                        mb={10} >
                        <Button className={classes.Button} >Gaming</Button>
                        <Button className={classes.Button}>IVR Systems</Button>
                        <Button className={classes.Button} >Translation & Dubbing</Button>
                        <Button className={classes.Button}>Voice Accesbility</Button>
                    </Flex>

                </Group>

                <Group >
                    <Paper shadow="xs" radius="xs" p="xl" className={classes.Paper}>
                        <Card shadow="sm" padding="lg" radius="md" withBorder bg="rgb(22, 18, 18)" className={classes.Card}>
                            <Card.Section>
                                <Image src='GAMINg.png' alt='gamming' className={classes.image} />
                            </Card.Section>
                        </Card>
                    </Paper>
                </Group>
            </div>
        </Container>
    )
}

export default HeroBulletRight