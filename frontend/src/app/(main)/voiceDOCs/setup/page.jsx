'use client'
import React from 'react'
import { Anchor, Image, Text, Title } from '@mantine/core'
import classes from './setup.module.css'
import { IconCornerDownRightDouble } from '@tabler/icons-react'

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
            <Text className={classes.para} ml={10}  >Go to the &quot;<Anchor href="/user/manage-webpage" underline="hover">Create Web Pages</Anchor>&quot;  section to start the submission process for your web pages.</Text>

            {/* <Image src="webpage.jpeg" /> */}

            <Title order={3} className={classes.title} mt={8} ml={9}> <span className={classes.steps} >Step 3:</span> Click on Submit Web Pages</Title>
            <Text className={classes.para} ml={10}  >Click the &quot;Submit Web Pages&quot; button to access the submission form.</Text>

            <Title order={3} className={classes.title} mt={10}> <IconCornerDownRightDouble /> Advanced Search Box</Title>
            <Text className={classes.para} ml={32}  >Improve your site&apos;s search functionality with our advanced voice-enabled search box.
                Users can perform searches using voice commands, making it faster and more convenient to find the information they need.</Text>

            <Title order={3} className={classes.title} mt={10}> <IconCornerDownRightDouble /> Customizable Commands</Title>
            <Text className={classes.para} ml={32}  >Configure the Voice Assistant to suit your website&apos;s specific needs. Customize
                commands and responses to provide a personalized experience that resonates with your audience, enhancing overall satisfaction
                and engagement.</Text>

            <Title order={3} className={classes.title} mt={8} ml={9}> <span className={classes.steps} >Step 5:</span> Repeat for Additional Pages</Title>
            <Text className={classes.para} ml={10}  >Repeat the above steps to submit any additional web pages you have.            </Text>

            <Title order={3} className={classes.title} mt={10}> <IconCornerDownRightDouble /> Personalized User Experience</Title>
            <Text className={classes.para} ml={32}  >Tailor the Voice Assistant to meet the specific needs of your users. Customize
                commands and responses to provide a personalized experience that resonates with your audience, improving overall satisfaction
                and engagement.</Text>

            <Title order={3} className={classes.title} mt={10}> <IconCornerDownRightDouble /> Accessibility Enhancement</Title>
            <Text className={classes.para} ml={32}  >Our Voice Assistant plugin is built with security in mind. We use advanced encryption
                and secure protocols to ensure that all voice interactions are safe and protected, giving you and your users peace of mind.</Text>

            <Title order={3} className={classes.title} mt={10}> <IconCornerDownRightDouble /> Robust Security</Title>
            <Text className={classes.para} ml={32}  >Improve your site&apos;s search functionality with our advanced voice-enabled search box.
                Users can perform searches using voice commands, making it faster and more convenient to find the information they need.</Text>

            <Title order={3} className={classes.title} mt={10}> <IconCornerDownRightDouble /> Continuous Updates and Support</Title>
            <Text className={classes.para} ml={32}  >Stay ahead with regular updates and dedicated support. We continuously improve our
                Voice Assistant plugin, adding new features and enhancements based on user feedback and technological advancements. Our support
                team is always ready to assist you with any questions or issues.</Text>

        </div>
    )
}

export default Setup
