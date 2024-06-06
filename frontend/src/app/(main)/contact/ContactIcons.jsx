import { Text, Box, Stack, rem } from '@mantine/core';
import { IconPhone, IconMapPin, IconAt } from '@tabler/icons-react';
import classes from './ContactIcons.module.css';
import { Josefin_Sans } from 'next/font/google';
import clsx from 'clsx';

const font = Josefin_Sans({ subsets: ['latin'], weight: ['100', '400'] });


function ContactIcon({ icon: Icon, title, description, ...others }) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24),color:'black' }} />
      </Box>

      <div>
        <Text size="md" className={clsx(classes.title,font.className)}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  { title: 'Email', description: 'voicetourps@gmail.com', icon: IconAt },
  { title: 'Phone', description: '9260973330', icon: IconPhone },
  { title: 'Address', description: 'Lucknow', icon: IconMapPin },
];

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack>{items}</Stack>;
}