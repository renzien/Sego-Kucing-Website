import { motion } from 'framer-motion';
import catLogo from './assets/cat-logo.png';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <section className="hero">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hero-content"
        >
          <img src={catLogo} alt="Sego Kucing Studio Logo" className="logo" />
          <h1 className="pixel-text title">SEGO KUCING STUDIO</h1>

          <motion.p
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="pixel-text scroll-prompt"
          >
            Scroll to See More
          </motion.p>
        </motion.div>
      </section>

      <section className="tujuan">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-content"
        >
          <h2 className="pixel-text text-center">Tujuan</h2>
          <p className="pixel-text-small text-center mt-30">
            Membuat sebuah game yang dirancang khusus untuk kepuasan player dan aiming menjadi Game of The Year.
          </p>
        </motion.div>
      </section>

      <section className="team">
        <h2 className="pixel-text text-center">Team</h2>
        <div className="team-grid">
          {[1, 2, 3, 4].map((member) => (
            <motion.div
              key={member}
              whileHover={{ scale: 1.1 }}
              className="team-card"
            >
              <div className="placeholder-photo"></div>
              <p className="pixel-text-small">Member {member}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="contact">
        <h2 className="pixel-text text-center">Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Name" className="pixel-input" />
          <input type="text" placeholder="Email" className="pixel-input" />
          <textarea placeholder="Message" className="pixel-input" rows="5"></textarea>
          <button type="submit" className="pixel-btn"></button>
        </form>
      </section>

      <footer className="footer">
        <p className="pixel-text-small">© 2026 Sego Kucing Studio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;