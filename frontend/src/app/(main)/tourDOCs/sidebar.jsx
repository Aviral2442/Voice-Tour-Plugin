'use client'
import React from 'react'
import classes from "./sidebar.module.css"
import { useState } from "react"
import {
    IconBellRinging,
    IconFingerprint,
    IconKey,
    IconSettings
} from "@tabler/icons-react"

const data = [
    { link: "/tourDOCs", label: "Introduction", icon: IconBellRinging },
    { link: "/tourDOCs/features", label: "Features", icon: IconKey },
    { link: "/tourDOCs/setup", label: "Setup", icon: IconFingerprint },
    { link: "/tourDOCs/faq", label: "FAQs", icon: IconSettings },
    { link: "/tourDOCs/helpCenter", label: "Help Center", icon: IconSettings },
    { link: "/tourDOCs/community", label: "Community", icon: IconSettings },
    { link: "/tourDOCs/feedback", label: "User Feedback & Suggestions", icon: IconSettings }
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
                {links}
            </div>
        </nav>
    )
}

export default Sidebar