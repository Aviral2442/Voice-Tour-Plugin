import cx from 'clsx';
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
// import { GithubIcon } from '@mantinex/dev-icons';
import classes from './page.module.css';
import { Icon3dRotate } from '@tabler/icons-react';

export default function Home() {
  return (
    <div className={classes.wrapper}>
    <Overlay color="#000" opacity={0.65} zIndex={1} />

    <div className={classes.inner}>
      <Title className={classes.title}>
        Automated AI code reviews for{' '}
        <Text component="span" inherit className={classes.highlight}>
          any stack
        </Text>
      </Title>

      <Container size={640}>
        <Text size="lg" className={classes.description}>
          Connect with us to gorw more.
        </Text>
      </Container>

      <div className={classes.controls}>
        <Button className={classes.control} variant="white" size="lg">
          Get started
        </Button>
        <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
          Live demo
        </Button>
        <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
          Signup
        </Button>
      </div>
    </div>
  </div>
  );
}