import { useState } from "react";
import '../styles/Contacts.css'

const Contacts = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        requestCallback: false
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Contact form submitted:', formData);
        // Handle form submission here
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          requestCallback: false
        });
      };
    
      const contactInfo = [
        {
          icon: '📍',
          title: 'Address',
          details: 'Utawala Shopping Center\nNairobi, Kenya'
        },
        {
          icon: '📞',
          title: 'Phone',
          details: '+254 700 123 456\n+254 720 987 654'
        },
        {
          icon: '✉️',
          title: 'Email',
          details: 'info@deliverancechurch.org\npastor@deliverancechurch.org'
        },
        {
          icon: '🕒',
          title: 'Service Times',
          details: 'Sunday: 9:00 AM & 11:00 AM\nWednesday: 7:00 PM\nFriday: 6:00 PM (Youth)'
        }
      ];
    
      return (
        <section id="contact" className="contact-section">
          <div className="container">
            <div className="contact-header">
              <h2 className="animate-fade-in-up">Get In Touch</h2>
              <p className="decorative-text animate-fade-in-up">Connect With Us</p>
              <p className="animate-fade-in-up">
                We'd love to hear from you! Whether you have questions, prayer requests, or want to visit, 
                don't hesitate to reach out to us.
              </p>
            </div>
    
            <div className="contact-content">
              <div className="contact-info">
                <h3>Contact Information</h3>
                <div className="info-grid">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="info-card">
                      <div className="info-icon">{info.icon}</div>
                      <div className="info-details">
                        <h4>{info.title}</h4>
                        <p>{info.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
    
                <div className="social-links">
                  <h4>Follow Us</h4>
                  <div className="social-grid">
                    <a href="#" className="social-link">
                      <span>📘</span>
                      <span>Facebook</span>
                    </a>
                    <a href="#" className="social-link">
                      <span>📷</span>
                      <span>Instagram</span>
                    </a>
                    <a href="#" className="social-link">
                      <span>🐦</span>
                      <span>Twitter</span>
                    </a>
                    <a href="#" className="social-link">
                      <span>📺</span>
                      <span>YouTube</span>
                    </a>
                  </div>
                </div>
              </div>
    
              <form className="contact-form card" onSubmit={handleSubmit}>
                <h3>Send Us a Message</h3>
                
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      className="form-input"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      className="form-input"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
    
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-input"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+254 700 000 000"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Subject *</label>
                    <select
                      name="subject"
                      className="form-select"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="prayer">Prayer Request</option>
                      <option value="visit">Plan a Visit</option>
                      <option value="volunteer">Volunteer Opportunities</option>
                      <option value="counseling">Counseling</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
    
                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea
                    name="message"
                    className="form-textarea"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
    
                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="requestCallback"
                      checked={formData.requestCallback}
                      onChange={handleChange}
                    />
                    <span className="checkmark"></span>
                    Request a callback from our pastoral team
                  </label>
                </div>
    
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
    
            <div className="map-section">
              <h3 className="animate-fade-in-up">Find Us</h3>
              <div className="map-container animate-fade-in-up">
                <div className="map-placeholder">
                  <div className="map-content">
                    <div className="map-icon">📍</div>
                    <h4>Deliverane Church Utawala</h4>
                    <p>Utawala Shopping Center<br />Nairobi, Kenya</p>
                    <div className="map-actions">
                      <button className="btn btn-secondary">Get Directions</button>
                      <button className="btn btn-accent">View on Google Maps</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}

export default Contacts