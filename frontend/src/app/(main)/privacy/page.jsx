'use client'
import React from 'react'
import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem, Paper, Divider } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from './privacy.module.css';
import { Cormorant_Garamond, Josefin_Sans } from 'next/font/google';
import clsx from 'clsx';
import Navbar from '../navbar';
import { Footer } from '../footer';

const font = Josefin_Sans({ subsets: ['latin'], weight: ['400'] });
const fonts = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });


export function Privacy() {
    return (
        <>
        <Navbar />
            <Container size="md">
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={clsx(classes.title, fonts.className)}>
                            Privacy <span className={classes.highlight}>Policy</span>
                        </Title>

                    </div>
                </div>
            </Container>
            <Divider size="md" />
            <Container size="xl" bg={"black"} p="xl">
                <Paper shadow="xs" radius="md"  p={15 } bg={"black"}>
                    <Title className={clsx(classes.title, fonts.className)} fz={50}>Privacy Policy</Title>

                    <Text className={clsx(classes.text, font.className)}>A privacy policy is a legal document that outlines how a website or organization collects, uses, discloses, and protects user information. It typically includes the following key sections:
                    </Text>
                    <br />
                    <Title order={4}>Information Collection:</Title>

                    <Text className={clsx(classes.text, font.className)}> Describe the types of information collected from users, such as personal information (e.g., name, email address, etc.), browsing data (e.g., cookies, IP addresses, etc.), and any other relevant data.
                    </Text>
                    <br />
                    <Title order={4}>Use of Information: </Title>

                    <Text className={clsx(classes.text, font.className)}>  Explain how the collected information is used, including purposes such as improving website functionality, providing personalized content, conducting analytics, and fulfilling user requests.
                    </Text>
                    <br />
                    <Title order={4}>Data Sharing:</Title>

                    <Text className={clsx(classes.text, font.className)}> Detail if and when user information is shared with third parties, such as service providers, partners, or advertisers. Specify the circumstances under which data may be shared and the purposes for which it is shared.
                    </Text>
                    <br />
                    <Title order={4}>Data Security:</Title>

                    <Text className={clsx(classes.text, font.className)}>  Outline the measures taken to protect user information from unauthorized access, disclosure, alteration, or destruction. This may include encryption, access controls, and regular security audits.
                    </Text>
                    <br />
                    <Title order={4}>User Rights:</Title>

                    <Text className={clsx(classes.text, font.className)}>  Inform users of their rights regarding their personal data, such as the right to access, correct, or delete their information. Provide instructions on how users can exercise these rights.
                    </Text>
                    <br />
                    <Title order={4}>Cookies and Tracking:</Title>

                    <Text className={clsx(classes.text, font.className)}> Explain the use of cookies, web beacons, and other tracking technologies on the website, including their purpose, types used, and options for managing preferences.
                    </Text>
                    <br />
                    <Title order={4}>Changes to Policy:</Title>

                    <Text className={clsx(classes.text, font.className)}> State that the privacy policy may be updated or revised periodically and provide a mechanism for users to review changes.
                    </Text>
                    <br />
                    <Title order={4}>Contact Information:</Title>

                    <Text className={clsx(classes.text, font.className)}>Include contact details for users to reach out with questions, concerns, or requests related to privacy matters.
                    </Text>


                </Paper>
            </Container>

            <Footer />
        </>
    )
}

export default Privacy