'use client'
import React from 'react'
import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Sidebar from './sidebar';
import Navbar from './navbar';

const Layout = ({children}) => {
    const [opened, { toggle }] = useDisclosure();
    return (
        <AppShell
            header={{ height: 70 }}
            navbar={{
                width: 250,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
        >
            <AppShell.Header>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                    withBorder={false} 
                />
                <Navbar />
            </AppShell.Header>

            <AppShell.Navbar  withBorder={false}>
                <Sidebar />
            </AppShell.Navbar>

            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    )
}

export default Layout