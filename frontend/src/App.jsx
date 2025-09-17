// frontend/src/App.jsx
import { useState } from 'react';
import './App.css';
import '@templates/v0/app/globals.css'; // Use the @templates alias to import template CSS

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(''); // Reset error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill all fields.');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Network error');
      const result = await response.json();
      if (result.success) {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else throw new Error(result.error);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="App">
      {/* Header Section */}
      <header className="header bg-gradient-to-br from-[#1a202c] to-[#2d3445] py-8">
        <div className="container mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-bold text-white leading-tight">
            FlowOps – Ship Production Apps from Plain English
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl">
            Turn plain English descriptions into production-ready apps (Git repos, Docker images, Terraform plans) in under 30 minutes. SOC-2, GDPR, HIPAA compliant. Built for enterprise scale.
          </p>
        </div>
      </header>

      {/* Contact Form Section */}
      <section className="contact-section bg-[#1a202c] py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold text-white mb-12 text-center">
            Contact Us
          </h2>
          <form 
            onSubmit={handleSubmit} 
            className="max-w-2xl mx-auto p-8 bg-[rgba(255,255,255,0.1)] rounded-lg"
          >
            {error && (
              <p className="text-center text-red-500 text-sm mb-4">
                {error}
              </p>
            )}
            {formSubmitted && (
              <p className="text-center text-green-600 text-sm mb-4">
                Thank you! We’ll reach out soon.
              </p>
            )}

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-4 border rounded-lg border-gray-700 bg-black/5 mb-6 focus:outline-none focus:border-blue-600"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-4 border rounded-lg border-gray-700 bg-black/5 mb-6 focus:outline-none focus:border-blue-600"
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="8"
              className="w-full p-4 border rounded-lg border-gray-700 bg-black/5 mb-8 focus:outline-none focus:border-blue-600"
              required
            />

            <button
              type="submit"
              className="w-full p-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              {formSubmitted ? 'Message Sent' : 'Submit'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;