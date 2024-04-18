import React from 'react'
import { ThemeIcon, Text, Title, Container, SimpleGrid, rem, Group, Card } from '@mantine/core';
import classes from './voiceitWorks.module.css';

export const MOCKDATA = [
    {
      title: 'Activate the Voice Assistant',
      description:
        'Click the Activate Assistant button or use the voice command to start interacting with our intelligent assistant.This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit ' ,
    },
    {
      title: 'Privacy focused',
      description:
        'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
    },
    {
      title: 'No third parties',
      description:
        'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
    },
    {
     
      title: 'Secure by default',
      description:
        'Although it still can’t fly, its jumping power is outstanding, in Alola the mushrooms on Paras don’t grow up quite right',
    },
    {
      
      title: '24/7 Support',
      description:
        'Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tail',
    },
  ];
  
 
  export function Feature({  title, description }) {
    return (
      <div>
       
        <Text mt="sm" mb={7}>
          {title}
        </Text>
        <Text size="sm" c="dimmed" lh={1.6}>
          {description}
        </Text>
      </div>
    );
  }  

  export function VoiceitWorks() {
    const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

    return (
      <Container className={classes.wrapper} fluid p={30}>        
  
        <SimpleGrid
          mt={60}
          cols={{ base: 1, sm: 2, md: 3 }}
          spacing={{ base: 'xl', md: 50 }}
          verticalSpacing={{ base: 'xl', md: 50 }}
        >
            <Group>
                <Card size="lg" shadow="xs" padding="xl" radius="lg" bg={'red'}>
                    <Title order={1} className={classes.title}>
                    How It Works:
                    </Title>
                    
                </Card>
            </Group>
          {features}
        </SimpleGrid>
      </Container>
  )
}

export default VoiceitWorks