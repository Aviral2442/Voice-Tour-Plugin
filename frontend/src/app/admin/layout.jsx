'use client';
import React from 'react';
import { AppShell, Burger, Group, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import AdminNavbar from './navbar';
import Sidebar from './sidebar';
import { MantineLogo } from '@mantinex/mantine-logo';

const Layout = ({ children }) => {
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure()
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true)
    return (
        // <AppShell
        //     header={{ height: { base: 60, md: 70, lg: 80 } }}
        //     navbar={{
        //         width: { base: 200, md: 300, lg: 400 },
        //         breakpoint: 'sm',
        //         collapsed: { mobile: !opened },
        //     }}
        //     padding="md"
        // >
        //     <AppShell.Header>
        //         <AdminNavbar />
        //     </AppShell.Header>
        //     <AppShell.Navbar p="md">
        //         <Sidebar />
        //     </AppShell.Navbar>
        //     <AppShell.Main>{children}</AppShell.Main>
        // </AppShell>
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 100,
                breakpoint: "sm",
                collapsed: { mobile: !mobileOpened, desktop: !desktopOpened }
            }}
            padding="md"
        >
            <AppShell.Header>
                <Group px={"md"} >
                    <AdminNavbar />
                    <Burger
                    zIndex={100}
                        opened={mobileOpened}
                        onClick={toggleMobile}
                        hiddenFrom="sm"
                        size="sm"
                    />
                    <Burger
                    zIndex={100}
                        opened={desktopOpened}
                        onClick={toggleDesktop}
                        visibleFrom="sm"
                        size="sm"
                    />

                </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
                <Sidebar />
            </AppShell.Navbar>
            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    );
}

export default Layout