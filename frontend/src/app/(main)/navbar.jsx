'use client'
import React from 'react'
import {
  Group,
  Button,
  UnstyledButton,
  Text,
  Anchor,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  useMantineTheme,
  Image,
  Menu,
  Avatar,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconChevronDown,
  IconSearch,
  IconLogout,
  IconUser,
  IconMail,
} from '@tabler/icons-react';
import classes from './HeaderMegaMenu.module.css';
import Link from 'next/link';
import cx from 'clsx';
import { ActionIcon } from '@mantine/core';
import Lottie from 'lottie-react';
import avatar from './avatar.json'
import clsx from 'clsx'
import { Cormorant_Garamond, Jost } from 'next/font/google'
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

function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const { logout, loggedIn, currentUser } = useAppContext();



  const [query, setQuery] = useState("");

  const [userMenuOpened, setUserMenuOpened] = useState(false);

  const router = useRouter();
  const path = usePathname();

  const items = data
    .filter(({ label, link }) => label.toLowerCase().includes(query.toLowerCase().trim()))
    .map(({ label, link }) => <Spotlight.Action
      label={label}
      key={label}
      onClick={() => router.push(link)}
    />)


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
            <Group gap={7}>

              <Avatar src={"http://localhost:5000/" + currentUser.avatar} alt={currentUser.name} radius="xl" size={40} />

              <Text fw={500} size="md" lh={1} mr={3} className={fonts.className}>
                {currentUser.name}
              </Text>
              <IconChevronDown style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
            </Group>
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            color='white'
            fz={16}
            className={fonts.className}
            leftSection={
              // <IconMail style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
              <svg style={{ width: rem(16), height: rem(16) }}   viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h256v256H0z" fill="none" />
                <path
                  className="colorStroke000000 svgStroke"
                  d="M181.084 207.997a96.008 96.008 0 1142.919-80.002c0 22.092-8 40-28 40s-28-17.908-28-40v-40"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeWidth="20"
                />
                <circle
                  className="colorStroke000000 svgStroke"
                  cx="128.003"
                  cy="127.995"
                  fill="none"
                  r="40"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeWidth="20"
                />
              </svg>
            }>
            {currentUser.email}
          </Menu.Item>
          <Menu.Item
            component="a"
            href="/user/profile"
            color='white'
            fz={16}
            className={fonts.className}
            leftSection={
              // <IconUser style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
              <svg style={{ width: rem(16), height: rem(16) }} stroke={1.5} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="color000000 svgShape"
                  d="M14 6c0-2.206-1.794-4-4-4S6 3.794 6 6s1.794 4 4 4 4-1.794 4-4zm6 14h-5v-2h2.784c-.826-3.786-3.999-6-7.784-6-3.785 0-6.958 2.214-7.784 6H5v2H0c0-4.555 2.583-7.952 6.242-9.327A5.983 5.983 0 014 6a6 6 0 119.758 4.673C17.417 12.048 20 15.445 20 20zm-7.586-5.243l1.414 1.415L10 20l-2.828-2.828 1.414-1.415L10 17.172l2.414-2.415z"
                  fill="#fff"
                  fillRule="evenodd"
                />
              </svg>
            }>
            Profile
          </Menu.Item>
          <Menu.Item
            onClick={logout}
            color='red'
            fz={16}
            className={fonts.className}
            leftSection={
              // <IconLogout style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
              <svg style={{ width: rem(16), height: rem(16) }} stroke={1.5} viewBox="0 0 6.35 6.35" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="color svgShape"
                  style={{
                    lineHeight: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantPosition: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantAlternates: "normal",
                    fontFeatureSettings: "normal",
                    textIndent: "0",
                    textAlign: "start",
                    textDecorationLine: "none",
                    textDecorationStyle: "solid",
                    textDecorationColor: "#000",
                    textTransform: "none",
                    textOrientation: "mixed",
                    shapePadding: "0",
                    isolation: "auto",
                    mixBlendMode: "normal",
                  }}
                  d="M2.104.264a.8.8 0 00-.795.795v4.233a.8.8 0 00.795.794h1.057a.8.8 0 00.795-.794v-1.06c0-.352-.53-.352-.53 0v1.06a.26.26 0 01-.265.265H2.104a.26.26 0 01-.265-.265V1.059a.26.26 0 01.265-.266h1.057a.26.26 0 01.266.266v1.059c0 .353.529.353.529 0v-1.06a.8.8 0 00-.795-.794H2.104zM.518 1.32a.265.265 0 00-.267.27v3.173a.265.265 0 00.529 0V1.589a.265.265 0 00-.26-.27.265.265 0 00-.002 0zm4.243.53a.265.265 0 00-.026 0 .265.265 0 00-.158.454l.607.607H2.648a.266.266 0 00-.028 0c-.353.019-.325.548.028.53h2.535l-.606.605a.265.265 0 10.373.375l1.06-1.059a.265.265 0 000-.373L4.95 1.93a.265.265 0 00-.189-.081z"
                  fill="red"
                  fontFamily="sans-serif"
                  fillRule="evenodd"
                />
              </svg>
            }>
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    } else {
      return <Button component={Link} href='/login' variant='outline' color='#66ff00' className={clsx(classes.button, fonts.className)}>
        {/* <Lottie animationData={avatar} className={classes.avi} />  */}
        Login
      </Button>
    }
  }

  return (
    <Box >
      <header className={classes.header}>
        <Group justify='space-between' h="100%" >

          <Anchor href="http://localhost:3000/" underline="never">
            <Image src="/logo2.png" alt="VoiceTour Navigator" className={classes.Image} />
          </Anchor>


          <Group visibleFrom="md">

            <Group h="100%" gap={0} visibleFrom="md" >
              <a href="http://localhost:3000/" className={clsx(classes.link, fonts.className, path === '/' && classes.links)}>
                HOME
              </a>
              <a href="/voiceAssistant" className={clsx(classes.link, fonts.className, path === '/voiceAssistant' && classes.links)}>
                VOICE ASSISTANT
              </a>
              <a href="/tourGenerator" className={clsx(classes.link, fonts.className, path === '/tourGenerator' && classes.links)}>
                TOUR GENERATOR
              </a>
              <a href="/about" className={clsx(classes.link, fonts.className, path === '/about' && classes.links)}>
                ABOUT US
              </a>
              <a href="/contact" className={clsx(classes.link, fonts.className, path === '/contact' && classes.links)}>
                CONTACT US
              </a>
            </Group>


            <ActionIcon onClick={spotlight.open} variant="gradient" aria-label="Settings" size="lg" gradient={{
              from: '#66ff00',
              to: '#39FF14', deg: 0
            }}>
              <IconSearch style={{ width: '70%', height: '70%', color: '#282828' }} stroke={2} />
            </ActionIcon>

            <Spotlight.Root query={query} onQueryChange={setQuery}>
              <Spotlight.Search
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

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="md" />

        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="VoiceTour Navigator"
        hiddenFrom="md"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="md" />

          <a href="/" className={classes.link}>
            Home
          </a>
          <a href="/voiceAssistant" className={classes.link}>
            Voice Assistant
          </a>
          {/* <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Voice Assistant
              </Box>
             
            </Center>
          </UnstyledButton> */}
          {/* <Collapse in={linksOpened}>{links}</Collapse> */}
          <a href="/tourGenerator" className={classes.link}>
            Tour Generator
          </a>
          <a href="/about" className={classes.link}>
            About Us
          </a>
          <a href="/contact" className={classes.link}>
            Contact Us
          </a>

          <Divider my="md" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default" color='black '>
              <a href="/login" >
                Log In
              </a>
            </Button>
            <Button variant='white' color='#66ff00'>
              <a href="/signup" >
                Sign Up
              </a>
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  )
}

export default Navbar;