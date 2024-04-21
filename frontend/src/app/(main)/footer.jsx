'use client'
import React from 'react';
import { Text, Container, ActionIcon, Group, rem, Title, Image, TextInput, Button, Anchor } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconAt, IconSquareRoundedArrowUp } from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './Footer.module.css';
import { useWindowScroll } from '@mantine/hooks';
import clsx from 'clsx';
import { Notifications, notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';
import Link from 'next/link';


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
            <Container className={classes.inner} fluid>
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
                            label="Email"
                            placeholder="Your email" />
                        <Button
                            onClick={() =>
                                Notifications.show({
                                    color: '#262525',
                                    title: 'Subscribed! 🎉',
                                    message: 'You have successfully subscribed to our website!',
                                    classNames: classes,
                                })
                            }
                            mt='md' variant='outline' color='#66ff00'>Suscribe</Button>

                    </div>
                </div>

                <div className={classes.groups}>{groups}</div>

            </Container>
            <Container className={classes.secondInner} fluid >

                <Group justify="space-between" wrap="nowrap" gap="xl">
                    <div className={clsx(classes.card, classes.social)} >
                        <a className={classes.socialLink1} component={Link} href='https://www.instagram.com/' >
                            <svg
                                viewBox="0 0 16 16"
                                className="bi bi-instagram"
                                fill="currentColor"
                                height={16}
                                width={16}
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ color: "white" }}
                            >
                                {" "}
                                <path
                                    fill="white"
                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                />{" "}
                            </svg>
                        </a>
                        <a className={classes.socialLink2} component={Link} href='https://twitter.com/'>
                            <svg
                                viewBox="0 0 512 512"
                                className="bi bi-twitter"
                                fill="currentColor"
                                height={16}
                                width={16}
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ color: "white" }}
                            >
                                {" "}
                                <g clipPath="url(#a)">
                                    <rect height="512" width="512" fill="none" rx="60" />
                                    <path
                                        d="M355.904 100h52.928L293.2 232.16 429.232 412H322.72l-83.424-109.072L143.84 412H90.88l123.68-141.36L84.065 100H193.28l75.408 99.696L355.904 100zm-18.576 280.32h29.328L177.344 130.016h-31.472L337.328 380.32z"
                                        fill="#fff"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="a">
                                        <path d="M0 0h512v512H0z" fill="#fff" />
                                    </clipPath>
                                </defs>

                                {" "}
                            </svg>{" "}
                        </a>

                        <a className={classes.socialLink4} component={Link} href='https://www.facebook.com/'>
                            <svg
                                viewBox="0 0 32 32"
                                className="bi bi-facebook"
                                fill="currentColor"
                                height={26}
                                width={26}
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ color: "white" }}
                            >
                                {" "}

                                <path d="M17.892 1.058c-3.366 0-4.932 2.055-4.932 4.932v6.948h-2.38c-.88 0-1.588.708-1.588 1.588v3.343c0 .88.708 1.588 1.587 1.588h2.381v11.78c0 .88.708 1.587 1.588 1.587h3.344c.88 0 1.587-.708 1.587-1.587v-11.78h3.056c.88 0 1.4-.728 1.587-1.588l.728-3.343c.187-.86-.708-1.588-1.588-1.588H19.48v-2.156c0-2.377.535-3.205 2.85-3.205h.677c.88 0 1.588-.708 1.588-1.587V2.646c0-.88-.708-1.588-1.588-1.588h-5.114z" />

                                {" "}
                            </svg>
                        </a>
                    </div>

                    <div className={classes.Scroll}>
                        <ActionIcon mt={20} onClick={() => scrollTo({ y: 0 })} variant="filled" aria-label="Settings" size="lg" radius="md" bg={'black'}>
                            <IconSquareRoundedArrowUp style={{ width: rem(58), height: rem(58), color: '#66ff00' }} stroke={1.5} />
                        </ActionIcon>
                    </div>
                </Group>
            </Container>

            <Container className={classes.afterFooter}>
                <Text c="#c3cbdc" size="sm">
                    © 2024 VoiceTour Navigator. All rights reserved.
                </Text>


                <Group justify="space-between" wrap="nowrap" gap="xl">
                    <Text c="dimmed" size="sm">
                        <Anchor c="#c3cbdc" component={Link} href="/privacy">Privacy policy</Anchor>   |  <Anchor c="#c3cbdc" component={Link} href="/terms"> Terms and Conditions</Anchor> |  <Anchor c="#c3cbdc" component={Link} href="/disclaimer">Disclaimer</Anchor>
                    </Text>
                </Group>
            </Container>
        </footer>

    )
}
