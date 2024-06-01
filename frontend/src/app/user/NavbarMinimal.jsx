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
import { Josefin_Sans } from 'next/font/google'

const font = Josefin_Sans({ subsets: ['latin'], weight: ['100', '400'] });


function NavbarLink({ icon: Icon, label, active, onClick }) {
    return (
        <Tooltip label={label} position="right" withArrow arrowSize={8}  bg="#66ff00" c="black" fz="h5" fw="bold" className={font.className} transitionProps={{ duration: 0 }}>
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
function NavbarLinks({ icon: Icon, label, active, onClick }) {
    return (
        <Tooltip label={label} arrowSize={8}  withArrow position="right" bg="#ff0000" c="white" fz="h5" fw="bold" className={font.className} transitionProps={{ duration: 0 }}>
            <UnstyledButton
                onClick={onClick}
                className={classes.linklogout}
                data-active={active || undefined}
            >
                <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
            </UnstyledButton>
        </Tooltip>
    )
}

const mockdata = [
    { icon: IconSmartHome, label: "Home", link: "/" },
    // { icon: IconGauge, label: "Dashboard", link: "/user/dashboard" },
    { icon: IconUserCircle, label: "Profile", link: "/user/profile" },
    { icon: IconDeviceDesktopAnalytics, label: "Generate Tour", link: "/user/generate-tour" },
    { icon: IconSettings2, label: "Create Webpage", link: "/user/manage-webpage" },
    // { icon: IconFingerprint, label: "Security" },
    // { icon: IconSettings, label: "Settings", link: "/" }
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
                <NavbarLinks icon={IconLogout} label="Logout" onClick={logout} />
            </Stack>
        </nav>
    )
}

export default NavbarMinimal