import React, { useEffect } from 'react'
import {
    Image,
    Text,
    Container,
    ThemeIcon,
    Title,
    SimpleGrid
} from "@mantine/core"
import classes from "./benefits.module.css"
import { Josefin_Sans, Rammetto_One } from 'next/font/google'
import clsx from 'clsx';
import Aos from 'aos';

const font = Josefin_Sans({ subsets: ['latin'], weight: ['400'] });
const fonts = Rammetto_One({ subsets: ['latin'], weight: ['400'] });


const data = [
    {
        image: "benefiticon1.png",
        title: "Efficiency",
        description:
            "Save time and effort by navigating websites hands-free, allowing you to focus on the content without distractions."
    },
    {
        image: "benefiticon2.png",
        title: "Accessibility",
        description: " Improve accessibility for users with disabilities who may face challenges with traditional input methods."
    },
    {
        image: "benefiticon3.png",
        title: "User-Friendly ",
        description:
            "Enjoy a user-friendly browsing experience that caters to users of all technical proficiencies."
    },
    {
        image: "benefiticon4.png",
        title: "Innovation",
        description: "Embrace the latest advancements in technology and stay ahead of the curve with our Voice Assistant feature."
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
                <Image src={item.image} alt='icon' />
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

            <Title className={clsx(classes.title,fonts.className)} ta={"center"} data-aos="fade-up">
                Bene<span className={classes.highlight}>fits</span>
            </Title>



            <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt={30} data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom">
                {items}
            </SimpleGrid>
        </Container>
    )
}

export default KeyFeatures