import React, { useState } from 'react';
import "./FaqQuestion.css";


function FaqQuestion({ title, answer,question }) {
    const [isOpen, switchStatus] = useState(false);

    let FA = require('react-fontawesome');

    return (
        <div className={`faq-question ${isOpen ? 'open' : ''}`} onClick={() => { switchStatus(!isOpen) }}>
            <div className="title-holder">
                <div className="faq-question__title" ><FA name={title} size="2x"/></div>
                <div className="faq-question__text"><p>{question}</p></div>
                <div className="faq-question__plus">
                    <div className="plus__line1"></div>
                    <div className="plus__line2"></div>
                </div>
            </div>
            <div className="faq-question_answer">
                <p className="answer-text">{answer}</p>
            </div>
        </div>
    );
}


export default FaqQuestion;