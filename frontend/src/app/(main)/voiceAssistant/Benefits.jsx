import React from 'react'
import {
    Image,
    Text,
    Container,
    ThemeIcon,
    Title,
    SimpleGrid
} from "@mantine/core"
import classes from "./benefits.module.css"
import { Josefin_Sans } from 'next/font/google'
import clsx from 'clsx';
const font = Josefin_Sans({ subsets: ['latin'], weight: ['400'] });


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
    const items = data.map(item => (
        <div className={classes.item} key={item.image}>
            <ThemeIcon                
                className={classes.itemIcon}
                size={60}
                color='white'
                radius="md"
            >
                <Image src={item.image} />
            </ThemeIcon>

            <div>
                <Text fw={700} fz="lg" className={clsx(classes.itemTitle,font.className)} c={"#66ff00"} >
                    {item.title}
                </Text>
                <Text
                className={classes.itemDescription}
                c="dimmed">{item.description}</Text>
            </div>
        </div>
    ))
    return (
        <Container fluid className={classes.wrapper}>

            <Title className={classes.title} >
                Benefits <span className={classes.highlight}></span> 
             
            </Title>

            

            <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt={30}>
                {items}
            </SimpleGrid>
        </Container>
    )
}

export default KeyFeatures