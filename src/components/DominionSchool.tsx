import { achievements, facilities } from '../assets/data'
import '../styles/DominionSchool.css'
const DominionSchool = () => {
  
  return (
    <section id="dominion-center" className="dominion-center-section">
      <div className="container">
        <div className="dominion-header">
          <h2 className="animate-fade-in-up">Dominion Center</h2>
          <p className="decorative-text animate-fade-in-up">Kids School</p>
          <p className="animate-fade-in-up">
            Providing quality Christian education where children learn, grow, and discover their God-given potential in a nurturing environment.
          </p>
        </div>

        <div className="programs-grid">
          {facilities.map((program, index) => (
            <div key={index} className="program-card card animate-fade-in-up">
              <div className="program-header">
                <h3>{program.title}</h3>
                <span className="age-group">{program.ageGroup}</span>
              </div>
              <p className="program-description">{program.description}</p>
              <div className="program-features">
                <h4>What We Offer:</h4>
                <ul>
                  {program.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          ))}
        </div>

        <div className="achievements-section">
          <h3 className="animate-fade-in-up">Our Achievements</h3>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-item animate-fade-in-up">
                <div className="achievement-number">{achievement.number}</div>
                <div className="achievement-label">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="admission-cta card animate-fade-in-up">
          <div className="cta-content">
            <h3>Ready to Enroll Your Child?</h3>
            <p>Join the Dominion Center family and give your child a foundation built on Christian values and academic excellence.</p>
            <div className="cta-actions">
              <button className="btn btn-primary">Apply Now</button>
              <button className="btn btn-secondary">Schedule Visit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DominionSchool