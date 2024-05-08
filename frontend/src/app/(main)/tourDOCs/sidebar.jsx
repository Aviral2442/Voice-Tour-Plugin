'use client'
import React from 'react'
import { Group, Code, ScrollArea, rem } from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from '@tabler/icons-react';
import classes from './sidebar.module.css';
import NavbarLinksGroup from './NavbarLinksGroup/NavbarLinksGroup';

const mockdata = [
  {
    label: 'Get Started',
    icon: IconGauge,
    links: [
      { label: 'Introduction', link: '/' },
      { label: 'Platform Support', link: '/' },
      { label: 'Support', link: '/' },
      { label: 'FAQ & Troubleshooting', link: '/faq' },
    ],
  },
  { label: 'Community', icon: IconPresentationAnalytics },
  {
    label: 'Community & Support',
    link: 'tourDOCs/community',
    icon: IconNotes,
    // initiallyOpened: true,
    // links: [
    //   { label: 'Overview', link: '/' },
    //   { label: 'Forecasts', link: '/' },
    //   { label: 'Outlook', link: '/' },
    //   { label: 'Real time', link: '/' },
    // ],
  },
  {
    label: 'Setup',
    icon: IconCalendarStats,
    links: [
      { label: 'Key Features', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  { label: 'Analytics', icon: IconPresentationAnalytics },
  { label: 'Feedback', icon: IconFileAnalytics },
  // { label: 'Settings', icon: IconAdjustments },
  // {
  //   label: 'Security',
  //   icon: IconLock,
  //   links: [
  //     { label: 'Enable 2FA', link: '/' },
  //     { label: 'Change password', link: '/' },
  //     { label: 'Recovery codes', link: '/' },
  //   ],
  // },
];

const Sidebar = () => {
  const links = mockdata.map((item) => <NavbarLinksGroup {...item} key={item.label} />);
  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <Group justify="space-between">
          
          <Code fw={700}>v3.1.2</Code>
        </Group>
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>


    </nav>)
}

export default Sidebar