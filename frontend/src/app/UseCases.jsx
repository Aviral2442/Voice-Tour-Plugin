import React, { useEffect } from 'react'
import {
    Image,
    Text,
    Container,
    ThemeIcon,
    Title,
    SimpleGrid,
    Group,
    Badge
} from "@mantine/core"
import classes from "./usecases.module.css"
import { Josefin_Sans, Rammetto_One } from 'next/font/google'
import clsx from 'clsx';
import Aos from 'aos';

const font = Josefin_Sans({ subsets: ['latin'], weight: ['400'] });
const fonts = Rammetto_One({ subsets: ['latin'], weight: ['400'] });

const data = [
    {
        image: "caseicon1.png",
        title: "Effortless Website Exploration",
        description:
          "Explore websites hands-free using our Voice Assistant feature. Whether you're browsing articles, shopping for products, or researching information, our intuitive assistant makes navigation seamless."
      },
      {
        image: "caseicon2.png",
        title: "Guided Website Tours",
        description: "Generate personalized website tours with our Tour Generator tool. Perfect for first-time visitors or those seeking to explore specific sections, our tours provide a curated journey through the website's key content."
      },
      {
        image: "caseicon3.png",
        title: "Customizable Experience",
        description:
          "Tailor your browsing experience to suit your needs with our Plugin Customization feature. Install and activate plugins to add new functionalities, enhance existing features, and personalize your interaction with the website."
      },
      {
        image: "caseicon4.png",
        title: "Accessibility Enhancement",
        description: "Our platform improves website accessibility for users with disabilities by providing alternative navigation methods such as voice commands, enhancing their overall browsing experience."
      }
      
]

const UseCases = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const items = data.map(item => (
        <div className={classes.item} key={item.image}>
            <ThemeIcon
                className={classes.itemIcon}
                size={70}
                color='black'
                radius="md"
            >
                <Image src={item.image} alt='image ' />
            </ThemeIcon>

            <div>
                <Text fw={700} fz="lg" className={clsx(classes.itemTitle, font.className)} >
                    {item.title}
                </Text>
                <Text 
                    className={classes.itemDescription}
                    >{item.description}</Text>
            </div>
        </div>
    ))
    return (
        <Container size={"lg"} className={classes.wrapper} data-aos="fade-up"  data-aos-duration="3000"
        >
        
            <Title mt={"20"} mb={"15"} className={clsx(classes.title,fonts.className)} >
                Unlock <span className={classes.highlight}>Endless</span> Possibilities

            </Title>
            <Container size={660} p={0} >
                <Text  className={classes.description}>
                    Discover how our platform can be applied to various scenarios and industries, empowering users to navigate websites, conduct research, and streamline workflows with ease.
                </Text>
            </Container>
            
            <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt={50} >
                {items}
            </SimpleGrid>
        </Container>
    )
}

export default UseCases