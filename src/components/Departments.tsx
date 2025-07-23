import { departments } from "../assets/data";
import "../styles/Departments.css";
const Departments = () => {
  return (
    <section id="departments" className="departments-section">
      <div className="container">
        <div className="departments-header">
          <h2 className="animate-fade-in-up">Church Departments</h2>
          <p className="decorative-text animate-fade-in-up">Serving Together</p>
          <p className="animate-fade-in-up">
            Discover the various ministries and departments where you can serve
            and grow in your faith journey with us.
          </p>
        </div>

        <div className="departments-grid">
          {departments.map((department, index) => (
            <div
              key={index}
              className="department-card card animate-fade-in-up"
            >
              <div className="department-header">
                <h3>{department.title}</h3>
                <div className="department-meta">
                  <span className="meeting-time">{department.meetingTime}</span>
                </div>
              </div>
              <p className="department-description">{department.description}</p>
              <div className="department-activities">
                <h4>Key Activities:</h4>
                <ul>
                  {department.activities.map((activity, idx) => (
                    <li key={idx}>{activity}</li>
                  ))}
                </ul>
              </div>
              {/* <button className="btn btn-secondary">Join Ministry</button> */}
            </div>
          ))}
        </div>

        <div className="ministry-cta card animate-fade-in-up">
          <div className="ministry-cta-content">
            <h3>Ready to Serve?</h3>
            <p>
              Every member has a role to play in God's kingdom. Find your place
              of service and make a difference in our community.
            </p>
            <div className="cta-actions">
              <button className="btn btn-primary">Get Involved</button>
              <button className="btn btn-secondary">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Departments;
