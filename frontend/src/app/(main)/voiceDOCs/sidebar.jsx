'use client'
import React from 'react'
import classes from "./sidebar.module.css"
import { useState } from "react"
import { Group, Code } from "@mantine/core"
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

const data = [
    { link: "/voiceDOCs", label: "Introduction", icon: IconBellRinging },
    { link: "/voiceDOCs/features", label: "Features", icon: IconKey },
    { link: "/voiceDOCs/setup", label: "Setup", icon: IconFingerprint },
    // { link: "", label: "Customization", icon: Icon2fa },
    // { link: "", label: "Integration Guides", icon: IconSettings },
    { link: "/voiceDOCs/faqs", label: "FAQs", icon: IconSettings },
    // { link: "", label: "Troubleshooting", icon: IconSettings },
    // { link: "", label: "Community and Support", icon: IconSettings },
    { link: "/voiceDOCs/feedback", label: "User Feedback & Suggestions", icon: IconSettings }
]

const Sidebar = () => {
    const [active, setActive] = useState()

    const links = data.map(item => (
        <a
            className={classes.link}
            data-active={item.label === active || undefined}
            href={item.link}
            key={item.label}
            onClick={() => {
                setActive(item.label)
            }}
        >
            <item.icon className={classes.linkIcon} stroke={1.5} />
            <span>{item.label}</span>
        </a>
    ))
    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarMain}>
                {/* <Group className={classes.header} justify="space-between">
                    <MantineLogo size={28} />
                    <Code fw={700}>v3.1.2</Code>
                </Group> */}
                {links}
            </div>

            <div className={classes.footer}>
                <a
                    href="#"
                    className={classes.link}
                    // onClick={event => event.preventDefault()}
                >
                    <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
                    <span>Change account</span>
                </a>

                <a
                    href="#"
                    className={classes.link}
                    // onClick={event => event.preventDefault()}
                >
                    <IconLogout className={classes.linkIcon} stroke={1.5} />
                    <span>Logout</span>
                </a>
            </div>
        </nav>
    )
}

export default Sidebar