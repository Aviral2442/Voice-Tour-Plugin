'use client'
import React, { useState } from 'react';

const Feedback = () => {
    const [feedback, setFeedback] = useState('');
    const [suggestions, setSuggestions] = useState('');
    
    const handleSubmitFeedback = (e) => {
        e.preventDefault();
        // Handle feedback submission logic here
        console.log('Feedback submitted:', feedback);
    }

    const handleSubmitSuggestions = (e) => {
        e.preventDefault();
        // Handle suggestions submission logic here
        console.log('Suggestions submitted:', suggestions);
    }
  return (

            <div className="user-feedback-page">
                <h1>Feedback and Suggestions</h1>
                <section className="feedback-section">
                    <h2>Give Us Your Feedback</h2>
                    <p>We appreciate your feedback! Let us know what you like or dislike about our platform.</p>
                    <form onSubmit={handleSubmitFeedback}>
                        <label htmlFor="feedback">Feedback:</label>
                        <textarea 
                            id="feedback" 
                            name="feedback" 
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            rows="4" 
                            cols="50" 
                            placeholder="Enter your feedback here..." 
                            required
                        ></textarea>
                        <button type="submit">Submit Feedback</button>
                    </form>
                </section>
                <section className="suggestions-section">
                    <h2>Share Your Suggestions</h2>
                    <p>Have an idea for improvement? We'd love to hear it! Share your suggestions with us.</p>
                    <form onSubmit={handleSubmitSuggestions}>
                        <label htmlFor="suggestions">Suggestions:</label>
                        <textarea 
                            id="suggestions" 
                            name="suggestions" 
                            value={suggestions}
                            onChange={(e) => setSuggestions(e.target.value)}
                            rows="4" 
                            cols="50" 
                            placeholder="Enter your suggestions here..." 
                            required
                        ></textarea>
                        <button type="submit">Submit Suggestions</button>
                    </form>
                </section>
            </div>
        );
      
}

export default Feedback