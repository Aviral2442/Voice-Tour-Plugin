'use client'
import React from 'react'
import { useState } from "react"
import { Group, Code, Title } from "@mantine/core"
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout
} from "@tabler/icons-react"
import { MantineLogo } from "@mantinex/mantine-logo"
import classes from "./sidebar.module.css"

const data = [
  { link: "/voiceDOCs", label: "Introduction", icon: IconBellRinging },
  { link: "", label: "What is the Voice Assistant ?", icon: IconReceipt2 },
  { link: "", label: "Features", icon: IconFingerprint },
  { link: "", label: "Installation", icon: IconKey },
  { link: "", label: "How It Works", icon: IconDatabaseImport },
  { link: "", label: "Setting Up Voice Commands", icon: Icon2fa },
  { link: "", label: "Integration Guides", icon: IconSettings },
  { link: "", label: "FAQs", icon: IconSettings },
  { link: "", label: "Troubleshooting", icon: IconSettings },
  { link: "", label: "Community and Support", icon: IconSettings },
  { link: "", label: "User Feedback", icon: IconSettings }
]

const Sidebar = () => {

  const [active, setActive] = useState("Billing")

  const links = data.map(item => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={event => {
        event.preventDefault()
        setActive(item.label)
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ))

  return (
    <div>
      <nav className={classes.navbar}>
        <div className={classes.navbarMain}>
          <Group className={classes.header} mt={7} justify="space-between">
            <Title order={3} >Voice Assistant Docs</Title>
            <Code fw={600}>v1.1.1</Code>
          </Group>
          {links}
        </div>

        {/* <div className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={event => event.preventDefault()}
        >
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a
          href="#"
          className={classes.link}
          onClick={event => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div> */}
      </nav>
    </div>
  )
}

export default Sidebar