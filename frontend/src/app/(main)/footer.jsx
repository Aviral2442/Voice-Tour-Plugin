'use client'
import React from 'react';
import { Text, Container, ActionIcon, Group, rem, Title, Image, TextInput, Button } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconAt, IconSquareRoundedArrowUp } from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './Footer.module.css';
import { useWindowScroll } from '@mantine/hooks';


const data = [
    {
        title: 'About',
        links: [
            { label: 'Features', link: '#' },
            { label: 'Pricing', link: '#' },
            { label: 'Support', link: '#' },
            { label: 'Forums', link: '#' },
        ],
    },
    {
        title: 'Project',
        links: [
            { label: 'Contribute', link: '#' },
            { label: 'Media assets', link: '#' },
            { label: 'Changelog', link: '#' },
            { label: 'Releases', link: '#' },
        ],
    },
    {
        title: 'Community',
        links: [
            { label: 'Join Discord', link: '#' },
            { label: 'Follow on Twitter', link: '#' },
            { label: 'Email newsletter', link: '#' },
            { label: 'GitHub discussions', link: '#' },
        ],
    },
];

export function Footer() {
    const groups = data.map((group) => {
        const links = group.links.map((link, index) => (
            <Text
                key={index}
                className={classes.link}
                //   component="a"
                href={link.link}
                onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </Text>
        ));

        return (
            <div className={classes.wrapper} key={group.title}>
                <Text className={classes.title}>{group.title}</Text>
                {links}
            </div>
        );
    });
    const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
    const [scroll, scrollTo] = useWindowScroll();

    return (

        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <div className={classes.logo}>
                    <Image src="/logo2.png" alt="VoiceTour Navigator" className={classes.Image} />
                    <Text size="xs" c="dimmed" className={classes.description}>
                        Build fully functional accessible web applications faster than ever
                    </Text>
                    <div>
                        <TextInput
                            mt="md"
                            rightSectionPointerEvents="none"
                            rightSection={icon}
                            label="Your email"
                            placeholder="Your email"
                            color='#66FF00'

                        />
                        <Button mt='md' className={classes.Btn}>Suscribe</Button>
                    </div>
                </div>
                <div className={classes.groups}>{groups}</div>
            </Container>
            <Container className={classes.afterFooter}>
                <Text c="dimmed" size="sm">
                    © 2020 VoiceTour Navigator. All rights reserved.
                </Text>

                <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                </Group>
                <Group justify="center">
                    <ActionIcon onClick={() => scrollTo({ y: 0 })} variant="filled" aria-label="Settings" size="lg"  radius="md" bg={'black'}>
                    <IconSquareRoundedArrowUp style={{ width: rem(58), height: rem(58), color:'#66ff00' }} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </footer>

    )
}
