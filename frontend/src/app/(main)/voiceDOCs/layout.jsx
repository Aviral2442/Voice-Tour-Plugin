'use client'
import React from 'react'
import { AppShell, Button } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import Navbar from './navbar'
import Sidebar from './sidebar'
import Toc from './toc'

const Layout = ({children}) => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure()
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true)
  return (
    <AppShell
      // padding="md"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened }
      }}
      aside={{ 
        width: 250, 
        breakpoint: "lg" 
      }}
    >
      <AppShell.Header><Navbar/></AppShell.Header>
      <AppShell.Navbar><Sidebar/></AppShell.Navbar>
      <AppShell.Aside  withBorder={false} ><Toc/></AppShell.Aside>
      <AppShell.Main>

          {children}
        <Button onClick={toggleDesktop} visibleFrom="sm">
          Toggle navbar
        </Button>
        <Button onClick={toggleMobile} hiddenFrom="sm">
          Toggle navbar
        </Button>
      </AppShell.Main>
    </AppShell>
  )
}

export default Layout