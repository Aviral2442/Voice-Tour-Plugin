'use client'
import React from 'react'
import classes from './faq.module.css'
import { Text, Title } from '@mantine/core'

const Faq = () => {
    return (
        <div >
            <div className={classes.mainContainer} >
                {/* <Title order={1} c="#ffffff" >Getting started</Title> */}

                <Title pt={'20'} order={1} c="#ffffff">FAQ's & Troubleshooting</Title>

                <div className="faq-page">
                    <h1>Frequently Asked Questions</h1>
                    <section className="faq-section">
                        <h2>Question 1: What is the Tour Generator?</h2>
                        <p>The Tour Generator is a dynamic tool integrated into our website that empowers users to create interactive guided tours.</p>
                    </section>
                    <section className="faq-section">
                        <h2>Question 2: How do I create a new tour?</h2>
                        <p>To create a new tour, navigate to the Generate Tour page and follow the step-by-step instructions provided.</p>
                    </section>
                    <section className="faq-section">
                        <h2>Question 3: Can I customize the appearance of my tours?</h2>
                        <p>Yes, you can customize the appearance of your tours to match your website's branding and design aesthetic.</p>
                    </section>
                    <section className="faq-section">
                        <h2>Question 4: Can I create tours for specific user segments?</h2>
                        <p>Yes, you can create tours tailored to different user segments or personas to provide personalized experiences.</p>
                    </section>
                    <section className="faq-section">
                        <h2>Question 5: Are there limitations on the number of tours I can create?</h2>
                        <p>No, there are no limitations on the number of tours you can create. Feel free to create as many tours as you need to enhance your website's user experience.</p>
                    </section>
                    <section className="faq-section">
                        <h2>Question 6: Can I embed tours on external websites?</h2>
                        <p>Yes, you can embed tours on external websites by using the provided shortcode or embedding code.</p>
                    </section>
                    <section className="faq-section">
                        <h2>Question 7: Can I add multimedia elements to my tours?</h2>
                        <p>Yes, you can enhance your tours with multimedia elements such as images, videos, and audio clips to provide a rich and engaging experience.</p>
                    </section>
                    <section className="faq-section">
                        <h2>Question 8: Is the Tour Generator compatible with all web browsers?</h2>
                        <p>The Tour Generator is designed to be compatible with modern web browsers, including Chrome, Firefox, Safari, and Edge. Ensure that you are using an up-to-date browser version for optimal performance.</p>
                    </section>
                    <section className="faq-section">
                        <h2>Question 9: Can I translate tours into different languages?</h2>
                        <p>Yes, you can translate tours into different languages to cater to multilingual audiences. Explore the translation options available within the Tour Generator for seamless localization.</p>
                    </section>
                    <section className="faq-section">
                        <h2>Question 10: How can I track the performance of my tours?</h2>
                        <p>You can track the performance of your tours using built-in analytics tools or third-party tracking solutions. Monitor metrics such as tour views, engagement rates, and conversion metrics to measure effectiveness.</p>
                    </section>
                    <section className="faq-section">
                        <h2>Question 11: Can I customize the behavior of tour elements?</h2>
                        <p>Yes, you can customize the behavior of tour elements, including tooltips, hotspots, and navigation buttons, to create interactive and dynamic tour experiences.</p>
                    </section>


                    {/* Add more FAQ sections as needed */}
                </div>

                <div className="troubleshooting-page">
                    <h1>Troubleshooting</h1>
                    <section className="troubleshooting-section">
                        <h2>Issue: Unable to Create a New Tour</h2>
                        <p>If you're experiencing issues creating a new tour, ensure that you have entered the correct selector ID, title, and description for each element.</p>
                    </section>
                    <section className="troubleshooting-section">
                        <h2>Issue: Tours Not Displaying Correctly on Mobile Devices</h2>
                        <p>If your tours are not displaying correctly on mobile devices, check the responsiveness of your website's design and make adjustments as needed.</p>
                    </section>
                    <section className="troubleshooting-section">
                        <h2>Issue: Tours Loading Slowly</h2>
                        <p>If your tours are loading slowly, optimize the performance of your website by minimizing resource-heavy elements and scripts.</p>
                    </section>
                    <section className="troubleshooting-section">
                        <h2>Issue: Tours Not Loading After Website Update</h2>
                        <p>If your tours are not loading after a website update, check for any conflicts with other plugins or scripts added during the update process.</p>
                    </section>
                    <section className="troubleshooting-section">
                        <h2>Issue: Tour Editor Not Saving Changes</h2>
                        <p>If the tour editor is not saving changes, ensure that you have a stable internet connection and try clearing your browser cache or using a different browser.</p>
                    </section>
                    <section className="troubleshooting-section">
                        <h2>Issue: Error Messages When Generating Tours</h2>
                        <p>If you encounter error messages when generating tours, double-check your input data and make sure it meets the required format and specifications.</p>
                    </section>
                    <section className="troubleshooting-section">
                        <h2>Issue: Tours Not Displaying in Specific Page Templates</h2>
                        <p>If tours are not displaying in specific page templates, check for conflicts with page builder plugins or custom page templates. Ensure that the tour embedding code is added correctly to the template.</p>
                    </section>
                    <section className="troubleshooting-section">
                        <h2>Issue: Tour Elements Overlapping with Website Content</h2>
                        <p>If tour elements are overlapping with website content, adjust the positioning and styling of tour elements using CSS to prevent visual conflicts.</p>
                    </section>
                    <section className="troubleshooting-section">
                        <h2>Issue: Tour Steps Skipping or Missing</h2>
                        <p>If tour steps are skipping or missing, review the tour sequence and ensure that each step is correctly configured. Check for any conditional logic or triggers that may be affecting the tour flow.</p>
                    </section>
                    <section className="troubleshooting-section">
                        <h2>Issue: Tours Not Working on Mobile Devices</h2>
                        <p>If tours are not working on mobile devices, verify that the tour scripts and assets are optimized for mobile compatibility. Test tours on different mobile devices and browsers to identify any compatibility issues.</p>
                    </section>
                    <section className="troubleshooting-section">
                        <h2>Issue: Tour Editor Crashing or Freezing</h2>
                        <p>If the tour editor is crashing or freezing, check for browser extensions or plugins that may be causing conflicts. Try disabling extensions or using an incognito/private browsing window to isolate the issue.</p>
                    </section>

                </div>

                {/* <Title order={3} className={classes.title} mt={10}>Introduction</Title>
                <Text className={classes.para} >Welcome to <span style={{ color: '#4dabf7' }} ><a href='/tourGenerator' >Tour Generator</a></span>, where we prioritize seamless navigation and exceptional user
                    experiences. As the digital landscape evolves, providing users with intuitive ways to explore and interact with your website
                    has become increasingly important. That's why we're thrilled to introduce our innovative Tour Plugin—a powerful tool designed
                    to transform the way users navigate and engage with your website.</Text>
                <br />

                <Title order={5} c="#4dabf7">Introducing the Solution</Title>
                <Text className={classes.para} >Enter the Tour Plugin—a dynamic and versatile solution that addresses the inherent complexities
                    of website navigation. Our plugin empowers website owners and administrators to create interactive guided tours that lead users
                    through the key features, functionalities, and content of their websites in a structured and engaging manner.</Text>
                <br />
                <Text className={classes.para} >we believe that exceptional user experiences are the cornerstone of a successful website. With our
                    Tour Plugin, you can elevate your website navigation, engage your audience, and leave a lasting impression on your visitors.
                    Join us in revolutionizing the way users explore and interact with websites—one guided tour at a time.</Text>
                <br />
                <Text className={classes.para} >With the Tour Plugin, you can transform your website into a user-friendly and immersive
                    destination that keeps visitors coming back for more.</Text>

                <Title order={3} className={classes.title} mt={10}>What is the Tour Generator ?</Title>
                <Text className={classes.para} >The Tour Generator is a dynamic tool integrated into our website that empowers users to create interactive
                    guided tours. These tours serve as navigational aids, allowing visitors to explore and understand key features, content, or
                    functionalities of the website in a structured manner.</Text>

                <Title order={3} className={classes.title} mt={10}> Key Features </Title>
                <Text className={classes.para} >The Tour Generator is a feature-rich component designed to elevate user engagement and enhance the browsing experience.
                    Here's what you need to know:</Text>
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
                </ul>*/}

            </div> 

            {/* <h1>Frequently Asked Questions</h1>
        <h2>What is the purpose of this website?</h2>
        <p>This website is designed to help users generate tours for their websites.</p>
        <h2>How do I generate a tour?</h2>
        <p>Click on the "Generate Tour" button on the home page, and follow the instructions to generate a tour for your website.</p>
        <h2>How do I view a tour?</h2>
        <p>Click on the "View Tour" button on the home page, and follow the instructions to view a tour for your website.</p>
        <h2>How do I edit a tour?</h2>
        <p>Click on the "Edit Tour" button on the home page, and follow the instructions to edit a tour for your website.</p>
        <h2>How do I delete a tour?</h2>
        <p>Click on the "Delete Tour" button on the home page, and follow the instructions to delete a tour for your website.</p> */}
        </div>
    )
}

export default Faq