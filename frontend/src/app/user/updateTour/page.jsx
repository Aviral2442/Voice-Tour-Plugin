'use client';
import { Button, Card, Container, Group, Radio, Stepper, TextInput, Textarea } from '@mantine/core';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast';
import classes from './updatetour.module.css';
import clsx from 'clsx';
import { Josefin_Sans, Jost } from 'next/font/google';
import { IconCaretLeft, IconCaretRight } from '@tabler/icons-react';
import { Form } from '@mantine/form';
import { Formik } from 'formik';

const font = Jost({ subsets: ['latin'], weight: ['100', '400'] });
const fonts = Josefin_Sans({ subsets: ['latin'], weight: ['400'] });

const page = () => {
    const { id } = useParams();
    const titleRef = useRef();
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [steps, setSteps] = useState([
        {
            selectorType: 'id',
            selectorValue: 'some-id',
            stepTitle: 'Step 1 Title',
            stepDescription: 'Step 1 Description'
        }
    ]);

    const [updateTour, setUpdateTour] = useState(null);
    const router = useRouter();

    const fetchTourData = async () => {
        const res = await fetch("http://localhost:5000/tour/getbyid/" + id);
        console.log(res.status);
        const data = await res.json();
        console.log(data);
        setUpdateTour(data);
    }

    useEffect(() => {
        fetchTourData();
    }, [])



    const addTour = async (steps) => {
        console.log(steps);

        const res = await fetch('http://localhost:5000/tour/update' + id, {
            method: 'PUT',
            body: JSON.stringify({
                steps: steps,
                title: titleRef.current.value,
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
                    // reset steps
                    setSteps([
                        {
                            selectorType: 'id',
                            selectorValue: 'some-id',
                            stepTitle: 'Step 1 Title',
                            stepDescription: 'Step 1 Description'
                        }
                    ]);

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
        <div>Tour</div>
    )
}

export default page