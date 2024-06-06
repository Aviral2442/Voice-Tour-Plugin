'use client'
import { Anchor, Container } from '@mantine/core';
import React from 'react';
import classes from './community.module.css';

const CommunityAndSupportPage = () => {
    return (
        <Container className={classes.Container} fluid p={15} pl={40}>
            <h1 className={classes.title}>Community and Support</h1>
            <section className="community-section">
                <h2 className={classes.head}>Community Forums</h2>
                <p className={classes.para}>Join our community forums to connect with other users, share experiences, and get help from fellow members.</p>
                <Anchor href="https://example.com/community-forums" target="_blank" rel="noopener noreferrer">Visit Forums</Anchor>
            </section>
            <section className="support-section">
                <h2 >Support Channels</h2>
                <p className={classes.para}>Need assistance or have questions? Reach out to our support team via the following channels:</p>
                <ul className={classes.para}>
                    <li>Email Support: voicetourps@gmail.com</li>
                    <li>Live Chat: Available during business hours</li>
                    <li>Phone Support: <Anchor href="tel:+919260973330">+919260973330</Anchor> (Mon-Fri, 9am-5pm EST)</li>
                </ul>
            </section>
            <section className="knowledge-base-section">
                <h2 >Knowledge Base</h2>
                <p className={classes.para}>Explore our knowledge base for helpful articles, tutorials, and troubleshooting guides.</p>
                <Anchor href="https://example.com/knowledge-base" target="_blank" rel="noopener noreferrer">
                    Visit Knowledge Base
                    </Anchor>
            </section>
        </Container>
    );
}

export default CommunityAndSupportPage;
