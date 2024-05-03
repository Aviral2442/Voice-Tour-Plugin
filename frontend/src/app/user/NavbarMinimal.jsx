import React from 'react'
import { useState } from "react"
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
    IconSwitchHorizontal,
    IconSettingsCog,
    IconSmartHome,
    IconSettings2,
    IconUserCircle
} from "@tabler/icons-react"
import { MantineLogo } from "@mantinex/mantine-logo"
import classes from "./NavbarMinimal.module.css"
import Link from 'next/link'

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
    { icon: IconSmartHome, label: "Home" },
    { icon: IconGauge, label: "Dashboard" },
    { icon: IconDeviceDesktopAnalytics, label: "Generate Tour" },
    { icon: IconSettings2, label: "Manage Webpage" },
    { icon: IconUserCircle, label: "Account" },
    // { icon: IconFingerprint, label: "Security" },
    { icon: IconSettings, label: "Settings" }
]

export function NavbarMinimal() {
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

export default NavbarMinimal