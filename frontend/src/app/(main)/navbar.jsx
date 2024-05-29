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
            onClick={logout}
            color='red'
            leftSection={
              <IconLogout style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
            }>
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    } else {
      return <Button component={Link} href='/login' variant='outline' color='#66ff00' className={clsx(classes.button, fonts.className)}>
        <Lottie animationData={avatar} className={classes.avi} /> Login
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