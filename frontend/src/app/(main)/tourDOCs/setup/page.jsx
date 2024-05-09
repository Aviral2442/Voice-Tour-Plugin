'use client'
import { Container, Paper, Text, Title } from '@mantine/core'
import React from 'react'
import classes from './setup.module.css'

const Setup = () => {
    return (
        <Container fluid p={0} >
            <Paper className={classes.mainContainer}>
                <Title ta='center' pt={'20'} pb={'15'} order={1} c="#ffffff">Tour Generator Setup</Title>
                <Text className={classes.para} >Welcome to the Tour Generator Setup Page! This page serves as your comprehensive guide to configuring the Tour Generator feature on our website. Whether you're a first-time user or returning to set up a new tour, you'll find all the information you need right here to get started.</Text>
                <br />
                <Text className={classes.para} >Each step outlined on this page provides clear instructions and guidance on how to proceed with setting up your tour. From signing in to your account to defining tour steps and submitting your tour for processing, we've broken down the setup process into easy-to-follow steps to ensure a seamless experience.</Text>
                <br />
                <Text className={classes.para} >By following the instructions provided on this page, you'll be able to create captivating and interactive tours for your website visitors. These tours will not only enhance their browsing experience but also guide them through key sections of your website with precision and clarity.</Text>
                <br />
                <Text className={classes.para} >Should you encounter any difficulties or have questions along the way, our support team is here to assist you. Feel free to reach out at any time, and we'll be happy to provide guidance and assistance to ensure your tour setup process is smooth and successful.</Text>
                <br />

                <ul className={classes.list}>
                    <li><span>Step 1 </span><span style={{ color: '#4dabf7' }} >Sign In -</span> Log in to your account on our website to access the Tour Generator feature.</li><br />
                    <li><span>Step 2 </span><span style={{ color: '#4dabf7' }} >Visit Tour Generator Page -</span> Navigate to the Tour Generator page where you can create and manage your tours. Take your time to explore the details and features available.</li><br />
                    <li><span>Step 3 </span><span style={{ color: '#4dabf7' }} >Generate Tour -</span> Click on the "Generate Tour" button to start creating your tour. This will open up the tour creation interface where you can define the tour steps.</li><br />
                    <li><span>Step 4 </span><span style={{ color: '#4dabf7' }} >Select Tag Selector -</span> Choose the appropriate selector type (ID-selector or class-selector) to identify the elements on your website that you want to include in the tour.</li><br />
                    <li><span>Step 5 </span><span style={{ color: '#4dabf7' }} >Define Tour Steps -</span> Create tour steps by providing the following details for each step:<br />
                        <ul>
                        <li><span style={{ color: '#4dabf7' }} >Element ID or Class -</span> Identify the specific element on your website.</li>
                        <li><span style={{ color: '#4dabf7' }} >Step Title -</span> Give a descriptive title to the step.</li>
                        <li><span style={{ color: '#4dabf7' }} >Step Description -</span> Provide instructions or information relevant to the step.</li><br />
                        </ul>
                    </li>
                    <li><span>Step 6 </span><span style={{ color: '#4dabf7' }} >Manage Tour Steps -</span> Utilize the options available to manage your tour steps:<br />
                    <ul>
                        <li><span style={{ color: '#4dabf7' }} >Add New Step -</span> Use the "Add Step" button to include additional steps to your tour.</li>
                        <li><span style={{ color: '#4dabf7' }} >Delete Steps -</span> Remove any unwanted steps by selecting the delete option.
</li>
                        <li><span style={{ color: '#4dabf7' }} >Preview and Navigate -</span> Use the preview and navigation buttons to review and navigate through your tour steps seamlessly.</li>
                        </ul>
                    </li><br />
                    <li id='submit' ><span>Step 7 </span><span style={{ color: '#4dabf7' }} >Submit Tour -</span> Once you are satisfied with your tour, click on the "Create Tour" button to submit your tour for processing. Your tour will then be available for use on your website.</li>
                    {/* <li><span style={{ color: '#4dabf7' }} >Seamless Integration -</span> Effortlessly integrate the Tour Generator into your website for a personalized
                        browsing experience.</li>
                    <li><span style={{ color: '#4dabf7' }} >Responsive Design -</span> Tours are optimized for various devices and screen sizes, ensuring a seamless experience across desktops, tablets, and mobile devices.</li>
                    <li><span style={{ color: '#4dabf7' }} >Embeddable Shortcodes -</span> Easily embed tours into any page or post on your website using generated shortcodes, allowing for seamless integration with existing content.</li> */}
                </ul>

            </Paper>
        </Container>
    )
}

export default Setup