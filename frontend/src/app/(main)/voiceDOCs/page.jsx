'use client'
import React from 'react'
import classes from './voicedocs.module.css'
import { Flex, Group, Text, Title } from '@mantine/core'
import { IconCornerDownRightDouble } from '@tabler/icons-react'

const VoiceDocs = () => {
    return (
        <div>
            <div className={classes.mainContainer} >
                {/* <Title order={1} c="#ffffff" >Getting started</Title> */}

                <Title pt={'20'} order={1} c="#ffffff">Voice Navigation Documentation </Title>

                <Title order={1} className={classes.title} mt={10}>Introduction</Title>
                <Text className={classes.para} >Welcome to the Voice Assistant Plugin Documentation. Our state-of-the-art voice assistant
                    technology revolutionizes website navigation by enabling users to interact with your website using natural language
                    commands. With seamless integration and intuitive functionalities, our voice assistant plugin offers an effortless
                    browsing experience for users of all levels of technical proficiency. This comprehensive guide is designed to walk you
                    through the process of integrating, configuring, and optimizing the voice assistant plugin for your website, ensuring
                    that you can harness its full potential to enhance user engagement and accessibility.</Text>
                <br />

                <Title order={1} c="#ffffff">About the Plugin</Title>
                <Text className={classes.para} mt={12}>Introducing our Voice Navigation Plugin: revolutionizing website interaction with
                    unparalleled ease and efficiency. Here&apos;s a detailed overview of its features :-</Text>

                <Title order={3} className={classes.title} mt={10}> <IconCornerDownRightDouble /> Effortless Navigation</Title>
                <Text className={classes.para} ml={32}  >Say goodbye to cumbersome mouse clicks and tedious keyboard strokes. With our Voice
                    Assistant Plugin, users can effortlessly navigate your website using natural language commands. From browsing pages to
                    accessing specific content, our intuitive voice interface streamlines the entire navigation process.</Text>

                <Title order={3} className={classes.title} mt={10}> <IconCornerDownRightDouble /> Plugin Integration with Shortcuts</Title>
                <Text className={classes.para} ml={32}  >Take control of your browsing experience with our seamless plugin integration. By simply
                    pressing Ctrl + Space, users can instantly activate the Voice Assistant, enabling hands-free navigation and interaction.
                    Additionally, the Ctrl + K shortcut opens a search box, providing quick access to relevant content with minimal effort.</Text>

                <Title order={3} className={classes.title} mt={10}> <IconCornerDownRightDouble /> Webpage Management Panel for Users</Title>
                <Text className={classes.para} ml={32}  >Empower your users with a comprehensive webpage management panel. With our plugin, users
                    can easily manage their browsing experience, from organizing bookmarks to customizing preferences. This intuitive panel
                    puts control in the hands of the user, enhancing their overall satisfaction and engagement.</Text>

                <Title order={3} className={classes.title} mt={10}> <IconCornerDownRightDouble /> Advanced Search Box
                </Title>
                <Text className={classes.para} ml={32}  >Experience the power of advanced search capabilities with our Voice Assistant Plugin. Our
                    intelligent search box utilizes cutting-edge algorithms to deliver accurate and relevant search results, ensuring users
                    find exactly what they&apos;re looking for with ease.</Text>

                <Title order={3} className={classes.title} mt={10}> <IconCornerDownRightDouble /> Simple Setup/Installation</Title>
                <Text className={classes.para} ml={32}  >Gone are the days of complex setup processes and lengthy installations. Our Voice Assistant
                    Plugin offers a simple and straightforward setup procedure, allowing you to get up and running in minutes. With clear
                    instructions and minimal configuration requirements, you can start enjoying the benefits of voice-assisted browsing in
                    no time.</Text>
                <br />
                <Text className={classes.para} ml={32} >With these features and more, our Voice Assistant Plugin sets the standard for intuitive
                    website interaction. Whether you&apos;re a seasoned user or new to voice technology, our plugin makes navigating the web a
                    breeze, offering unparalleled convenience and efficiency at your fingertips.</Text>

                <Title order={1} className={classes.title} mt={10}> Our Mission </Title>
                <Text className={classes.para} >At Voice Navigator, our mission is to revolutionize website interactions with advanced
                    voice technology, making web navigation seamless, intuitive, and inclusive for all users.</Text>
<br/>
                {/* <Group justify="center" gap="sm" grow> */}
                    <div>
                        <Title order={3} className={classes.title} > <IconCornerDownRightDouble /> Pioneering Innovation</Title>
                        <Text className={classes.para} ml={32} >We lead in developing innovative solutions that redefine how users interact with websites, ensuring our
                            products meet current demands and anticipate future trends.</Text>
                    </div>
                    <div>
                        <Title order={3} className={classes.title} > <IconCornerDownRightDouble /> Enhancing Accessibility</Title>
                        <Text className={classes.para} ml={32} >We believe the internet should be accessible to everyone. Our Voice Assistant Plugin empowers users with
                            disabilities by providing an intuitive, voice-activated navigation option.</Text>
                    </div>
                    <div>
                        <Title order={3} className={classes.title} > <IconCornerDownRightDouble /> User-Centric Design</Title>
                        <Text className={classes.para} ml={32} >Our products prioritize ease of use, reliability, and performance, continuously refined through user feedback
                            to enhance the overall experience.</Text>
                    </div>
                    <div>
                        <Title order={3} className={classes.title} > <IconCornerDownRightDouble /> Driving User Engagement</Title>
                        <Text className={classes.para} ml={32} >Our Voice Assistant Plugin boosts user interaction by enabling natural language commands, making it easier
                            to find information and stay engaged, thereby improving satisfaction and retention rates.</Text>
                    </div>
                    <div>
                        <Title order={3} className={classes.title} > <IconCornerDownRightDouble /> Committing to Excellence</Title>
                        <Text className={classes.para} ml={32} >We are dedicated to delivering high-quality, secure, and reliable products, ensuring our Voice Assistant 
                            Plugin performs at its best.</Text>
                    </div>
                    <div>
                        <Title order={3} className={classes.title} > <IconCornerDownRightDouble /> Empowering Businesses</Title>
                        <Text className={classes.para} ml={32} >We empower businesses to enhance their online presence with modern, accessible, and interactive experiences. 
                            Our support and resources help businesses integrate our solutions seamlessly and achieve their goals.</Text>
                            <br />
                        <Text className={classes.para} ml={32} >At Voice Navigator, we strive to transform website interactions through innovation, accessibility, 
                            user-centric design, engagement, excellence, and empowerment.</Text>
                    </div>
                {/* </Group> */}

                <Title order={3} className={classes.title} mt={10}> Key Features </Title>
                <Text className={classes.para} >The Tour Generator is a feature-rich component designed to elevate user engagement and
                    enhance the browsing experience.
                    Here&apos;s what you need to know:</Text>
                <ul className={classes.list}>
                    <li><span style={{ color: '#4dabf7' }} >Interactive Tours -</span> Users can create step-by-step guided tours with ease.</li>
                    <li><span style={{ color: '#4dabf7' }} >Customization Options -</span> Tailor tours to match website branding and design preferences.</li>
                    <li><span style={{ color: '#4dabf7' }} >Easy Tour Creation -</span> Intuitive interface allows for easy creation and management of tours
                        without the need for technical expertise.</li>
                    <li><span style={{ color: '#4dabf7' }} >Simple Setup -</span> Intuitive interface ensures easy tour creation and management.</li>
                    <li><span style={{ color: '#4dabf7' }} >Tour Analytics -</span> Track user interactions with tours and gain insights into user engagement and behavior to optimize tour effectiveness.</li>
                    <li><span style={{ color: '#4dabf7' }} >Enhanced User Experience -</span> Guided tours lead to improved engagement and understanding
                        of website content.</li>
                    <li><span style={{ color: '#4dabf7' }} >Flexible Tour Sequencing -</span> Define the sequence of tour steps to ensure a logical and informative flow for users navigating your website.</li>
                    <li><span style={{ color: '#4dabf7' }} >Seamless Integration -</span> Effortlessly integrate the Tour Generator into your website for a personalized
                        browsing experience.</li>
                    <li><span style={{ color: '#4dabf7' }} >Responsive Design -</span> Tours are optimized for various devices and screen sizes, ensuring a seamless experience across desktops, tablets, and mobile devices.</li>
                    <li><span style={{ color: '#4dabf7' }} >Embeddable Shortcodes -</span> Easily embed tours into any page or post on your website using generated shortcodes, allowing for seamless integration with existing content.</li>
                </ul>

            </div>
        </div >
    )
}

export default VoiceDocs
