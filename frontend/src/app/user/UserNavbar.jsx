'use client'
import React from 'react'
import {
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
    useMantineTheme,
    Title,
    TextInput,
    Code,
    Image,
} from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import { useDisclosure } from '@mantine/hooks';
import {
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
    IconChevronDown,
    IconSearch,
} from '@tabler/icons-react';
import classes from './userNavbar.module.css';
import Link from 'next/link';
import cx from 'clsx';
import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import Lottie from 'lottie-react';
import avatar from './avatar.json'
import clsx from 'clsx'
import { Cormorant_Garamond, Londrina_Solid } from 'next/font/google'
import { useState } from "react"
import { Spotlight, spotlight } from "@mantine/spotlight"
import '@mantine/spotlight/styles.css';

const font = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });




const data = [
    "Home",
    "About us",
    "Contacts",
    "Blog",
    "Careers",
    "Terms of service"
]

export function UserNavbar() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();

    const { setColorScheme } = useMantineColorScheme()
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });



    const [query, setQuery] = useState("");

    const items = data
        .filter(item => item.toLowerCase().includes(query.toLowerCase().trim()))
        .map(item => <Spotlight.Action key={item} label={item} />)

    return (
        <Box >
            <header className={classes.header}>
                <Group justify='space-between' h="100%">
                    <Anchor href="http://localhost:3000/" underline="never">
                        <Image src="/logo2.png" alt="VoiceTour Navigator" className={classes.Image} />
                    </Anchor>


                    <Group visibleFrom="sm">
                        <Group h="100%" gap={0} visibleFrom="sm">
                            <a href="http://localhost:3000/" className={clsx(classes.link, font.className)}>
                                HOME
                            </a>
                            <a href="/voiceAssistant" className={clsx(classes.link, font.className)}>
                                VOICE ASSISTANT
                            </a>
                            <a href="/tourGenerator" className={clsx(classes.link, font.className)}>
                                TOUR GENERATOR
                            </a>
                            <a href="#" className={clsx(classes.link, font.className)}>
                                DOCUMENTATION
                            </a>

                            <a href="/about" className={clsx(classes.link, font.className)}>
                                ABOUT US
                            </a>
                            <a href="/contact" className={clsx(classes.link, font.className)}>
                                CONTACT US
                            </a>
                        </Group>

                        <ActionIcon onClick={spotlight.open} variant="gradient" aria-label="Settings" size="lg" gradient={{ from: '#66ff00', to: '#39FF14', deg: 0 }}>
                            <IconSearch style={{ width: '70%', height: '70%', color: '#282828' }} stroke={2} />
                        </ActionIcon>

                        <Spotlight.Root query={query} onQueryChange={setQuery}>
                            <Spotlight.Search
                                placeholder="Search..."
                                leftSection={<IconSearch stroke={1.5} />}
                            />
                            <Spotlight.ActionsList>
                                {items.length > 0 ? (
                                    items
                                ) : (
                                    <Spotlight.Empty>Nothing found...</Spotlight.Empty>
                                )}
                            </Spotlight.ActionsList>
                        </Spotlight.Root>

                        <Button component={Link} href='/signup' variant='outline' color='white' className={clsx(classes.button, font.className)}>
                            <Lottie animationData={avatar} className={classes.avi} />
                            Sign up</Button>

                    </Group>

                    <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />


                </Group>
            </header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Navigation"
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
                    <Divider my="sm" />

                    <a href="#" className={classes.link}>
                        Home
                    </a>
                    <UnstyledButton className={classes.link} onClick={toggleLinks}>
                        <Center inline>
                            <Box component="span" mr={5}>
                                Features
                            </Box>
                            <IconChevronDown
                                style={{ width: rem(16), height: rem(16) }}
                                color={theme.colors.blue[6]}
                            />
                        </Center>
                    </UnstyledButton>

                    <a href="/about" className={classes.link}>
                        About
                    </a>
                    <a href="/contact" className={classes.link}>
                        Contact Us
                    </a>

                    <Divider my="sm" />

                    <Group justify="center" grow pb="xl" px="md">
                        <Button variant="default">Log in</Button>
                        <Button>Sign up</Button>
                    </Group>
                </ScrollArea>
            </Drawer>
        </Box>
    )
}

export default UserNavbar