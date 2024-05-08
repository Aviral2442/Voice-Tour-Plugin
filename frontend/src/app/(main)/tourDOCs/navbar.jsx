'use client'
import React from 'react'
import { useState } from "react"
import { Container, Group, Burger, Image } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import classes from "./navbar.module.css"
import {IconBrandDiscordFilled, IconBrandGithubFilled } from '@tabler/icons-react';


const links = [
  { link: "/tourDOCs", label: "Home" },
  { link: "/tourGenerator", label: "Tour Generator" },
  { link: "/user/generate-tour", label: "Generate Tour" },
  { link: "/tourDOCs/helpCenter", label: "Help" }
]

const Navbar = () => {
  const [opened, { toggle }] = useDisclosure(false)
  const [active, setActive] = useState(links[0].link)

  const items = links.map(link => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={event => {
        event.preventDefault()
        setActive(link.link)
      }}
    >
      {link.label}
    </a>
  ))
  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner} fluid>
        <Image src="/logo2.png" alt="logo" mt={32} className={classes.logo} />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <span>
          <a href='https://discord.com/invite/P3RzcqAr'>
          <IconBrandDiscordFilled />
            </a>
            &nbsp;
          <a href='https://discord.com/invite/P3RzcqAr'>
          <IconBrandGithubFilled />
            </a>
        </span>


        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
      )
}

export default Navbar