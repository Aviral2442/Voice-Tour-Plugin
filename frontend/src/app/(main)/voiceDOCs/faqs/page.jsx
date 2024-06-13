'use client'
import React from 'react'
import { Card, Grid, Container, Title, Image, Text, Accordion, Paper } from "@mantine/core"
import classes from './faqs.module.css'

const Faqs = () => {
    return (
        <Container>

            <Title ta="center" order={1} mt={50} mb={30} >Frequently Asked Question</Title>

            <Grid justify="center" grow gutter="sm" p={10}>

                <Grid.Col span={4}>
                    <Card
                        shadow="sm"
                        padding="xl"
                        component="a"
                        href="#si"
                    // target="_blank"
                    >
                        {/* <Card.Section>
                            <Image
                                src="/setup-Installation.png"
                                h={200}
                                alt="No way!"
                            />
                        </Card.Section> */}

                        <Text fw={500} size="lg" mt="md">
                            Setup and Installation
                        </Text>

                        <Text mt="xs" c="dimmed" size="sm">
                            Please click anywhere on this card to claim your reward, this is not a
                            fraud, trust us
                        </Text>
                    </Card>
                </Grid.Col>

                <Grid.Col span={4}>
                    <Card
                        shadow="sm"
                        padding="xl"
                        component="a"
                        href="#cu"
                    >
                        {/* <Card.Section className={classes.cardsec} >
                            <Image
                                src="/customization.png"
                                h={200}
                                w={280}
                                alt="No way!"
                            />
                        </Card.Section> */}

                        <Text fw={500} size="lg" mt="md">
                            Customization and Usage
                        </Text>

                        <Text mt="xs" c="dimmed" size="sm">
                            Please click anywhere on this card to claim your reward, this is not a
                            fraud, trust us
                        </Text>
                    </Card>
                </Grid.Col>

                <Grid.Col span={4}>
                    <Card
                        shadow="sm"
                        padding="xl"
                        component="a"
                        href="#qt"
                    >
                        {/* <Card.Section>
                            <Image
                                src="/troubleshooting.png"
                                h={200}
                                alt="No way!"
                            />
                        </Card.Section> */}

                        <Text fw={500} size="lg" mt="md">
                            Quarry & Troubleshoot
                        </Text>

                        <Text mt="xs" c="dimmed" size="sm">
                            Please click anywhere on this card to claim your reward, this is not a
                            fraud, trust us
                        </Text>
                    </Card>
                </Grid.Col>
            </Grid>

            <Container  className='setup-and-installation' id='si'>
                <Paper size="sm" bg={"black"} className={classes.wrapper}>
                    <Title ta="center">
                        Frequently Asked Questions
                    </Title>
                    <Title ta="center" order={3} className={classes.title} mt={12}>
                        Setup & Installation
                    </Title>

                    <Accordion variant="separated">
                        <Accordion.Item className={classes.item} value="reset-password">
                            <Accordion.Control>Q1: How do I install the Voice Navigation Plugin?</Accordion.Control>
                            <Accordion.Panel>Follow the detailed steps in our installation guide to integrate the plugin into your website.</Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item className={classes.item} value="another-account">
                            <Accordion.Control>
                                Q2: What are the prerequisites for installing the Voice Navigation Plugin?
                            </Accordion.Control>
                            <Accordion.Panel>Ensure you have access to your website&apos;s HTML files and the ability to edit them.</Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item className={classes.item} value="newsletter">
                            <Accordion.Control>
                                Q3: Do I need any special software to install the Voice Navigation Plugin?
                            </Accordion.Control>
                            <Accordion.Panel>No special software is needed. You only need access to your website&apos;s HTML files to add the necessary tags and scripts.</Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item className={classes.item} value="credit-card">
                            <Accordion.Control>
                                Q4: Can I test the Voice Navigation Plugin before fully implementing it on my site?
                            </Accordion.Control>
                            <Accordion.Panel>Yes, we recommend testing the plugin on a staging site before deploying it to your live website.</Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item className={classes.item} value="payment">
                            <Accordion.Control>
                                Q5: How do I know if the plugin is working correctly?
                            </Accordion.Control>
                            <Accordion.Panel>You should see a voice command interface appear on your webpage once the plugin is correctly installed. Try issuing a few test commands to verify functionality.</Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item className={classes.item} value="payment">
                            <Accordion.Control>
                                Q5: How do I know if the plugin is working correctly?
                            </Accordion.Control>
                            <Accordion.Panel>You should see a voice command interface appear on your webpage once the plugin is correctly installed. Try issuing a few test commands to verify functionality.</Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item className={classes.item} value="payment">
                            <Accordion.Control>
                                Q6: What should I do if I encounter errors during installation?
                            </Accordion.Control>
                            <Accordion.Panel>Refer to our troubleshooting section or contact our support team for assistance.</Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item className={classes.item} value="payment">
                            <Accordion.Control>
                                Q7: Can I uninstall the Voice Navigation Plugin if needed?
                            </Accordion.Control>
                            <Accordion.Panel>Yes, simply remove the tags and scripts you added to your HTML files to uninstall the plugin.</Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item className={classes.item} value="payment">
                            <Accordion.Control>
                                Q8: How do I update the Voice Navigation Plugin to the latest version?
                            </Accordion.Control>
                            <Accordion.Panel>Updates will be available on our website. You will receive notifications for any new updates, which can be applied by replacing the old script and CSS files with the new ones.</Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>
                </Paper>
            </Container>

            <Container className='Customization and Usage' id='cu'>
                <Paper bg={"black"} size="sm" className={classes.wrapper}>
                    <Title ta="center">
                        Frequently Asked Questions
                    </Title>
                    <Title ta="center" order={3} className={classes.title} mt={12}>
                        Customization and Usage
                    </Title>

                    <Accordion variant="separated">
                        <Accordion.Item className={classes.item} value="reset-password">
                            <Accordion.Control>Q1: Can I customize the voice command interface?</Accordion.Control>
                            <Accordion.Panel>Yes, you can customize the interface through CSS to match your website’s design.</Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item className={classes.item} value="another-account">
                            <Accordion.Control>
                                Q2: How do I manage the list of voice commands?
                            </Accordion.Control>
                            <Accordion.Panel>You can manage and customize voice commands through your profile settings on our website.

                            </Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item className={classes.item} value="newsletter">
                            <Accordion.Control>
                                Q3: Is there a limit to the number of commands I can add?
                            </Accordion.Control>
                            <Accordion.Panel>There is no limit to the number of voice commands you can add.</Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item className={classes.item} value="credit-card">
                            <Accordion.Control>
                                Q4: How do I train the plugin to recognize specific phrases or terms?
                            </Accordion.Control>
                            <Accordion.Panel>You can train the plugin by adding specific phrases or terms in the voice command settings in your profile.</Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item className={classes.item} value="payment">
                            <Accordion.Control>
                                Q5: Can I use the Voice Navigation Plugin with other accessibility tools?
                            </Accordion.Control>
                            <Accordion.Panel>Yes, the plugin is designed to complement other accessibility tools and can be used alongside screen readers and other assistive technologies.</Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item className={classes.item} value="payment">
                            <Accordion.Control>
                                Q6: How do I reset the voice navigation settings?
                            </Accordion.Control>
                            <Accordion.Panel>You can reset the settings through your profile on our website under the Voice Navigation section.</Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item className={classes.item} value="payment">
                            <Accordion.Control>
                                Q7: How do I optimize the voice navigation for better performance?
                            </Accordion.Control>
                            <Accordion.Panel>Ensure that the script and CSS files are properly optimized and up-to-date. You can also contact our support team for further optimization tips.</Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>
                </Paper>
            </Container>

            <Container className='Quarry & Troubleshoot' id='qt'>
                <Paper bg={"black"} size="sm" className={classes.wrapper}>
                    <Title ta="center" >
                        Frequently Asked Questions
                    </Title>
                    <Title ta="center" order={3} className={classes.title} mt={12}>
                        Quarry & Troubleshoot
                    </Title>

                    <Accordion variant="separated">
                        <Accordion.Item className={classes.item} value="reset-password">
                            <Accordion.Control>Q1: Why is the plugin not responding to voice commands?</Accordion.Control>
                            <Accordion.Panel>Check your microphone settings and ensure it has permission to access the website. Also, make sure your internet connection is stable.</Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item className={classes.item} value="another-account">
                            <Accordion.Control>
                                Q2: The voice navigation interface is not appearing. What should I do?
                            </Accordion.Control>
                            <Accordion.Panel>Ensure that the script and link tags are correctly placed in your HTML file. Check for any errors in the console log of your browser.</Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item className={classes.item} value="newsletter">
                            <Accordion.Control>
                                Q3: How can I reset the voice navigation settings?
                            </Accordion.Control>
                            <Accordion.Panel>You can reset the settings through your profile on our website under the Voice Navigation section.</Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item className={classes.item} value="credit-card">
                            <Accordion.Control>
                                Q4: The plugin is causing my website to load slowly. What can I do?
                            </Accordion.Control>
                            <Accordion.Panel>Ensure that the script and CSS files are properly optimized. You can also contact our support team for further optimization tips.</Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item className={classes.item} value="payment">
                            <Accordion.Control>
                                Q5: My voice commands are not being executed correctly. What should I check?
                            </Accordion.Control>
                            <Accordion.Panel>Verify that the commands are correctly configured in your profile settings. Make sure there are no conflicts with other scripts on your website.</Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item className={classes.item} value="payment">
                            <Accordion.Control>
                                Q6: How do I update the Voice Navigation Plugin to the latest version?
                            </Accordion.Control>
                            <Accordion.Panel>Updates will be available on our website. You will receive notifications for any new updates, which can be applied by replacing the old script and CSS files with the new ones.</Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item className={classes.item} value="payment">
                            <Accordion.Control>
                                Q7: Why is the voice recognition accuracy low?
                            </Accordion.Control>
                            <Accordion.Panel>Ensure you are speaking clearly and that there is minimal background noise. You may also need to update your microphone settings.</Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item className={classes.item} value="payment">
                            <Accordion.Control>
                                Q8: Can I get help from other users if I have a problem?
                            </Accordion.Control>
                            <Accordion.Panel>Yes, you can visit our community forums to get help from other users and our support team.</Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item className={classes.item} value="payment">
                            <Accordion.Control>
                                Q9: How do I contact support for help?
                            </Accordion.Control>
                            <Accordion.Panel>You can contact our support team through the help center on our website or by emailing voicetourps@gmail.com</Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item className={classes.item} value="payment">
                            <Accordion.Control>
                                Q10: Is there a user manual available for the Voice Navigation Plugin?
                            </Accordion.Control>
                            <Accordion.Panel>Yes, a detailed user manual is available on our documentation page for download.

                            </Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>
                </Paper>
            </Container>

        </Container>
    )
}

export default Faqs