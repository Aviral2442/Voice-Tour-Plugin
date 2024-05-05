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
            aside={{
                width: 250,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                />
                <Navbar />
            </AppShell.Header>

            <AppShell.Navbar p="md">
                <Sidebar />
            </AppShell.Navbar>

            <AppShell.Aside  >Right side bar</AppShell.Aside>

            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    )
}

export default Layout