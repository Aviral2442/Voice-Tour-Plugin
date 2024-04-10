'use client'
import React from 'react'
import { Autocomplete, Group, Burger, rem, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './userNavbar.module.css';

const links = [
    { link: '/voiceAssistant', label: 'Voice Assistant' },
    { link: '/tourGenerator', label: 'Tour Generator' },
    { link: '/learn', label: 'Learn' },
    { link: '/community', label: 'Community' },
];


export function UserNavbar() {
    const [opened, { toggle }] = useDisclosure(false);

    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={classes.link}
            onClick={(event) => event.preventDefault()}
        >
            {link.label}
        </a>
    ));
    return (
        <header className={classes.header}>
            <div className={classes.inner}>
                <Group>
                    <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
                    <Title size={25} style={{ color: '#4ECA3E' }}>VoiceTour Navigator</Title>
                </Group>

                <Group>
                    <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
                        {items}
                    </Group>
                    <Autocomplete
                        className={classes.search}
                        placeholder="Search"
                        leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                        data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
                        visibleFrom="xs"
                    />
                </Group>
            </div>
        </header>
    )
}

export default UserNavbar