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
import classes from './HeaderMegaMenu.module.css';
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


const mockdata = [
  {
    icon: IconCode,
    title: 'Open source',
    description: 'This Pokémon’s cry is very loud and distracting',
  },
  {
    icon: IconCoin,
    title: 'Free for everyone',
    description: 'The fluid of Smeargle’s tail secretions changes',
  },
  {
    icon: IconBook,
    title: 'Documentation',
    description: 'Yanma is capable of seeing 360 degrees without',
  },
  {
    icon: IconFingerprint,
    title: 'Security',
    description: 'The shell’s rounded shape and the grooves on its.',
  },
  {
    icon: IconChartPie3,
    title: 'Analytics',
    description: 'This Pokémon uses its flying ability to quickly chase',
  },
  {
    icon: IconNotification,
    title: 'Notifications',
    description: 'Combusken battles with the intensely hot flames it spews',
  },
];

const data = [
  "Home",
  "About us",
  "Contacts",
  "Blog",
  "Careers",
  "Terms of service"
]

function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const { setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>



  ));

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
              {/* <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <a href="#" className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        Features
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color={theme.colors.blue[6]}
                      />
                    </Center>
                  </a>
                </HoverCard.Target>

                <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                  <Group justify="space-between" px="md">
                    <Text fw={500}>Features</Text>
                    <Anchor href="#" fz="xs">
                      View all
                    </Anchor>
                  </Group>

                  <Divider my="sm" />

                  <SimpleGrid cols={2} spacing={0}>
                    {links}
                  </SimpleGrid>

                  <div className={classes.dropdownFooter}>
                    <Group justify="space-between">
                      <div>
                        <Text fw={500} fz="sm">
                          Get started
                        </Text>
                        <Text size="xs" c="dimmed">
                          Their food sources have decreased, and their numbers
                        </Text>
                      </div>
                      <Button variant="default">Get started</Button>
                    </Group>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard> */}
              <a href="/about" className={clsx(classes.link, font.className)}>
                ABOUT US
              </a>
              <a href="/contact" className={clsx(classes.link, font.className)}>
                CONTACT US
              </a>
            </Group>

            <Button onClick={spotlight.open}>Search</Button>

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
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
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

export default Navbar;