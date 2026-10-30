import React, { useState } from 'react';
import { CheckCircle2, Mail, MessageSquare, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Feedback & Feature Suggestions');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please provide a valid email address.');
      return;
    }
    if (!message.trim() || message.length < 10) {
      setError('Please provide a message with at least 10 characters.');
      return;
    }

    setError(null);
    setSubmitted(true);
  };

  return (
    <section id="about-contact" className="py-16 scroll-mt-20 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        <div className="glass-panel-elevated rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" 
          />

          <div className="max-w-2xl mx-auto text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-3">
              <Mail className="w-3.5 h-3.5" />
              <span>Direct Inquiries & Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
              Get in Touch with Our Team
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Have questions regarding our algorithms, feature ideas, or nutrition citations? 
              Reach out directly or email <span className="text-emerald-400 font-mono">contact@theproteincalculator.com</span>.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Message Dispatched Successfully</h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you for your message, <span className="text-white font-medium">{name}</span>. Founder Vishal Pradhan and our research team review inquiries and respond within 2–3 business days.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setEmail('');
                  setMessage('');
                }}
                className="mt-4 px-4 py-2 rounded-xl glass-panel-subtle text-xs text-slate-300 hover:text-white cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
              {error && (
                <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/30 text-xs text-rose-300">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Morgan"
                    className="w-full px-4 py-2.5 rounded-xl glass-input text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@example.com"
                    className="w-full px-4 py-2.5 rounded-xl glass-input text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Subject Category
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl glass-input text-xs appearance-none cursor-pointer"
                >
                  <option value="Feedback & Feature Suggestions" className="bg-[#0b1710] text-white">
                    Feedback & Feature Suggestions
                  </option>
                  <option value="Calculator Calculation Inquiry" className="bg-[#0b1710] text-white">
                    Question Regarding Calculator Logic
                  </option>
                  <option value="Research & Citation Correction" className="bg-[#0b1710] text-white">
                    Research & Citation Correction
                  </option>
                  <option value="Partnership & Inquiries" className="bg-[#0b1710] text-white">
                    General & Business Inquiries
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share your thoughts, suggestions, or questions with us..."
                  className="w-full px-4 py-2.5 rounded-xl glass-input text-xs resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-5 rounded-xl glass-button-primary font-semibold text-xs text-white flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};
