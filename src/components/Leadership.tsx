import '../styles/Leadership.css'
import { leaders } from '../assets/data'
const Leadership = () => {
   
  return (
    <section id="leadership" className="leadership-section">
      <div className="container">
        <div className="leadership-header">
          <h2 className="animate-fade-in-up">Our Leadership Team</h2>
          <p className="animate-fade-in-up">
            Meet the dedicated leaders who guide our church with wisdom, love, and commitment to God's calling.
          </p>
        </div>

        <div className="leadership-grid">
          {leaders.map((leader, index) => (
            <div key={index} className="leader-card animate-fade-in-up">
              <div className="leader-image">
                <img src={leader.image} alt={leader.name} />
                <div className="leader-overlay">
                  <div className="specialties">
                    {leader.specialties.map((specialty, idx) => (
                      <span key={idx} className="specialty-tag">{specialty}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="leader-info">
                <h3>{leader.name}</h3>
                <h4>{leader.title}</h4>
                <p>{leader.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="leadership-message card animate-fade-in-up">
          <h3>Message from Our Leadership</h3>
          <p>
            "We are honored to serve this wonderful congregation and community. Our leadership team is committed 
            to shepherding with integrity, teaching God's Word with clarity, and leading by example in love and service. 
            We believe that strong, Spirit-led leadership creates an environment where every person can grow in their 
            faith and discover their God-given purpose."
          </p>
          <p className="signature">- The Leadership Team, Deliverance Church Utawala</p>
        </div>
      </div>
    </section>
  )
}

export default Leadership