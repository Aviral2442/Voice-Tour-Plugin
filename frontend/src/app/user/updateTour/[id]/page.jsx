'use client';
import { Button, Card, Container, Grid, Group, Radio, Stepper, TextInput, Textarea } from '@mantine/core';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast';
import clsx from 'clsx';
import classes from './updatetour.module.css'
import { Josefin_Sans, Jost } from 'next/font/google';
import { IconCaretLeft, IconCaretRight } from '@tabler/icons-react';
import { Form } from '@mantine/form';
import { Formik } from 'formik';

const font = Jost({ subsets: ['latin'], weight: ['100', '400'] });
const fonts = Josefin_Sans({ subsets: ['latin'], weight: ['400'] });

const page = () => {
  const { id } = useParams();
  const titleRef = useRef();
  const colorRef = useRef();
  const bgcolorRef = useRef();
  const textcolorRef = useRef();
  const arrowcolorRef = useRef();
  const overlaycolorRef = useRef();
  const widthRef = useRef();

  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [steps, setSteps] = useState([
    {
      selectorType: 'id',
      selectorValue: 'some-id',
      stepTitle: 'Step 1 Title',
      stepDescription: 'Step 1 Description'
    }
  ]);

  const [tourDetails, setTourDetails] = useState(null);
  const router = useRouter();

  const fetchTourData = async (values) => {
    console.log(values);
    const res = await fetch("http://localhost:5000/tour/getbyid/" + id);
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setTourDetails(data);
    setSteps(data.steps);
    titleRef.current.value = data.title;
    colorRef.current.value = data.color;
    bgcolorRef.current.value = data.bgcolor;
    textcolorRef.current.value = data.textcolor;
    arrowcolorRef.current.value = data.arrowcolor;
    overlaycolorRef.current.value = data.overlaycolor;
    widthRef.current.value = data.width;
  }

  useEffect(() => {
    fetchTourData();
  }, [])



  const addTour = () => {
    console.log(steps);

    fetch('http://localhost:5000/tour/update/' + id, {
      method: 'PUT',
      body: JSON.stringify({
        steps: steps,
        title: titleRef.current.value,
        color: colorRef.current.value,
        bgcolor: bgcolorRef.current.value,
        textcolor: textcolorRef.current.value,
        arrowcolor: arrowcolorRef.current.value,
        overlaycolor: overlaycolorRef.current.value,
        width: widthRef.current.value
      }),
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': currentUser.token
      }
    })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          toast.success('Tour successfully created !');
          router.push('/user/profile');

        } else {
          toast.error('Some Error Occured');
        }

      }).catch((err) => {
        console.log(err);
        toast.error('Some Error Occured');
      });
  }
  const addNewStep = () => {
    setSteps([...steps, {
      selectorType: 'id',
      selectorValue: 'Some-id',
      stepTitle: 'Step Title',
      stepDescription: 'Step Description'
    }]);
    setActive(steps.length);
  }

  const deleteStep = () => {
    let temp = steps;
    temp.splice(active, 1);
    setSteps([...temp]);
    if (active > steps.length - 1) {
      setActive(steps.length - 1);
    }
  }

  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < steps.length - 1 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const updateStep = (index, key, value) => {
    const newSteps = [...steps];
    newSteps[index][key] = value;
    setSteps(newSteps);
  }


  return (
    <Container fluid className={classes.Container}>


      <Button onClick={addTour} variant='white' color='black' mb={20} mt={20}
        className={clsx(classes.control1, font.className)}>
        Update Tour
      </Button>

      <Container fw={'bold'} fluid className={fonts.className}>
        <Grid grow>
          <Grid.Col span={6}> <TextInput ref={titleRef} label="Title" type='text' placeholder="Enter your Tour Name " mb={20} /></Grid.Col>
          <Grid.Col span={6}><TextInput ref={colorRef} label="Color" type='color' placeholder="Enter your Primary Color " mb={20} /> </Grid.Col>
          <Grid.Col span={6}><TextInput ref={bgcolorRef} label="Background Color" type='color' placeholder="Enter your Background Color " mb={20} /> </Grid.Col>
          <Grid.Col span={6}><TextInput ref={textcolorRef} label="Text Color" type='color' placeholder="Enter your Text Color " mb={20} /> </Grid.Col>
          <Grid.Col span={6}><TextInput ref={arrowcolorRef} label="Arrow Color" type='color' placeholder="Enter your Arrow Color " mb={20} /> </Grid.Col>
          <Grid.Col span={6}><TextInput ref={overlaycolorRef} label="Overlay Color" type='color' placeholder="Enter your Overlay Color " mb={20} /> </Grid.Col>
          <Grid.Col span={6}><TextInput ref={widthRef} label="Width" type='text' placeholder="Enter your Width  " mb={20} /> </Grid.Col>

        </Grid>

      </Container>
      <Card radius="md" p="md" className={classes.Card}>
        <Stepper active={active} onStepClick={setActive} orientation="vertical" color="black" radius="md" size="sm">
          {
            steps.map((step, index) => {
              return (
                <Stepper.Step label={step.stepTitle} description={step.stepDescription} key={index} pt={"20"}>
                  <Container size={'md'} className={clsx(classes.innerContainer, fonts.className)}>

                    <Radio.Group value={step.selectorType} onChange={v => updateStep(index, 'selectorType', v)} mb={20} >
                      <Group mt="xs" >
                        <Radio value="id" label="id" color="gray" />
                        <Radio value="class" label="class" color="green" />
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
            <Button mt={30} size='sm' onClick={prevStep} variant='white' color='black' className={clsx(classes.control, font.className)} ><IconCaretLeft />Prev</Button>
            <Button mt={30} size='sm' onClick={nextStep} variant='white' color='black' className={clsx(classes.control, font.className)}>Next<IconCaretRight /></Button>
          </Group>
          <Group >
            <Button mt={30} size='sm' onClick={deleteStep} variant='white' color='black'
              className={clsx(classes.control, font.className)}>
              Delete Step</Button>
          </Group>
        </Group>
      </Card>

    </Container>
  )
}

export default page