import React from 'react';

const CommunityAndSupportPage = () => {
    return (
        <div className="community-support-page">
            <h1>Community and Support</h1>
            <section className="community-section">
                <h2>Community Forums</h2>
                <p>Join our community forums to connect with other users, share experiences, and get help from fellow members.</p>
                <a href="https://example.com/community-forums" target="_blank" rel="noopener noreferrer">Visit Forums</a>
            </section>
            <section className="support-section">
                <h2>Support Channels</h2>
                <p>Need assistance or have questions? Reach out to our support team via the following channels:</p>
                <ul>
                    <li>Email Support: voicetourps@gmail.com</li>
                    <li>Live Chat: Available during business hours</li>
                    <li>Phone Support: <a href="tel:+919260973330">+919260973330</a> (Mon-Fri, 9am-5pm EST)</li>
                </ul>
            </section>
            <section className="knowledge-base-section">
                <h2>Knowledge Base</h2>
                <p>Explore our knowledge base for helpful articles, tutorials, and troubleshooting guides.</p>
                <a href="https://example.com/knowledge-base" target="_blank" rel="noopener noreferrer">Visit Knowledge Base</a>
            </section>
        </div>
    );
}

export default CommunityAndSupportPage;
