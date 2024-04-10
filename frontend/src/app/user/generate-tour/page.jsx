'use client';
import React, { useEffect, useState } from 'react'
import { Button, Card, Checkbox, Flex, Group, Input, Radio, Select, TextInput, Textarea, Title } from '@mantine/core';
import { Stepper } from '@mantine/core';
import classes from './generateTour.module.css';
import { IconCircleCheck, IconUserCheck } from '@tabler/icons-react';

const GenerateTour = () => {

  const [webpageList, setWebpageList] = useState([]);

  const fetchWebpagesData = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/webpage/getall`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setWebpageList(data);
      })
      .catch(err => {
        console.log(err);
      })

  }

  useEffect(() => {
    fetchWebpagesData();
  }, [])

  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <div>

      {/* <Select
        label="Your favorite library"
        placeholder="Pick value"
        data={webpageList.map((webpage) => {
          return { value: webpage._id, label: webpage.name }
        })}
      /> */}

      <Card withBorder radius="md" p="md" className={classes.card} ta='center'>
        <Stepper active={active} onStepClick={setActive} orientation="vertical" >
          <Flex
            mih={50}
            bg="rgba(0, 0, 0, .3)"
            gap="xl"
            justify="flex-start"
            align="flex-start"
            direction="row"
            > 
            <Stepper.Step label="First step" description="type of Selector" />
              <Radio.Group >
                <Group mt="xs">
                  <Radio value="ID" label="ID" />
                  <Radio value="sName" label="Name" />
                  <Radio value="ng" label="Angular" />
                </Group>
              </Radio.Group>
            
          </Flex>

          <Flex
            mih={50}
            bg="rgba(0, 0, 0, .3)"
            gap="xl"
            justify="flex-start"
            align="flex-start"
            direction="row"
            
          >
            <Stepper.Step label="Second step" description="Selector Value"/>
              <TextInput
                placeholder="Enter selector value"
              />

            
          </Flex>

          <Flex
            mih={50}
            bg="rgba(0, 0, 0, .3)"
            gap="xl"
            justify="flex-start"
            align="flex-start"
            direction="row"
            
          >
            <Stepper.Step label="Final step" description="Description"/>
              <Textarea placeholder="Enter Description" />
           
          </Flex>
          <Stepper.Completed>
            Completed
          </Stepper.Completed>
        </Stepper>

        <Group mt="xl">
          
          <Button variant="default" onClick={prevStep}>Back</Button>
          <Button onClick={nextStep}>Next step</Button>
        </Group>
      </Card>

    </div>
  )
}

export default GenerateTour;