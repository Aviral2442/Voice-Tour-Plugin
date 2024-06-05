'use client'
import React from 'react'
import { Autocomplete, Group, Burger, rem, Title } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconSearch } from "@tabler/icons-react"
import classes from "./navbar.module.css"
import Link from 'next/link'

const links = [
    { link: "/", label: "Home" },
    { link: "/voiceAssistant", label: "Voice Navigator" },
    { link: "/voiceDOCs/setup", label: "Setup" },
    { link: "/user/profile", label: "Profile" },
    { link: "/contact", label: "Contact" }
  ]

const Navbar = () => {
    const [opened, { toggle }] = useDisclosure(false)

    const items = links.map(link => (
      <Link
        key={link.label}
        href={link.link}
        className={classes.link}
      >
        {link.label}
      </Link>
    ));
  return (
    <header className={classes.header} >
    <div className={classes.inner} >
      <Group>
        <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        <Title order={3} >Voice & Tour Navigator</Title>
      </Group>

      <Group>
        <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
          {items}
        </Group>
        <Autocomplete
          className={classes.search}
          placeholder="Search"
          leftSection={
            <IconSearch
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          }
          data={[
            "React",
            "Angular",
            "Vue",
            "Next.js",
            "Riot.js",
            "Svelte",
            "Blitz.js"
          ]}
          visibleFrom="xs"
        />
      </Group>
    </div>
  </header>
  )
}

export default Navbar