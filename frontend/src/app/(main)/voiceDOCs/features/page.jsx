'use client'
import React from 'react'
import { Text, Title } from '@mantine/core'
import { IconCornerDownRightDouble } from '@tabler/icons-react'
import classes from './features.module.css'

const Features = () => {
    return (
        <div className={classes.mainContainer} >

            <Title pt={'20'} order={1} c="#ffffff">Feature's </Title>

            <Text className={classes.para} mt={15} >Welcome to the Voice Assistant Features page. Our Voice Assistant plugin offers a suite of
                powerful tools designed to make website navigation and interaction seamless and intuitive. Explore the features that set our
                Voice Assistant apart and learn how it can enhance your website.</Text>
            <br />

            <Title order={3} className={classes.title} mt={8}> <IconCornerDownRightDouble /> Hands-Free Navigation</Title>
            <Text className={classes.para} ml={32}  >Users can effortlessly navigate your website using simple voice commands. Our advanced
                voice recognition technology accurately understands and processes natural language inputs, allowing users to move between
                pages, access content, and interact with elements without lifting a finger.</Text>

            <Title order={3} className={classes.title} mt={10}> <IconCornerDownRightDouble /> Natural Language Processing</Title>
            <Text className={classes.para} ml={32}  >Our Voice Assistant is equipped with sophisticated natural language processing
                capabilities. It understands and interprets natural language inputs, providing accurate responses and actions based on user
                commands, making interactions smooth and intuitive.</Text>

            <Title order={3} className={classes.title} mt={10}> <IconCornerDownRightDouble /> Enable Plugins with Shortcuts</Title>
            <Text className={classes.para} ml={32}  >Activate the Voice Assistant instantly with convenient keyboard shortcuts. Use Ctrl
                + Space to open the voice assistant and Ctrl + K to launch the advanced search box. These shortcuts streamline the user
                experience, making it easier to interact with your site.</Text>

            <Title order={3} className={classes.title} mt={10}> <IconCornerDownRightDouble /> Webpage Management Panel</Title>
            <Text className={classes.para} ml={32}  >Manage your Voice Assistant settings through a user-friendly webpage management panel.
                Customize voice commands, set preferences, and optimize the user experience directly from the panel, giving you full control
                over how the assistant operates on your site.</Text>

            <Title order={3} className={classes.title} mt={10}> <IconCornerDownRightDouble /> Advanced Search Box</Title>
            <Text className={classes.para} ml={32}  >Improve your site's search functionality with our advanced voice-enabled search box.
                Users can perform searches using voice commands, making it faster and more convenient to find the information they need.</Text>

            <Title order={3} className={classes.title} mt={10}> <IconCornerDownRightDouble /> Customizable Commands</Title>
            <Text className={classes.para} ml={32}  >Configure the Voice Assistant to suit your website's specific needs. Customize
                commands and responses to provide a personalized experience that resonates with your audience, enhancing overall satisfaction
                and engagement.</Text>

            <Title order={3} className={classes.title} mt={10}> <IconCornerDownRightDouble /> Seamless Integration</Title>
            <Text className={classes.para} ml={32}  >Our Voice Assistant is designed for easy integration with various platforms and
                content management systems (CMS). Follow straightforward installation steps to add the voice assistant to your website,
                ensuring a hassle-free setup process.</Text>

            <Title order={3} className={classes.title} mt={10}> <IconCornerDownRightDouble /> Personalized User Experience</Title>
            <Text className={classes.para} ml={32}  >Tailor the Voice Assistant to meet the specific needs of your users. Customize
                commands and responses to provide a personalized experience that resonates with your audience, improving overall satisfaction
                and engagement.</Text>

            <Title order={3} className={classes.title} mt={10}> <IconCornerDownRightDouble /> Accessibility Enhancement</Title>
            <Text className={classes.para} ml={32}  >Our Voice Assistant plugin is built with security in mind. We use advanced encryption
                and secure protocols to ensure that all voice interactions are safe and protected, giving you and your users peace of mind.</Text>

            <Title order={3} className={classes.title} mt={10}> <IconCornerDownRightDouble /> Robust Security</Title>
            <Text className={classes.para} ml={32}  >Improve your site's search functionality with our advanced voice-enabled search box.
                Users can perform searches using voice commands, making it faster and more convenient to find the information they need.</Text>

            <Title order={3} className={classes.title} mt={10}> <IconCornerDownRightDouble /> Continuous Updates and Support</Title>
            <Text className={classes.para} ml={32}  >Stay ahead with regular updates and dedicated support. We continuously improve our
                Voice Assistant plugin, adding new features and enhancements based on user feedback and technological advancements. Our support
                team is always ready to assist you with any questions or issues.</Text>

        </div>
    )
}

export default Features