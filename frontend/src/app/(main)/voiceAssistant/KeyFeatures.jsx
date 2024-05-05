import React, { useEffect } from 'react'
import {
    Image,
    Text,
    Container,
    ThemeIcon,
    Title,
    SimpleGrid
} from "@mantine/core"
import classes from "./keyfeatures.module.css"
import { Josefin_Sans } from 'next/font/google'
import clsx from 'clsx';
import Aos from 'aos';
const font = Josefin_Sans({ subsets: ['latin'], weight: ['400'] });


const data = [
    {
        image: "voiceicon1.svg",
        title: "Voice-Activated Navigation",
        description:
            "Say goodbye to traditional mouse clicks and keyboard inputs. With our Voice Assistant, simply speak your commands to navigate through website content effortlessly."
    },
    {
        image: "voiceicon2.png",
        title: "Intelligent Interpretation",
        description: "Our advanced voice recognition technology interprets user commands accurately, allowing for smooth and seamless interactions with websites."
    },
    {
        image: "voiceicon3.png",
        title: "Customizable Commands ",
        description:
            "Tailor the Voice Assistant to your preferences by customizing voice commands to perform specific actions or access frequently used features."
    },
    {
        image: "voiceicon4.png",
        title: "Accessibility",
        description: "Enhance accessibility for users with disabilities by providing an alternative method of website navigation through voice commands."
    }
]





const KeyFeatures = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const items = data.map(item => (
        <div className={classes.item} key={item.image}>
            <ThemeIcon
                className={classes.itemIcon}
                size={60}
                color='black'
                radius="md"
            >
                <Image src={item.image} />
            </ThemeIcon>

            <div>
                <Text fw={700} fz="lg" className={clsx(classes.itemTitle, font.className)} c={"white"} >
                    {item.title}
                </Text>
                <Text
                    className={classes.itemDescription}
                    c="dimmed">{item.description}</Text>
            </div>
        </div>
    ))
    return (
        <Container size={"lg"} className={classes.wrapper}>

            <Title className={classes.title} mb={60} ta={"center"} data-aos="fade-up">
                Key <span className={classes.highlight}>Features</span>

            </Title>



            <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt={30} data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom">
                {items}
            </SimpleGrid>
        </Container>
    )
}

export default KeyFeatures