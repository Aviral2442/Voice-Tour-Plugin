import { Button, ButtonProps } from '@mantine/core';
import { IconBrandFacebook } from '@tabler/icons-react';

export function TwitterButton(props) {
  return (
    <Button
      leftSection={<IconBrandFacebook style={{ width: '1rem', height: '1rem' }} color="#00ACEE" />}
      variant="default"
      {...props}
    />
  );
}