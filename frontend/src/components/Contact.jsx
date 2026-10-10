
import { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";
import api from "../api/axios";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", text: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", text: "" });

    if (Object.values(form).some((value) => !value.trim())) {
      setStatus({
        type: "error",
        text: "Please fill in all fields.",
      });
      return;
    }

    setSending(true);

    try {
      await api.post("/messages", form);

      setStatus({
        type: "success",
        text: "Message sent successfully! I'll get back to you soon.",
      });

      setForm({ ...initialForm });
    } catch (err) {
      setStatus({
        type: "error",
        text:
          err.response?.data?.message ||
          "Something went wrong. Please try again later.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-container">
      {/* Section heading */}
      <div className="mb-10 px-2 text-center sm:mb-14">
        <span className="text-xs font-bold tracking-widest text-brand-primary">
          CONTACT
        </span>

        <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl md:text-4xl">
          Let's Work{" "}
          <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
            Together
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sm text-brand-muted sm:text-base">
          Have a project idea, opportunity or just want to connect?
          Feel free to send me a message.
        </p>
      </div>

      <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
        {/* Contact information */}
        <div className="glass-card cursor-default">
          <h3 className="mb-2 text-xl font-semibold">Get In Touch</h3>

          <p className="mb-6 text-sm text-brand-muted">
            I'm always open to discussing new opportunities, interesting
            projects and collaborations.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary"
                aria-hidden="true"
              >
                <FaEnvelope />
              </div>

              <div className="min-w-0">
                <span className="block text-xs tracking-wide text-brand-muted">
                  EMAIL
                </span>

                <a
                  href="mailto:amitmaurya49135@gmail.com"
                  className="break-all text-brand-text transition-colors hover:text-brand-primary"
                >
                  amitmaurya49135@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary"
                aria-hidden="true"
              >
                <FaMapMarkerAlt />
              </div>

              <div>
                <span className="block text-xs tracking-wide text-brand-muted">
                  LOCATION
                </span>
                <p className="text-brand-text">
                  Varanasi, Uttar Pradesh, India
                </p>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="mt-8 border-t border-brand-border pt-6">
            <h4 className="mb-3 text-sm font-semibold text-brand-muted">
              Connect with me
            </h4>

            <div className="flex gap-3">
              <a
                href="https://github.com/amitmaurya7084"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-border transition-colors hover:border-brand-primary hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              >
                <FaGithub aria-hidden="true" />
              </a>

              <a
                href="https://www.linkedin.com/in/amit-maurya-96560829b"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-border transition-colors hover:border-brand-primary hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              >
                <FaLinkedin aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          aria-labelledby="contact-form-title"
          className="glass-card cursor-default space-y-4 hover:translate-y-0 hover:shadow-none"
        >
          <h3 id="contact-form-title" className="mb-2 text-xl font-semibold">
            Send Me a Message
          </h3>

          {/* Name */}
          <div>
            <label
              htmlFor="contact-name"
              className="mb-1.5 block text-xs text-brand-muted"
            >
              Your Name
            </label>

            <input
              id="contact-name"
              type="text"
              name="name"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="input-field"
              required
              maxLength={100}
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="contact-email"
              className="mb-1.5 block text-xs text-brand-muted"
            >
              Email Address
            </label>

            <input
              id="contact-email"
              type="email"
              name="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="input-field"
              required
              maxLength={254}
            />
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="contact-subject"
              className="mb-1.5 block text-xs text-brand-muted"
            >
              Subject
            </label>

            <input
              id="contact-subject"
              type="text"
              name="subject"
              autoComplete="off"
              value={form.subject}
              onChange={handleChange}
              placeholder="What is this about?"
              className="input-field"
              required
              maxLength={150}
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="contact-message"
              className="mb-1.5 block text-xs text-brand-muted"
            >
              Message
            </label>

            <textarea
              id="contact-message"
              name="message"
              autoComplete="off"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows={4}
              className="input-field resize-none"
              required
              maxLength={5000}
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={sending}
            className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
          >
            <FaPaperPlane aria-hidden="true" />
            {sending ? "Sending..." : "Send Message"}
          </button>

          {/* Accessible status message */}
          {status.text && (
            <p
              role="status"
              aria-live="polite"
              className={`text-center text-sm ${
                status.type === "success"
                  ? "text-emerald-400"
                  : "text-red-400"
              }`}
            >
              {status.text}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
