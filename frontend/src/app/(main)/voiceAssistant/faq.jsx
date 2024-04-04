'use client'
import React from 'react'
import { Image, Accordion, Grid, Container, Title } from "@mantine/core"
// import image from "./image.svg"
import classes from "./faq.module.css"

const Faq = () => {
    return (
        <div className={classes.wrapper}>
            <Container size="lg">
                <Grid id="faq-grid" gutter={50}>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        {/* <Image src={image.src} alt="Frequently Asked Questions" /> */}
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Title order={2} ta="left" className={classes.title}>
                            Voice Assistant FAQ's
                        </Title>

                        <Accordion
                            chevronPosition="right"
                            defaultValue="reset-password"
                            variant="separated"
                        >
                            <Accordion.Item className={classes.item} value="reset-password">
                                <Accordion.Control>
                                    How does the Voice Assistant work?
                                </Accordion.Control>
                                <Accordion.Panel>Our Voice Assistant utilizes advanced speech recognition technology to interpret user commands and navigate through website content. Users can simply speak their commands, and the assistant responds accordingly, allowing for hands-free browsing.</Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item className={classes.item} value="another-account">
                                <Accordion.Control>
                                    Is the Voice Assistant compatible with all websites?
                                </Accordion.Control>
                                <Accordion.Panel>While our Voice Assistant is designed to work with most modern websites, compatibility may vary depending on the website's structure and functionality. We continuously work to improve compatibility across a wide range of platforms.</Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item className={classes.item} value="newsletter">
                                <Accordion.Control>
                                    Can I customize voice commands for the Voice Assistant?
                                </Accordion.Control>
                                <Accordion.Panel>Yes, our Voice Assistant allows for customization of voice commands to perform specific actions or access certain features on your website. You can personalize the commands to suit your preferences and browsing habits.
                                </Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item className={classes.item} value="credit-card">
                                <Accordion.Control>
                                    Is the Voice Assistant accessible for users with disabilities?
                                </Accordion.Control>
                                <Accordion.Panel>Absolutely. Accessibility is a key focus of our Voice Assistant feature. By providing an alternative method of website navigation through voice commands, we aim to improve accessibility for users with disabilities, making online content more inclusive and accessible to everyone.</Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item className={classes.item} value="credit-card">
                                <Accordion.Control>
                                    Does the Voice Assistant work on mobile devices?
                                </Accordion.Control>
                                <Accordion.Panel>Yes, our Voice Assistant is designed to work on both desktop</Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>
                    </Grid.Col>
                </Grid>
            </Container>
        </div >
    )
}

export default Faq