'use client';
import React, { useEffect, useState } from 'react'
import {  Button, Card, Container, Group, Radio, TextInput, Textarea } from '@mantine/core';
import { Stepper } from '@mantine/core';
import classes from './generateTour.module.css';
import { IconCaretLeft, IconCaretRight,  } from '@tabler/icons-react';
import { Form, useForm } from '@mantine/form';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { Josefin_Sans, Jost } from 'next/font/google';
import clsx from 'clsx';

const font = Jost({ subsets: ['latin'], weight: ['100', '400'] });
const fonts = Josefin_Sans({ subsets: ['latin'], weight: ['400'] });


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
  const deleteStep = () => {
    setSteps([...steps.slice(0, steps.length - 1)],
      {
        selectorType: 'id',
        selectorValue: 'Some-id',
        stepTitle: 'Step Title',
        stepDescription: 'Step Description'
      });
  }

  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < steps.length-1 ? current + 1 : current));
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
        'x-auth-token': currentUser.token
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
    <div >

      {/* <Select
        label="Your favorite library"
        placeholder="Pick value"
        data={webpageList.map((webpage) => {
          return { value: webpage._id, label: webpage.name }
        })}
      /> */}
      <Container fluid className={classes.Container}   >
     
        <Button onClick={addTour} variant='white' color='black' mb={20} mt={20}
         className={clsx(classes.control, font.className)}>
          Create Tour</Button>
        <Card withBorder radius="md" p="md" className={classes.Card}>
          <Stepper active={active} onStepClick={setActive} orientation="vertical" color="black" radius="md" size="sm">
            {
              steps.map((step, index) => {
                return (
                  <Stepper.Step label={step.stepTitle} description={step.stepDescription} key={index} pt={"20"}>
                    <Container size={'md'}  className={clsx(classes.a, fonts.className)}>

                      {/* <form onSubmit={form.onSubmit(Tourgen)}> */}
                      <Radio.Group onChange={v => updateStep(index, 'selectorType', v)} mb={20} >
                        <Group mt="xs" >
                          <Radio value="id" label="id" color="gray"/>
                          <Radio value="class" label="class" color="gray"/>
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
          <Group justify="space-between" >
            <Group >
            <Button mt={30} size='sm' onClick={addNewStep} variant='white' color='black'
                className={clsx(classes.control, font.className)}>
                Add New Step</Button>
              
            </Group>
            <Group justify="space-between">
              <Button mt={30} size='sm' onClick={prevStep} variant='white' color='black' className={clsx(classes.control, font.className)} ><IconCaretLeft/>Prev</Button>
              <Button mt={30} size='sm' onClick={nextStep} variant='white' color='black' className={clsx(classes.control, font.className)}>Next<IconCaretRight/></Button>
            </Group>
            <Group >
            <Button mt={30} size='sm' onClick={deleteStep} variant='white' color='black'
                className={clsx(classes.control, font.className)}>
                Delete Step</Button>
            </Group>
          </Group>
        </Card>
       
      </Container>
    </div>
  )
}

export default GenerateTour;