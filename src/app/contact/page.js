// components/Contact.tsx
import "@/app/contact/contact.css"; // Make sure to create this CSS file

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-form">
          <h1>Contact <span>us</span></h1>
          <form>
            <div className="form-group">
              <input type="text" id="name" name="name" placeholder="Enter Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" placeholder=" Enter Your Email" required />
            </div>
            <div className="form-group">
              <textarea id="message" name="message" placeholder=" Enter Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
