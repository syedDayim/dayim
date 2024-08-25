import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xldrweay");
  
  if (state.succeeded) {
      return <p>Thanks for your message!</p>;
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          type="text"
          name="name"
          className="form-control"
          placeholder="Name *"
          required
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
        />
      </div>

      <div className="form-group mt-3">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          className="form-control"
          placeholder="Email *"
          required
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>

      <div className="form-group mt-3">
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          type="text"
          name="subject"
          className="form-control"
          placeholder="Subject *"
          required
        />
        <ValidationError 
          prefix="Subject" 
          field="subject"
          errors={state.errors}
        />
      </div>

      <div className="form-group mt-3">
        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          className="form-control"
          placeholder="Your message *"
          rows="4"
          required
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>

      <button type="submit" className="btn btn-primary mt-3" disabled={state.submitting}>
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}

function App() {
  return (
    <div className="container">
      <h2>Contact Us</h2>
      <ContactForm />
    </div>
  );
}

export default App;
