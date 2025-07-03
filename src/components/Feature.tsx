import { coreValues } from "../assets/data"
import "../styles/CoreValues.css"


const CoreValues = () => {
    
      
  return (
    <section className="features-section">
      <div className="container">
        <div className="features-header">
          <h2 className="animate-fade-in-up">Why Choose Deliverane Church?</h2>
          <p className="animate-fade-in-up">
            Discover what makes our church family special and how you can grow in your faith journey with us.
          </p>
        </div>
        
        <div className="features-grid">
          {coreValues.map((value, index) => (
            <div key={index} className="feature-card animate-fade-in-up">
              <div className="feature-icon">
                <span>{value.icon}</span>
              </div>
              <h3 className="feature-title">{value.title}</h3>
              <p className="feature-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreValues