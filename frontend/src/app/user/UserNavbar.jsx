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
    Menu,
    Avatar,
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
    IconLogout,
} from '@tabler/icons-react';
import classes from './userNavbar.module.css';
import Link from 'next/link';
import cx from 'clsx';
import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import Lottie from 'lottie-react';
import avatar from './avatar.json'
import clsx from 'clsx'
import { Cormorant_Garamond, Jost, Londrina_Solid } from 'next/font/google'
import { useState } from "react"
import { Spotlight, spotlight } from "@mantine/spotlight"
import '@mantine/spotlight/styles.css';
import useAppContext from '@/context/AppContext';
import { usePathname, useRouter } from 'next/navigation';

const font = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });
const fonts = Jost({ subsets: ['latin'], weight: ['100', '400'] });




const data = [
    { label: "Home", link: "/" },
    { label: "Voice Assistant", link: "/voiceAssistant" },
    { label: "Tour Generator", link: "/tourGenerator" },
    { label: "About Us", link: "/about" },
    { label: "Contact Us", link: "/contact" },
]

export function UserNavbar() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();

    const { setColorScheme } = useMantineColorScheme()
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

    const { logout, loggedIn, currentUser } = useAppContext();



    const [query, setQuery] = useState("");
    const router = useRouter();
    const path = usePathname();

    const items = data
        .filter(({ label, link }) => label.toLowerCase().includes(query.toLowerCase().trim()))
        .map(({ label, link }) => <Spotlight.Action
            label={label}
            key={label}
            onClick={() => router.push(link)}
        />)


    const [userMenuOpened, setUserMenuOpened] = useState(false);

    const displayLoginOptions = () => {
        if (loggedIn) {
            return <Menu
                width={260}
                position="bottom-end"
                transitionProps={{ transition: 'pop-top-right' }}
                onClose={() => setUserMenuOpened(false)}
                onOpen={() => setUserMenuOpened(true)}
                withinPortal
            >
                <Menu.Target>
                    <UnstyledButton
                        className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
                    >
                        <Group gap={7} >
                            <Avatar src={'http://localhost:5000/' + currentUser.avatar} alt={currentUser.name} radius="xl" size={40} />
                            <Text fw={500} size="lg" lh={1} mr={3} c={"white"} className={font.className}>
                                {currentUser.name}
                            </Text>
                            {/* <IconChevronDown style={{ width: rem(12), height: rem(12) }} stroke={1.5} /> */}
                        </Group>
                    </UnstyledButton>
                </Menu.Target>
                {/* <Menu.Dropdown>

                    <Menu.Item
                        onClick={logout}
                        color='red'
                        leftSection={
                            <IconLogout style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                        }>
                        Logout
                    </Menu.Item>
                </Menu.Dropdown> */}
            </Menu>
        } else {
            return <Button component={Link} href='/login' variant='outline' color='white' className={clsx(classes.button, font.className)}>
                <Lottie animationData={avatar} className={classes.avi} /> Login
            </Button>
        }
    }
    return (
        <Box >
            <header className={classes.header}>
                <Group justify='space-between' h="100%">
                    <Anchor href="http://localhost:3000/" underline="never">
                        <Image src="/logo2.png" alt="VoiceTour Navigator" className={classes.Image} />
                    </Anchor>


                    <Group visibleFrom="sm"  >
                        <Group h="100%" gap={0} visibleFrom="sm" mr={"140"}>
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


                        <ActionIcon onClick={spotlight.open} variant="gradient" aria-label="Settings" size="lg" gradient={{
                            from: 'white',
                            to: 'white', deg: 0
                        }}>
                            <IconSearch style={{ width: '70%', height: '70%', color: 'black' }} stroke={2} />
                        </ActionIcon>

                        <Spotlight.Root query={query} onQueryChange={setQuery} >
                            <Spotlight.Search
                                className={clsx(classes.spotlightSearch, fonts.className)}
                                placeholder="Search..."
                                leftSection={<IconSearch stroke={1.5} />}

                            />
                            <Spotlight.ActionsList className={clsx(classes.spotlightList, fonts.className)}>
                                {items.length > 0 ? (
                                    items
                                ) : (
                                    <Spotlight.Empty>Nothing found...</Spotlight.Empty>
                                )}
                            </Spotlight.ActionsList>
                        </Spotlight.Root>

                        {displayLoginOptions()}

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