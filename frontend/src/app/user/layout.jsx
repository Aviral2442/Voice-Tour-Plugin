'use client';
import React from 'react';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import UserNavbar from './UserNavbar';
import NavbarMinimal from './NavbarMinimal';

const Layout = ({ children }) => {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: { base: 60, md: 70, lg: 80 } }}
            navbar={{
                width: { base: 80, md: 80, lg: 80 },
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
           
        >
            <AppShell.Header>
                <UserNavbar />
            </AppShell.Header>
            <AppShell.Navbar>
                <NavbarMinimal />
            </AppShell.Navbar>
            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    );
}

export default Layout