import { useState } from "react";
import "../styles/Giving.css";
import { givingOptions, paymentMethods } from "../assets/data";

const Giving = () => {
  const [givingType, setGivingType] = useState("tithe");

  return (
    <section id="giving" className="giving-section">
      <div className="container">
        <div className="giving-header">
          <h2 className="animate-fade-in-up">Giving & Donations</h2>
          <p className="decorative-text animate-fade-in-up">Generous Hearts</p>
          <p className="animate-fade-in-up">
            Your generosity enables us to fulfill our mission and serve our
            community. Thank you for being a faithful steward of God's
            blessings.
          </p>
        </div>

        <div className="giving-content">
          <div className="giving-form-section">
            <div className="giving-options">
              <h3>Choose Your Giving Type</h3>
              <div className="options-grid">
                {givingOptions.map((option) => (
                  <div
                    key={option.id}
                    className={`option-card ${
                      givingType === option.id ? "active" : ""
                    }`}
                    onClick={() => setGivingType(option.id)}
                  >
                    <h4>{option.title}</h4>
                    <p>{option.description}</p>
                    <small>{option.verse}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="payment-methods">
            <h3>Payment Methods</h3>
            <div className="methods-grid">
              {paymentMethods.map((method, index) => (
                <div key={index} className="method-card card">
                  <div className="method-icon">{method.icon}</div>
                  <h4>{method.method}</h4>
                  <pre className="method-details">{method.details}</pre>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="giving-impact">
          <h3 className="animate-fade-in-up">Your Impact</h3>
          <div className="impact-grid">
            <div className="impact-item animate-fade-in-up">
              <div className="impact-icon">🏠</div>
              <h4>Church Operations</h4>
              <p>
                Supporting daily operations, utilities, and maintenance of our
                church facilities.
              </p>
            </div>
            <div className="impact-item animate-fade-in-up">
              <div className="impact-icon">👨‍👩‍👧‍👦</div>
              <h4>Community Programs</h4>
              <p>
                Funding various programs that serve families and individuals in
                our community.
              </p>
            </div>
            <div className="impact-item animate-fade-in-up">
              <div className="impact-icon">🌍</div>
              <h4>Mission Work</h4>
              <p>
                Supporting local and international missions to spread the Gospel
                around the world.
              </p>
            </div>
            <div className="impact-item animate-fade-in-up">
              <div className="impact-icon">📚</div>
              <h4>Education & Training</h4>
              <p>
                Providing resources for Sunday school, youth programs, and
                leadership development.
              </p>
            </div>
          </div>
        </div>

        <div className="giving-testimony card animate-fade-in-up">
          <h3>A Heart of Gratitude</h3>
          <p>
            "We are deeply grateful for the generous hearts in our congregation.
            Your faithful giving allows us to minister effectively, care for
            those in need, and advance God's kingdom. Every contribution,
            regardless of size, makes a meaningful difference in the lives we
            touch."
          </p>
          <p className="signature">- Rev. Emmanuel Kokonyo</p>
        </div>
      </div>
    </section>
  );
};

export default Giving;
