'use client';
import React, { useEffect, useState } from 'react'
import { Button, Card, Checkbox, Container, Flex, Group, Input, Radio, Select, TextInput, Textarea, Title } from '@mantine/core';
import { Stepper } from '@mantine/core';
import classes from './generateTour.module.css';
import { IconCircleCheck, IconUserCheck } from '@tabler/icons-react';

const GenerateTour = () => {

  const [webpageList, setWebpageList] = useState([]);

  const [steps, setSteps] = useState([
    {
      selectorType: 'id',
      selectorValue: 'some-id',
      stepTitle: 'Step 1 Title',
      stepDescription: 'Step 1 Description'
    }
  ]);

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

  const addNewStep = () => {
    setSteps([...steps, {
      selectorType: 'id',
      selectorValue: 'some-id',
      stepTitle: 'Step Title',
      stepDescription: 'Step Description'
    }]);
  }

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

      <Stepper active={active} onStepClick={setActive} orientation="horizontal">
        {
          steps.map((step, index) => {
            return (
              <Stepper.Step label={step.stepTitle} description={step.stepDescription}>
                <Container>
                  <Card withBorder radius="md" p="md" ta='center'>
                    <Flex>
                      <Radio.Group >
                        <Group mt="xs">
                          <Radio value="id" label="id" />
                          <Radio value="class" label="class" />
                        </Group>
                      </Radio.Group>


                      <TextInput
                        label="Selector Value"
                        placeholder="Enter selector value"
                      />

                      <Textarea
                        label="Description"
                        placeholder="Enter Description"
                      />

                    </Flex>
                  </Card>
                </Container>

              </Stepper.Step>
            )
          })
        }
      </Stepper>

      <Button mt={30} onClick={addNewStep}>Add New Step</Button>

      {/* <Card withBorder radius="md" p="md" className={classes.card} ta='center'>
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
            <Stepper.Step label="Second step" description="Selector Value" />
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
            <Stepper.Step label="Final step" description="Description" />
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
      </Card> */}

    </div>
  )
}

export default GenerateTour;