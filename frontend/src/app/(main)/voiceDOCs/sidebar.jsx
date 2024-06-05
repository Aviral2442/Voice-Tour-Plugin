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
    { link: "/voiceDOCs", label: "Introduction", icon: IconBellRinging },
    { link: "/voiceDOCs/features", label: "Features", icon: IconKey },
    { link: "/voiceDOCs/setup", label: "Setup", icon: IconFingerprint },
    { link: "/voiceDOCs/faqs", label: "FAQs", icon: IconSettings },
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
                {links}
            </div>
        </nav>
    )
}

export default Sidebar