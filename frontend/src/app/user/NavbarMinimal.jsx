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
import { usePathname, useRouter } from 'next/navigation'
import useAppContext from '@/context/AppContext'

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
    { icon: IconSmartHome, label: "Home", link: "/" },
    { icon: IconGauge, label: "Dashboard", link: "/user/dashboard" },
    { icon: IconDeviceDesktopAnalytics, label: "Generate Tour", link: "/user/generate-tour" },
    { icon: IconSettings2, label: "Manage Webpage", link: "/user/manage-webpage" },
    { icon: IconUserCircle, label: "Account", link: "/user/profile" },
    // { icon: IconFingerprint, label: "Security" },
    { icon: IconSettings, label: "Settings", link: "/" }
]

export function NavbarMinimal() {
    const [active, setActive] = useState(2)

    const path = usePathname();
    const router = useRouter();

    const { logout } = useAppContext();

    const links = mockdata.map((link, index) => (
        <NavbarLink
            {...link}
            key={link.label}
            active={path === link.link}
            onClick={() => router.push(link.link)}
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
                {/* <NavbarLink icon={IconSwitchHorizontal} label="Change account" /> */}
                <NavbarLink icon={IconLogout} label="Logout" onClick={logout} />
            </Stack>
        </nav>
    )
}

export default NavbarMinimal