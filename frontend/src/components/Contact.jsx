import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import api from "../api/axios";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", text: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", text: "" });

    if (Object.values(form).some((v) => !v.trim())) {
      setStatus({ type: "error", text: "Please fill in all fields." });
      return;
    }

    setSending(true);
    try {
      await api.post("/messages", form);
      setStatus({ type: "success", text: "Message sent successfully! I'll get back to you soon." });
      setForm(initialForm);
    } catch (err) {
      setStatus({
        type: "error",
        text: err.response?.data?.message || "Something went wrong. Please try again later.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-container">
      <div className="text-center mb-10 sm:mb-14 px-2">
        <span className="text-brand-primary text-xs font-bold tracking-widest">CONTACT</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-2">
          Let's Work <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">Together</span>
        </h2>
        <p className="text-brand-muted mt-4 max-w-lg mx-auto text-sm sm:text-base">
          Have a project idea, opportunity or just want to connect? Feel free to send me a message.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        <div className="glass-card cursor-default">
          <h3 className="text-xl font-semibold mb-2">Get In Touch</h3>
          <p className="text-brand-muted text-sm mb-6">
            I'm always open to discussing new opportunities, interesting projects and collaborations.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                <FaEnvelope />
              </div>
              <div>
                <span className="block text-xs text-brand-muted tracking-wide">EMAIL</span>
                <a href="mailto:amitmaurya49135@gmail.com" className="text-brand-text hover:text-brand-primary transition-colors break-all">
                  amitmaurya49135@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <span className="block text-xs text-brand-muted tracking-wide">LOCATION</span>
                <p className="text-brand-text">Varanasi, Uttar Pradesh, India</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-brand-border">
            <h4 className="text-sm font-semibold mb-3 text-brand-muted">Connect with me</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/amitmaurya7084"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center hover:border-brand-primary hover:text-brand-primary transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/amit-maurya-96560829b"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center hover:border-brand-primary hover:text-brand-primary transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass-card cursor-default hover:translate-y-0 hover:shadow-none space-y-4">
          <h3 className="text-xl font-semibold mb-2">Send Me a Message</h3>

          <div>
            <label className="block text-xs text-brand-muted mb-1.5">Your Name</label>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" className="input-field" />
          </div>
          <div>
            <label className="block text-xs text-brand-muted mb-1.5">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-xs text-brand-muted mb-1.5">Subject</label>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="What is this about?"
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-xs text-brand-muted mb-1.5">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows={4}
              className="input-field resize-none"
            />
          </div>

          <button type="submit" disabled={sending} className="btn-primary w-full justify-center disabled:opacity-60">
            <FaPaperPlane /> {sending ? "Sending..." : "Send Message"}
          </button>

          {status.text && (
            <p className={`text-sm text-center ${status.type === "success" ? "text-emerald-400" : "text-red-400"}`}>
              {status.text}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
