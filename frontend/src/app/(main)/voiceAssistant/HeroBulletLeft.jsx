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
                                <Image src='chatbott.png' alt='chatbot' className={classes.image} />
                            </Card.Section>
                        </Card>
                    </Paper>
                </Group>

                <Group className={classes.Left}>
                    <Title className={classes.Title}> Enhance Your Projects with Voice Assistant</Title>
                    <p className={classes.P}> Discover seamless website navigation like never before with our Voice Assistant feature. Say goodbye to traditional browsing methods and embrace the future of hands-free interaction. Experience convenience, efficiency, and accessibility at your fingertips.</p>
                       
                        <Flex
                            mih={50}
                            gap="md"
                            wrap={'wrap'}
                            justify="flex-start"
                            align="flex-start"
                            direction="row"
                            mb={10}
                        >
                            <Button className={classes.Button} >Conversational AI</Button>
                            <Button className={classes.Button} >custom Voice Creation</Button>
                            <Button className={classes.Button} >E-Learning</Button>
                            <Button className={classes.Button} >Podcasts</Button>
                        </Flex>
                       
                      
                </Group>
            </div>
        </Container>
    )
}

export default HeroBulletLeft