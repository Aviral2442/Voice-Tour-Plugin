'use client';
import React, { useEffect, useState } from 'react'
import { Button, Card, Checkbox, Container, Flex, Group, Input, Radio, Select, TextInput, Textarea, Title } from '@mantine/core';
import { Stepper } from '@mantine/core';
import classes from './generateTour.module.css';
import { IconCircleCheck, IconUserCheck } from '@tabler/icons-react';
import { Form, useForm } from '@mantine/form';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const GenerateTour = () => {

  const [webpageList, setWebpageList] = useState([]);

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

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
      selectorValue: 'Some-id',
      stepTitle: 'Step Title',
      stepDescription: 'Step Description'
    }]);

  }

  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const updateStep = (index, key, value) => {
    const newSteps = [...steps];
    newSteps[index][key] = value;
    setSteps(newSteps);
  }

  const addTour = () => {
    console.log(steps);

    fetch('http://localhost:5000/tour/add', {
      method: 'POST',
      body: JSON.stringify({
        steps: steps
      }),
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token' : currentUser.token
      }
    })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          toast.success('User Registered successfully');
          // webpageForm.resetForm();

        } else {
          toast.error('Some Error Occured');
        }

      }).catch((err) => {
        console.log(err);
        toast.error('Some Error Occured');
      });
  }

  const router = useRouter();

  const form = useForm({
    initialValues: {
      user: '',
      steps: ''
    },

    validate: {
      user: (value) => {
        if (!value) {
          return 'This field is required';
        }
      },
      steps: (value) => {
        if (!value) {
          return 'This field is required';
        }
      }
    }
  })

  return (
    <div>

      {/* <Select
        label="Your favorite library"
        placeholder="Pick value"
        data={webpageList.map((webpage) => {
          return { value: webpage._id, label: webpage.name }
        })}
      /> */}
      <Button onClick={addTour} variant='filled' mb={20}>Create Tour</Button>
      <Card withBorder radius="md" p="md" bg={'#000'} className={classes.Card}>
        <Stepper active={active} onStepClick={setActive} orientation="horizontal" color="#66ff00" radius="md" size="sm">
          {
            steps.map((step, index) => {
              return (
                <Stepper.Step label={step.stepTitle} description={step.stepDescription} key={index}>
                  <Container size={'md'}>

                    {/* <form onSubmit={form.onSubmit(Tourgen)}> */}
                    <Radio.Group onChange={v => updateStep(index, 'selectorType', v)} mb={20}>
                      <Group mt="xs" >
                        <Radio value="id" label="id" />
                        <Radio value="class" label="class" />
                      </Group>
                    </Radio.Group>


                    <TextInput mb={20}

                      onChange={e => updateStep(index, 'selectorValue', e.target.value)}
                      value={step.selectorValue}
                      label="Selector Value"
                      placeholder="Enter selector value"
                    />

                    <TextInput mb={20}
                      onChange={e => updateStep(index, 'stepTitle', e.target.value)}
                      value={step.stepTitle}
                      label="Selector Value"
                      placeholder="Enter selector value"
                    />

                    <Textarea
                      mb={20}
                      onChange={e => updateStep(index, 'stepDescription', e.target.value)}
                      value={step.stepDescription}
                      label="Description"
                      placeholder="Enter Description"
                    />

                    {/* </form> */}
                  </Container>

                </Stepper.Step>
              )
            })
          }
        </Stepper>
        <Group justify='center'>
          <Button mt={30} size='sm' variant='outline' color='#66ff00' >Back</Button>

          <Button mt={30} size='sm' onClick={addNewStep} variant='outline' color='#66ff00'>Add New Step</Button>
        </Group>
      </Card>


    </div>
  )
}

export default GenerateTour;