'use client'
import React from 'react'
import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem, Paper, Divider } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from './terms.module.css';
import { Cormorant_Garamond, Josefin_Sans } from 'next/font/google';
import clsx from 'clsx';
import Navbar from '../navbar';
import { Footer } from '../footer';

const font = Josefin_Sans({ subsets: ['latin'], weight: ['400'] });
const fonts = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });


export function TermsofService() {
  return (
    <>
      <Navbar />
      <Container size="md">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={clsx(classes.title, fonts.className)}>
              Terms and <span className={classes.highlight}>Conditions</span>
            </Title>

          </div>
        </div>
      </Container>
      <Divider size="md" />
      <Container size="xl" bg={"black"} p="xl">
        <Paper shadow="xs" radius="md" p={15} bg={"black"}>
          <Title className={clsx(classes.title, fonts.className)} fz={50}>Terms and Conditions </Title>

          <Text className={clsx(classes.text, font.className)}>Terms and conditions (also known as terms of service or terms of use) are a legal agreement between the website or organization and its users. They govern the use of the website and outline the rights and responsibilities of both parties. A terms and conditions document typically includes the following components:
          </Text>
          <br />

          <Title order={4}>Acceptance of Terms:</Title>
          <Text className={clsx(classes.text, font.className)}>Define acceptable and prohibited uses of the website, including actions such as unauthorized access, spamming, and illegal activities.
          </Text>
          <br />
          <Title order={4}>User Conduct:</Title>
          <Text className={clsx(classes.text, font.className)}> Define acceptable and prohibited uses of the website, including actions such as unauthorized access, spamming, and illegal activities.
          </Text>
          <br />

          <Title order={4}>Intellectual Property:</Title>
          <Text className={clsx(classes.text, font.className)}>  Specify ownership and usage rights for content, trademarks, and other intellectual property displayed on the website. Include provisions for user-generated content and copyright infringement.
          </Text>
          <br />

          <Title order={4}>Limitation of Liability:</Title>
          <Text className={clsx(classes.text, font.className)}> Limit the website's liability for damages arising from use of the website, including indirect, incidental, or consequential damages.
          </Text>
          <br />

          <Title order={4}>Indemnification:</Title>
          <Text className={clsx(classes.text, font.className)}>  Require users to indemnify and hold harmless the website or organization from any claims, damages, or losses resulting from user actions or violations of the terms and conditions.
          </Text>
          <br />

          <Title order={4}>Governing Law:</Title>
          <Text className={clsx(classes.text, font.className)}> Determine the jurisdiction and laws that govern the terms and conditions, including dispute resolution procedures.
          </Text>
          <br />

          <Title order={4}>Changes to Terms:</Title>
          <Text className={clsx(classes.text, font.className)}>Reserve the right to update or modify the terms and conditions at any time, with notice provided to users.
          </Text>

          <br />
          <Title order={4}>Termination: </Title>
          <Text className={clsx(classes.text, font.className)}> Outline circumstances under which the website or organization may terminate user access to the website, such as for violations of the terms and conditions.
          </Text>


        </Paper>
      </Container>

      <Footer />
    </>
  )
}

export default TermsofService