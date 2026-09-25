
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setSuccess("");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSuccess(
      "Thank you! Your message has been submitted successfully."
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setErrors({});
  };

  return (
    <div className="contact-page">
      {/* Header */}

      <div className="page-header contact-header">
        <div>
          <span className="page-label">GET IN TOUCH</span>

          <h1>Contact Us</h1>

          <p>
            Have a question about CricketHub? We would
            love to hear from you.
          </p>
        </div>
      </div>

      <div className="contact-container">
        {/* Contact Details */}

        <div className="contact-details">
          <h2>Contact Details</h2>

          <p className="contact-description">
            Reach out to the CricketHub team for tournament
            information, technical support, or general
            enquiries.
          </p>

          <div className="contact-info-card">
            <div className="contact-icon">📧</div>

            <div>
              <h3>Email</h3>
              <p>support@crickethub.com</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon">📞</div>

            <div>
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon">📍</div>

            <div>
              <h3>Address</h3>
              <p>
                CricketHub Sports Center,
                <br />
                Chennai, Tamil Nadu, India
              </p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon">🕐</div>

            <div>
              <h3>Working Hours</h3>
              <p>
                Monday - Saturday
                <br />
                9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}

        <div className="contact-form-card">
          <h2>Send Us a Message</h2>

          {success && (
            <div className="success-message">
              ✅ {success}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">
                Full Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />

              {errors.name && (
                <small className="error-text">
                  {errors.name}
                </small>
              )}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />

                {errors.email && (
                  <small className="error-text">
                    {errors.email}
                  </small>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="text"
                  name="phone"
                  placeholder="10-digit phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />

                {errors.phone && (
                  <small className="error-text">
                    {errors.phone}
                  </small>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">
                Subject
              </label>

              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
              />

              {errors.subject && (
                <small className="error-text">
                  {errors.subject}
                </small>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
              />

              {errors.message && (
                <small className="error-text">
                  {errors.message}
                </small>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary contact-submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

