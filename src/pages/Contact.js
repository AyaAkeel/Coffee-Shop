import React, { useState } from "react";

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePhoneChange = (value) => {
    setPhone(value);
    setIsSubmitted(false);

    if (value === "") {
      setPhoneError("");
      return;
    }

    const hasLetters = /[a-zA-Z]/.test(value);
    if (value.length !== 8 || hasLetters || isNaN(value)) {
      setPhoneError("Invalid Number! Must be exactly 8 digits.");
    } else {
      setPhoneError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fullName === "" || phone === "" || message === "") {
      alert("Please fill in all fields! ☕");
      return;
    }

    if (phoneError || phone === "") {
      alert("Submission failed, please check your phone number!");
      return;
    }

    setIsSubmitted(true);
    alert("Your Reservation is Complete 🎉☕");

    setFullName("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="contact-container">
      <h2>Contact Us / Book a Table</h2>
      
      <div className="contact-card">
        <form onSubmit={handleSubmit}>
          
          <div className="input-group">
            <input 
              type="text" 
              placeholder="👤 Full Name" 
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <input 
              type="text" 
              placeholder="📞 Phone Number (8 digits)" 
              value={phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
            />
            {phoneError && <p className="error-msg">❌ {phoneError}</p>}
            {!phoneError && phone.length === 8 && <p className="success-msg">✓ Valid Number</p>}
          </div>

          <div className="input-group">
            <textarea 
              rows="5" 
              placeholder=" Message "
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="book-btn">Book Table</button>

          {isSubmitted && <div className="reservation-success">🎉 Your Reservation is Complete! See you soon.</div>}
        </form>
      </div>
    </div>
  );
}