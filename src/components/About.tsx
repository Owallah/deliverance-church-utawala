import "../styles/About.css";
import Church from "../assets/images/church.png"

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="about-header">
              <h2 className="animate-fade-in-up">
                About Deliverance Church Utawala
              </h2>
              <p className="decorative-text animate-fade-in-up">
                Rooted in Faith
              </p>
            </div>

            <div className="mission-vision">
              <div className="mission card animate-fade-in-up">
                <h3>Our Mission</h3>
                <p>
                  <i>"To Equip Mankind For The Mission Of God."</i>
                </p>
              </div>

              <div className="vision card animate-fade-in-up">
                <h3>Our Vision</h3>
                <p>
                  <i>
                    "The Apostolic Church Of Choice transforming & empowering
                    mankind in Africa and beyond."
                  </i>
                </p>
              </div>
            </div>

            <div className="church-history card animate-fade-in-up">
              <h3>Our Story</h3>
              <p>
                Born on the 24th of November, 2009, Deliverance Church Utawala
                began as a small fellowship of believers under the leadership of
                Pastor William Ouna committed to seeking God's presence and
                sharing His love. Later on Reverend Emmanuel Kokonyo came in as
                the lead pastor. Over the years, we have grown into a vibrant
                community of faith, united by our shared commitment to worship,
                discipleship, and service.
              </p>
              <p>
                Our church is built on the foundation of God's Word, emphasizing
                prayer, biblical teaching, and authentic relationships. We
                believe in the power of community and the importance of
                supporting one another through life's joys and challenges.
              </p>
              <p>
                Today, we continue to grow in faith and in numbers, welcoming
                families, individuals, and visitors from all walks of life to
                experience God's transformative love in our midst.
              </p>
              <p>Thirteen years and counting, It has been God going with us.</p>
            </div>
          </div>

          <div className="about-image animate-slide-in-right">
            <img
              src={Church}
              alt="Deliverane Church Utawala Building"
            />
            <div className="image-overlay">
              <p>
                "For where two or three gather in my name, there am I with
                them." - Matthew 18:20
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
