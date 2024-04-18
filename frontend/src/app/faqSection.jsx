'use client'
import React, { useEffect } from 'react'
import { Container, Title, Accordion, Box } from "@mantine/core"
import classes from "./faqSection.module.css"
import Aos from 'aos'



export default function Faqsection() {

    
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

    return (
        
        <Container size="md" className={classes.wrapper} pt={180} pb={180} >
            <Title ta="center" className={classes.title} data-aos="fade-up">
                Frequently <span style={{color:'white'}}>Asked</span> Questions
            </Title>

            <Accordion variant="separated" >
                <Accordion.Item className={classes.item} value="reset-password" data-aos="fade-up">
                    <Accordion.Control>How does the Voice Assistant work?</Accordion.Control>
                    <Accordion.Panel>Our Voice Assistant utilizes advanced voice recognition technology to interpret user commands and navigate through website content accordingly. Simply activate the assistant and speak your commands to browse effortlessly.</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="another-account" data-aos="fade-up">
                    <Accordion.Control>
                    Can I customize the website tours generated by the Tour Generator?
                    </Accordion.Control>
                    <Accordion.Panel>Yes, our Tour Generator allows for full customization of website tours. You can specify the sections you want to include, set preferences for tour duration and pacing, and personalize the tour experience to suit your needs.</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="newsletter" data-aos="fade-up">
                    <Accordion.Control>
                    Are the plugins easy to install and use?
                    </Accordion.Control>
                    <Accordion.Panel>Absolutely! Installing and using plugins on our platform is straightforward. Simply browse through the available plugins, select the ones you want to install, and follow the prompts to integrate them into your browsing experience.</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="credit-card" data-aos="fade-up">
                    <Accordion.Control>
                    Is the Voice Assistant compatible with all websites?
                    </Accordion.Control>
                    <Accordion.Panel>While our Voice Assistant is designed to work with most websites, there may be some compatibility limitations depending on the website's structure and functionality. However, we continuously strive to improve compatibility and usability across a wide range of websites.</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="payment" data-aos="fade-up">
                    <Accordion.Control>
                    How can I provide feedback or report issues with the platform?
                    </Accordion.Control>
                    <Accordion.Panel>We value your feedback and are always here to assist you. Feel free to reach out to our support team through the contact form on our website, and we'll be happy to address any questions, concerns, or feedback you may have.</Accordion.Panel>
                    {/* <Accordion.Panel>{placeholder}</Accordion.Panel> */}
                </Accordion.Item>
            </Accordion>
        </Container>
        
    )
}
