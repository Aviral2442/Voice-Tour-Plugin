import React from 'react'
import { useState } from 'react';
import { Center, Tooltip, UnstyledButton, Stack, rem } from "@mantine/core"
import {
    IconHome2,
    IconGauge,
    IconDeviceDesktopAnalytics,
    IconFingerprint,
    IconCalendarStats,
    IconUser,
    IconSettings,
    IconLogout,
    IconSwitchHorizontal
} from "@tabler/icons-react"
import { MantineLogo } from "@mantinex/mantine-logo"
import classes from "./sidebar.module.css"

function NavbarLink({ icon: Icon, label, active, onClick }) {
    return (
        <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
            <UnstyledButton
                onClick={onClick}
                className={classes.link}
                data-active={active || undefined}
            >
                <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
            </UnstyledButton>
        </Tooltip>
    )
}

const mockdata = [
    { icon: IconHome2, label: "Home" },
    { icon: IconGauge, label: "Dashboard" },
    { icon: IconDeviceDesktopAnalytics, label: "Analytics" },
    { icon: IconCalendarStats, label: "Releases" },
    { icon: IconUser, label: "Account" },
    { icon: IconFingerprint, label: "Security" },
    { icon: IconSettings, label: "Settings" }
]

const Sidebar = () => {
    const [active, setActive] = useState(2)

    const links = mockdata.map((link, index) => (
        <NavbarLink
            {...link}
            key={link.label}
            active={index === active}
            onClick={() => setActive(index)}
        />
    ))

    return (
        <nav className={classes.navbar}>
            <Center>
                <MantineLogo type="mark" inverted size={30} />
            </Center>

            <div className={classes.navbarMain}>
                <Stack justify="center" gap={0}>
                    {links}
                </Stack>
            </div>

            <Stack justify="center" gap={0}>
                <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
                <NavbarLink icon={IconLogout} label="Logout" />
            </Stack>
        </nav>
    )
}

export default Sidebar