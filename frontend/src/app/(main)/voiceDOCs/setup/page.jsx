'use client'
import React from 'react'
import { Anchor, Image, Text, Title } from '@mantine/core'
import classes from './setup.module.css'

const Setup = () => {
    return (
        <div className={classes.mainContainer} >

            <Title pt={'20'} order={2} c="#ffffff">
                To Submit Your Web Page, Follow These Steps Carefully: </Title>

            <Text className={classes.para} mt={15} >Submitting your web pages is a straightforward process designed to
                ensure that all necessary information is accurately captured. By following the detailed steps outlined below,
                you can efficiently add your web pages to our system. This guide will help you navigate each step of the
                submission process, from logging in to viewing your results. Whether you are submitting one page or multiple
                pages, these instructions will ensure a smooth and successful submission experience.</Text>
            <br />

            <Title order={3} className={classes.title} mt={8} ml={9}> <span className={classes.steps} >Step 1:</span> Log In to Our Site</Title>
            <Text className={classes.para} ml={10}  >Ensure that you are logged into your account on our website. If you
                do not have an account, please <Anchor href="/signup" underline="hover"> register </Anchor> to create one.</Text>

            <Title order={3} className={classes.title} mt={8} ml={9}> <span className={classes.steps} >Step 2:</span> Navigate to Create Web Pages</Title>
            <Text className={classes.para} ml={10}  >Go to the "<Anchor href="/user/manage-webpage" underline="hover">Create Web Pages</Anchor>"  section to start the submission process for your web pages.</Text>

            {/* <Image src="webpage.jpeg" /> */}

            <Title order={3} className={classes.title} mt={8} ml={9}> <span className={classes.steps} >Step 3:</span> Click on Submit Web Pages</Title>
            <Text className={classes.para} ml={10}  >Click the "Submit Web Pages" button to access the submission form.</Text>

            <Title order={3} className={classes.title} mt={8} ml={9}> <span className={classes.steps} >Step 4:</span> Fill in the Required Fields</Title>
            <Text className={classes.para} ml={10}  >Complete all necessary fields in the submission form:</Text>

            <Title order={4} mt={8} ml={90}> <span className={classes.subSteps} >Web Page Name:</span> <span className={classes.subPara} ml={10}  >Enter a name for your web page.</span></Title>
            <Title order={4} mt={0} ml={90}> <span className={classes.subSteps} >Address of the Page: </span> <span className={classes.subPara} ml={10}  >Provide the URL of your web page.</span></Title>
            <Title order={4} mt={0} ml={90}> <span className={classes.subSteps} >Page Description:</span> <span className={classes.subPara} ml={10}  >Write a brief description of the web page.</span></Title>
            <Text mt={8} ml={9}> <span className={classes.para} ml={10}  >Once all fields are completed, click on the "Submit Web Pages" button to submit your web page.</span></Text>

            <Title order={3} className={classes.title} mt={8} ml={9}> <span className={classes.steps} >Step 5:</span> Repeat for Additional Pages</Title>
            <Text className={classes.para} ml={10}  >Repeat the above steps to submit any additional web pages you have.            </Text>

            <Title order={3} className={classes.title} mt={8} ml={9}> <span className={classes.steps} >Step 6:</span> Refresh to View Results</Title>
            <Text className={classes.para} ml={10}  >Refresh the page to see a list of your submitted web pages.</Text>

        </div>
    )
}

export default Setup