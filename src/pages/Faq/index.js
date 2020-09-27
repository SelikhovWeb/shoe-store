import React from "react";
import "./Faq.css";
import Footer from "../../components/Footer";
import FaqQuestion from "../../components/FaqQuestion"

function Faq() {
  return (
    <div>
      <div className="faq-page">
        <div className="questions">
          <FaqQuestion title="money" question="question" answer="answer" />
          <FaqQuestion title="truck" question="question" answer="answer" />
          <FaqQuestion title="check" question="question" answer="answer" />
          <FaqQuestion title="line-chart" question="question" answer="answer" />
          <FaqQuestion title="eur" question="question" answer="answer" />
          <FaqQuestion title="undo" question="question" answer="answer" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Faq;
