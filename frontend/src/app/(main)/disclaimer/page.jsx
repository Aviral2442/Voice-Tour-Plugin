'use client'
import React from 'react'
import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem, Paper, Divider } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from './disclamer.module.css';
import { Cormorant_Garamond, Josefin_Sans } from 'next/font/google';
import clsx from 'clsx';
import Navbar from '../navbar';
import { Footer } from '../footer';

const font = Josefin_Sans({ subsets: ['latin'], weight: ['400'] });
const fonts = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });


export function Disclaimer() {
  return (
    <>
      <Navbar />
      <Container size="md" >
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={clsx(classes.title, fonts.className)}>
              Disclaimer
            </Title>

          </div>
        </div>
      </Container>
      <Divider size="md" />
      <Container size="xl" bg={"black"} p="xl">
        <Paper shadow="xs" radius="md" p={15} bg={"black"}>
          <Text className={clsx(classes.text, font.className)}>A disclaimer is a statement intended to limit the liability of the website or organization for certain types of information or content provided on the website. It typically includes the following elements:
          </Text>
          <br />

          <Title order={4} mt="md">Accuracy of Information</Title>
          <Text className={clsx(classes.text, font.className)}>Clarify that the information provided on the website is for general informational purposes only and may not be accurate, complete, or up-to-date.
          </Text>
          <br />

          <Title order={4}  mt="md">No Guarantees</Title>
          <Text className={clsx(classes.text, font.className)}>State that the website makes no guarantees or warranties regarding the accuracy, reliability, or suitability of the information or content provided.
          </Text>
          <br />

          <Title order={4}  mt="md">Third-Party Content</Title>
          <Text className={clsx(classes.text, font.className)}> Disclaim responsibility for any content, products, or services provided by third parties that may be linked to or referenced on the website.
          </Text>
          <br />

          <Title order={4}  mt="md">Professional Advice</Title>
          <Text className={clsx(classes.text, font.className)}> Advise users to seek professional advice or consultation before making decisions based on information obtained from the website
          </Text>
          <br />

          <Title order={4}  mt="md">Limitation of Liability</Title>
          <Text className={clsx(classes.text, font.className)}> Limit the website&apos;s liability for any damages or losses arising from reliance on the information or content provided on the website.
          </Text>
          <br />

          <Title order={4}  mt="md">Changes to Content</Title>
          <Text className={clsx(classes.text, font.className)}> Reserve the right to modify, update, or remove content on the website at any time without prior notice.
          </Text>
          <br />

          <Title order={4}  mt="md">No Endorsement</Title>
          <Text className={clsx(classes.text, font.className)}>Clarify that inclusion of links, references, or endorsements of third-party content does not imply endorsement or affiliation with the website or organization.

          </Text>
          <br />


          <Title order={4}  mt="md">User Responsibility </Title>
          <Text className={clsx(classes.text, font.className)}> Remind users to use their own discretion and judgment when accessing or relying on information obtained from the website.
          </Text>



        </Paper>
      </Container>

      <Footer />
    </>
  )
}

export default Disclaimer