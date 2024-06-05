'use client'
import React from 'react'
import { Anchor, Container, Grid, Image, Text, Title } from '@mantine/core'
import classes from './setup.module.css'
import { CopyBlock, dracula } from 'react-code-blocks'

const Setup = () => {
    return (
        <>
        <Container fluid className={classes.mainContainer} >

            <Title pt={'20'} order={2} c="#ffffff">
                To Submit Your Web Page, Follow These Steps Carefully: </Title>

            <Text className={classes.para} mt={15} >Submitting your web pages is a straightforward process designed to
                ensure that all necessary information is accurately captured. By following the detailed steps outlined below,
                you can efficiently add your web pages to our system. This guide will help you navigate each step of the
                submission process, from logging in to viewing your results. Whether you are submitting one page or multiple
                pages, these instructions will ensure a smooth and successful submission experience.</Text>
            <br />

            <Title order={3} className={classes.title} mt={8} ml={9}> <span className={classes.steps} >Step 1:</span> Log In to
                Our Site</Title>
            <Text className={classes.para} ml={10}  >Ensure that you are logged into your account on our website. If you
                do not have an account, please <Anchor href="/signup" underline="hover"> register </Anchor> to create one.</Text>

            <Title order={3} className={classes.title} mt={8} ml={9}> <span className={classes.steps} >Step 2:</span> Navigate to
                Create Web Pages</Title>
            <Text className={classes.para} ml={10}  >Go to the &quot;<Anchor href="/user/manage-webpage" underline="hover">Create Web
                Pages</Anchor>&quot;  section to start the submission process for your web pages.</Text>

                <Image src="/webpage.jpeg" h={420} mt={20} radius="md" alt="setup" className={classes.image} />


            <Title order={3} className={classes.title} mt={8} ml={9}> <span className={classes.steps} >Step 3:</span> Click on
                Submit Web Pages</Title>
            <Text className={classes.para} ml={10}  >Click the &quot;Submit Web Pages&quot; button to access the submission form.</Text>

            <Image src="/webpageform.png" h={420} mt={20} radius="md" alt="setup" className={classes.image} />

            
            <Grid  justify="center" align="center" mt={60} >
            <Grid.Col span={8}>
            <Title order={3} className={classes.title} mt={8} ml={9}> <span className={classes.steps} >Step 4:</span> Fill in
                the Required Fields</Title>
            <Text className={classes.para} ml={10}  >Complete all necessary fields in the submission form:</Text>

            <Title order={5} mt={18} ml={90}> <span className={classes.subSteps} >Web Page Name:</span>
                <span className={classes.subPara} ml={10}  > Enter a name for your web page.</span>
            </Title>
            <Title order={5} ml={90}> <span className={classes.subSteps} >Address of the Page:</span>
                <span className={classes.subPara} ml={10}  > Provide the URL of your web page.</span>
            </Title>
            <Title order={5} mb={18} ml={90}> <span className={classes.subSteps} >Page Description: </span>
                <span className={classes.subPara} ml={10}  > Write a brief description of the web page.</span>
            </Title>
            <Text className={classes.para} ml={10}  >Once all fields are completed, click on the &quot;Submit Web Pages&quot; button to
                submit your web page.</Text>
                </Grid.Col>
                <Grid.Col span={4}>
                <Image src="/wpform.png" h={300} mt={20} radius="md" alt="setup" className={classes.image} />
                </Grid.Col>
                </Grid>

            <Title order={3} className={classes.title} mt={8} ml={9}> <span className={classes.steps} >Step 5:</span> Repeat for
                Additional Pages</Title>
            <Text className={classes.para} ml={10}  >Repeat the above steps to submit any additional web pages you have.</Text>

            {/* Setup Section started  */}

            <br /><br /><br />
            <Title pt={'20'} order={2} c="#ffffff">
                To Set Up the Voice Navigation Plugin on Your Website, Follow These Steps Carefully </Title>

            <Text className={classes.para} mt={15} >Setting up the Voice Navigation Plugin on your website is a seamless
                process that enhances user interaction through intuitive voice commands. Follow the detailed steps below to
                integrate this advanced functionality into your site effectively. This guide covers each stage of the setup
                process, from logging in and submitting your web pages to generating and integrating voice navigation tours.
                By adhering to these instructions, you can ensure a smooth and successful integration experience, whether
                you are adding voice navigation to a single page or multiple pages.</Text>
            <br />

            <Title order={3} className={classes.title} mt={8} ml={9}> <span className={classes.steps} >Step 6: </span>
                Check Your Profile Page</Title>
            <Text className={classes.para} ml={10}  >To begin the setup of the Voice Navigator on your website, navigate
                to your <Anchor href="/user/profile" underline="hover"> Profile </Anchor> page to view your submitted web
                pages.</Text>

            <Title order={3} className={classes.title} mt={8} ml={9}> <span className={classes.steps} >Step 7: </span>
                Copy Your Unique User ID</Title>
            <Text className={classes.para} ml={10}  >On the profile page, you will see a list of all the web pages you
                have submitted. Locate and copy your unique &quot;User ID&quot; to proceed with the setup.</Text>

            <Title order={3} className={classes.title} mt={8} ml={9}> <span className={classes.steps} >Step 8: </span>
                Insert the Search Box Tag Inside the Body Tag</Title>
            <Text className={classes.para} ml={10}  >To integrate the Voice Navigator into your web page, use the
                following tag:</Text>

            <Text className={classes.para} ml={10} mt={10}>You need to use these two tags together inside the <b><u> Body
            </u></b> tag where you want the search box to appear. Remember, do not write anything between these tags:
            </Text>

            <Text className={classes.para} ml={10} mt={10}>Replace the asterisks (****************) with your unique User
                ID.</Text>

            <br />
            <CopyBlock
                text='  <search owner-id= "*************"/> '
                language="jsx"
                theme={dracula}
                wrapLines
            />

            <CopyBlock
                text='  <script src="http://localhost:5000/main.js"></script>  '
                language="jsx"
                theme={dracula}
                wrapLines
            />

            <Title order={3} className={classes.title} mt={8} ml={9}> <span className={classes.steps} >Step 9: </span>
                Insert Link Tags Inside Your Website&apos;s Head Tag</Title>
            <Text className={classes.para} ml={10}  >Inside the head tag, use these two link tags to import the CSS files
                for the Voice Navigation Plugin. Copy and paste the following tags into your website&apos;s  head tag
                section:</Text>


            <br />
            <CopyBlock
                text='  <link rel="stylesheet" href="http://localhost:5000/main.css"> '
                language="jsx"
                theme={dracula}
                wrapLines
            />

            <CopyBlock
                text='  <link rel="stylesheet" href="http://localhost:5000/spotlight.css">  '
                language="jsx"
                theme={dracula}
                wrapLines
            />

            <Title order={3} className={classes.title} mt={8} ml={9}> <span className={classes.steps} >Step 10: </span>
                Finalize and Verify the Integration</Title>
            <Text className={classes.para} ml={10}  >Make sure you correctly follow all the steps mentioned above to
                successfully integrate the Voice Navigation Plugin into your site. If you encounter any issues during the
                process, please feel free to contact our support team for assistance.</Text>

        </Container>
        </>
    )
}

export default Setup
