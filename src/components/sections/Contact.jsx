import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Copy,
  Check
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import SectionHeading from '../common/SectionHeading';
import { personalInfo, contactDetails } from '../../data/data';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please include a message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      if (onShowToast) {
        onShowToast('error', 'Validation Error', 'Please check the highlighted fields above.');
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const endpoint =
        import.meta.env.VITE_FORMSPREE_ENDPOINT ||
        contactDetails.formspreeEndpoint ||
        'https://formspree.io/f/mwllwaww';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Inquiry',
          message: formData.message
        })
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || (result && result.ok === false)) {
        const errorMsg =
          result?.errors?.map((err) => err.message).join(', ') ||
          'Form submission failed. Please try again.';
        throw new Error(errorMsg);
      }

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b']
      });

      if (onShowToast) {
        onShowToast(
          'success',
          'Message Dispatched!',
          `Thank you ${formData.name}! Your message has been sent successfully. I'll get back to you within 12 hours.`
        );
      }

      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (err) {
      console.error('Contact form submission error:', err);
      if (onShowToast) {
        onShowToast(
          'error',
          'Transmission Error',
          err.message || 'Failed to send message. Please email me directly at unicorn.juz4u@gmail.com'
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    if (onShowToast) {
      onShowToast('info', 'Copied to Clipboard', personalInfo.email);
    }
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative bg-slate-50/50 dark:bg-dark-surface/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Get In Touch"
          title="Let's Build Something Extraordinary"
          subtitle="Have a full-time role, a freelance challenge, or an architectural idea you'd like to discuss? Send a message and let's talk."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Info & Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl glass-card border border-slate-200/90 dark:border-dark-border">
              <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-2">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed mb-6 font-normal">
                Feel free to reach out via form, direct email, or phone. I'm currently open for full-stack engineering roles and high-impact SaaS contracts.
              </p>

              {/* Direct Info List */}
              <div className="space-y-4">
                {/* Email Item */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-100 dark:bg-dark-surface border-2 border-slate-300 dark:border-dark-border">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                        Email Address
                      </div>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate block hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg text-slate-800 dark:text-slate-200 bg-white dark:bg-dark-card border border-slate-300 dark:border-dark-border hover:bg-slate-50 dark:hover:bg-dark-hover hover:text-violet-600 transition-colors ml-2 shrink-0 shadow-2xs"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center p-3.5 rounded-xl bg-slate-100 dark:bg-dark-surface border-2 border-slate-300 dark:border-dark-border">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                        Phone / WhatsApp
                      </div>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center p-3.5 rounded-xl bg-slate-100 dark:bg-dark-surface border-2 border-slate-300 dark:border-dark-border">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                        Location
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                        {contactDetails.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Time Badge */}
                <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-900 dark:text-emerald-300 text-xs font-bold">
                  <Clock className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>{contactDetails.responseTime}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-dark-border">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider block mb-3">
                  Find Me Online
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-900 dark:text-slate-200 bg-white dark:bg-dark-surface border-2 border-slate-300 dark:border-dark-border hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-500/50 transition-all shadow-xs"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-900 dark:text-slate-200 bg-white dark:bg-dark-surface border-2 border-slate-300 dark:border-dark-border hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-500/50 transition-all shadow-xs"
                  >
                    <FaLinkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl glass-card border border-slate-200/90 dark:border-dark-border shadow-2xl relative">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 mb-8 font-normal">
                Fill in the details below and I'll respond as soon as possible.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-2"
                    >
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-white dark:bg-dark-surface border-2 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                        errors.name
                          ? 'border-rose-500 focus:ring-rose-500/30'
                          : 'border-slate-300 dark:border-dark-border focus:border-violet-500 focus:ring-violet-500/20'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-rose-500 font-bold">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-2"
                    >
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-white dark:bg-dark-surface border-2 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                        errors.email
                          ? 'border-rose-500 focus:ring-rose-500/30'
                          : 'border-slate-300 dark:border-dark-border focus:border-violet-500 focus:ring-violet-500/20'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-rose-500 font-bold">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-2"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity / Hello"
                    className="w-full px-4 py-3 rounded-xl text-sm bg-white dark:bg-dark-surface border-2 border-slate-300 dark:border-dark-border text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-2"
                  >
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your product requirements, team, or project timeline..."
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-white dark:bg-dark-surface border-2 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 resize-none ${
                      errors.message
                        ? 'border-rose-500 focus:ring-rose-500/30'
                        : 'border-slate-300 dark:border-dark-border focus:border-violet-500 focus:ring-violet-500/20'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-rose-500 font-bold">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button - High Contrast Visible Text */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 transition-all shadow-lg shadow-violet-600/30 hover:shadow-violet-600/50 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed group focus:outline-none focus:ring-2 focus:ring-violet-500"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span className="text-white font-bold">Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      <span className="text-white font-bold">Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
