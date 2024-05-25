'use client'
import { Anchor, Container, Group, Image, Paper, Text, Title } from '@mantine/core'
import React, { useState } from 'react'
import classes from './Footer.module.css'
import {
    useForm,
    isEmail,
} from "@mantine/form"
import { Button, TextInput, NumberInput } from "@mantine/core"
import Link from 'next/link'
import { Cormorant_Garamond, Josefin_Sans } from 'next/font/google'
import clsx from 'clsx'
import { Icon360View, IconMail } from '@tabler/icons-react'
import toast from 'react-hot-toast'
import { notifications } from '@mantine/notifications'
import '@mantine/notifications/styles.css';

const font = Josefin_Sans({ subsets: ['latin'], weight: ['400'] });
const fonts = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

export function Footer() {

    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);

    const handleInputChange = (event) => {
        setEmail(event.target.value.trim()); // Update email state and trim whitespace
        setInvalidEmail(false); // Reset invalidEmail state when user types
    };
    const handleSubscribe = () => {
        if (!email || !isValidEmail(email)) {
            setInvalidEmail(true);
            // Set invalidEmail state to true if email is invalid or empty
            return;
        }

        // Perform subscription action here (e.g., send email to server)
        console.log('Subscribed with email:', email);

        // Update state to indicate successful subscription
        setSubscribed(true);
        setEmail(''); // Clear email input after successful subscription
    };

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Validate email format
    };



    return (
        <>
            <footer>
                <Paper
                    shadow="xs"
                    className={classes.footerContainer}
                >

                    <Group className={classes.colms1} >
                        <div>
                            <Image
                                w="auto"
                                src="LOGO2.png"
                                alt="Logo"
                                width={150}
                                height={100}
                            />
                        </div>
                        <div>
                            <Text className={font.className} mt={"-20"}>
                                Users can navigate websites effortlessly using natural language voice commands, eliminating the need for traditional mouse clicks and keyboard inputs.</Text>
                        </div>
                        <div>
                            <Group>
                                <a href="https://www.facebook.com/" >
                                    <svg className={classes.socialIcon} style={{ color: "white" }} className="w-[28px] h-[28px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                                <a href="https://www.facebook.com/">
                                    <svg style={{ color: "white" }} className="w-[28px] h-[28px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd" />
                                    </svg>

                                </a>
                                <a href="https://www.facebook.com/">
                                    <svg style={{ color: "white" }} className="w-[28px] h-[28px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                                        <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                                    </svg>

                                </a>
                                <a href="https://www.facebook.com/">
                                    <svg style={{ color: "white" }} className="w-[28px] h-[28px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                                    </svg>

                                </a>
                                <a href="https://www.facebook.com/">
                                    <svg style={{ color: "white" }} className="w-[28px] h-[28px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clip-rule="evenodd" />
                                    </svg>

                                </a>
                            </Group>
                        </div>
                    </Group>
                    <Group className={classes.colms0} >
                        <div>
                            <Title order={3} className={fonts.className}> Quick Links</Title>
                            <p><Anchor c="#c3cbdc" component={Link} href="/faq" className={font.className}>Faq's</Anchor> </p>
                            <p><Anchor c="#c3cbdc" component={Link} href="/blog" className={font.className}>Blog's </Anchor> </p>
                        </div>
                    </Group>
                    <Group className={classes.colms} >
                        <div>
                            <Title order={3} className={fonts.className}>Documentation's</Title>
                            <p><Anchor c="#c3cbdc" component={Link} href="/voiceAssistant" className={font.className}>Voice Assistant</Anchor> </p>
                            <p><Anchor c="#c3cbdc" component={Link} href="/tourGenerator" className={font.className}>Tour generator</Anchor> </p>
                        </div>
                    </Group>
                    <Group className={classes.colms2} >
                        <div>
                            <Title order={3} className={fonts.className}>Policies</Title>
                            <p><Anchor c="#c3cbdc" component={Link} href="/terms" className={font.className}>Terms & Conditions</Anchor> </p>
                            <p><Anchor c="#c3cbdc" component={Link} href="/privacy" className={font.className}>Privacy policy</Anchor> </p>
                            <p><Anchor c="#c3cbdc" component={Link} href="/disclaimer" className={font.className}>Disclaimer </Anchor> </p>
                        </div>
                    </Group>

                    <Group className={classes.colmscontact} >
                        <div>
                            {!subscribed ? (
                                <div>
                                    <TextInput
                                        placeholder="Your email"
                                        mt="md"
                                        value={email}
                                        onChange={handleInputChange}
                                        error={invalidEmail ? 'Invalid email' : null}
                                    />

                                    <Button
                                        color={subscribed ? 'green' : '#66ff00'}
                                        onClick={handleSubscribe}
                                        // disabled={!email || subscribed || invalidEmail}
                                        mt={8} variant='outline' fullWidth type="submit" className={font.className}>
                                        Subscribe
                                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.707.707L9.414 13H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z" clip-rule="evenodd" />
                                            <path fill-rule="evenodd" d="M8.023 17.215c.033-.03.066-.062.098-.094L10.243 15H15a3 3 0 0 0 3-3V8h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1.707.707L14.586 18H9a1 1 0 0 1-.977-.785Z" clip-rule="evenodd" />
                                        </svg>
                                    </Button>
                                </div>) : (
                                <Button
                                    onClick={() =>
                                        notifications.show({
                                            title: 'Successfully Subscribed!',
                                            message: 'You have successfully subscribed to our website. Thank you!',
                                            classNames: classes,
                                        })
                                    }
                                    mt={8} variant='outline' color='#66ff00' fullWidth type="submit" className={font.className}>
                                    Successfully Subscribed
                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 96 96">
                                        <path
                                            d="M40.2 12.6c4.5-3.8 11.1-3.8 15.6 0l2.1 1.8c1.9 1.6 4.3 2.6 6.8 2.8l2.8.2c5.9.5 10.5 5.1 11 11l.2 2.8c.2 2.5 1.2 4.9 2.8 6.8l1.8 2.1c3.8 4.5 3.8 11.1 0 15.6l-1.8 2.1c-1.6 1.9-2.6 4.3-2.8 6.8l-.2 2.8c-.5 5.9-5.1 10.5-11 11l-2.8.2c-2.5.2-4.9 1.2-6.8 2.8l-2.1 1.8c-4.5 3.8-11.1 3.8-15.6 0l-2.1-1.8c-1.9-1.6-4.3-2.6-6.8-2.8l-2.8-.2c-5.9-.5-10.5-5.1-11-11l-.2-2.8c-.2-2.5-1.2-4.9-2.8-6.8l-1.8-2.1c-3.8-4.5-3.8-11.1 0-15.6l1.8-2.1c1.6-1.9 2.6-4.3 2.8-6.8l.2-2.8c.5-5.9 5.1-10.5 11-11l2.8-.2c2.5-.2 4.9-1.2 6.8-2.8l2.1-1.8z"
                                            fill="#66ff00"
                                            stroke="#000"
                                            strokeWidth="5"
                                        />
                                        <path
                                            d="M35.5 49.9l5.1 5.1c2 2 5.1 2 7.1 0l14.8-14.8"
                                            fill="#66ff00"
                                            stroke="#000"
                                            strokeLinecap="round"
                                            strokeWidth="5"
                                        />
                                    </svg>
                                </Button>
                            )}
                        </div>
                        <div>
                            {/* <Title order={3} className={fonts.className} mt={"md"}>Contact</Title> */}
                            <div>
                                <Group>
                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z" />
                                    </svg>
                                    <p className={font.className}>+91 9260973330</p>
                                </Group>
                                <Group mt={'-20'}>
                                    <IconMail />
                                    <p className={font.className}>vtps@gmail.com</p>
                                </Group>
                            </div>

                        </div>
                    </Group>

                </Paper>

                <Container className={classes.afterFooter}>
                    <Title fw={300} align="center" className={clsx(classes.afterFootertitle, font.className)}>© CopyRight 2024 | VoiceTour Navigator | All rights reserved.</Title>
                </Container>
            </footer>
        </>
    )
}
