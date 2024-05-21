'use client'
import React from 'react'
import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Navbar from '../navbar';
import Sidebar from './sidebar';

const Layout = () => {
    const [opened, { toggle }] = useDisclosure();
  return (
<AppShell
      header={{ height: 60 }}
      navbar={{
        // width: 300,
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
        <Navbar/>
      </AppShell.Header>

      <AppShell.Navbar >
        <Sidebar/>
      </AppShell.Navbar>

      <AppShell.Main>Main</AppShell.Main>
    </AppShell>  )
}

export default Layout