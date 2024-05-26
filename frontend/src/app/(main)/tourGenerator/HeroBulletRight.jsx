'use client'
import React from 'react'
import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem, Card, Flex, Paper } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from './HeroBulletRight.module.css';
import clsx from 'clsx';

export function HeroBulletRight() {
    return (
        <Container fluid className={classes.Container}  >
            <div className={classes.inner}>
                <Group className={classes.Right}>

                    <Title className={classes.Title}> Enhance Your Projects with Voice Assistant</Title>
                    <p className={classes.P}> Discover seamless website navigation like never before with our Voice Assistant feature. Say goodbye to traditional browsing methods and embrace the future of hands-free interaction. Experience convenience, efficiency, and accessibility at your fingertips.</p>

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
                                <Image src='GAMINg.png' alt='gaming' className={classes.image} />
                            </Card.Section>
                        </Card>
                    </Paper>
                </Group>
            </div>
        </Container>
    )
}

export default HeroBulletRight