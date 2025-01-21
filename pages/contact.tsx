import { FloatingIcons, Page } from "@/components";
import { AnimatedComponent } from "react-style-text";
import { useState, ChangeEvent, useEffect } from "react";
import { Send, User, Mail, MessageSquare } from "lucide-react";
import { nanoid } from "nanoid";
import Head from "next/head";

interface FormData {
  name: string;
  email: string;
  message: string;
  honeypot: string;
  timestamp: string;
  token: string;
}

interface ContactPageSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  contactPoint: {
    "@type": string;
    contactType: string;
    email: string;
    description: string;
  };
  mainEntity: {
    "@type": string;
    name: string;
    acceptedAnswer: {
      "@type": string;
      text: string;
    };
  }[];
}

export default function Contact() {
  // Your existing state management code...
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    honeypot: "",
    timestamp: "",
    token: "",
  });

  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Create rich meta description
  const metaDescription =
    "Contact Andrew Edwards, Software Engineer at Tifco Industries. Whether you're interested in software development, consulting, or collaboration opportunities, I'm always open to discussing new projects and ideas. Get in touch for professional inquiries, technical consultations, or to discuss potential partnerships.";

  // Create structured data for the contact page
  const contactSchema: ContactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Andrew Edwards - Software Engineer",
    description: metaDescription,
    url: "https://edwards.codes/contact",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "professional inquiries",
      email: "contact@edwards.codes", // Update with your actual contact email
      description:
        "Contact form for professional inquiries and collaboration opportunities",
    },
    mainEntity: [
      {
        "@type": "Question",
        name: "What types of inquiries are welcome?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I welcome inquiries about software development projects, technical consulting, collaboration opportunities, and professional networking.",
        },
      },
    ],
  };

  // Generate CSRF token on component mount
  useEffect(() => {
    const token = nanoid();
    setFormData((prev) => ({ ...prev, token }));
    sessionStorage.setItem("formToken", token);
  }, []);

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError("");
    setSuccess(false);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required");
      setSending(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address");
      setSending(false);
      return;
    }

    // Anti-spam checks
    if (formData.honeypot) {
      console.log("Bot detected");
      setError("An error occurred");
      setSending(false);
      return;
    }

    // Add submission timestamp right before sending
    const submissionData = {
      ...formData,
      timestamp: new Date().toISOString(),
      token: formData.token, // Ensure token is included
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": formData.token,
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Submission failed");
      }

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        message: "",
        honeypot: "",
        timestamp: "",
        token: formData.token,
      });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to send message. Please try again later."
      );
    } finally {
      setSending(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
        />
        <link rel="canonical" href="https://edwards.codes/contact" />
      </Head>
      <Page
        currentPage="Contact"
        meta={{
          title: "Contact Andrew Edwards | Software Development & Consulting",
          desc: metaDescription,
          author: "Andrew Edwards",
          keywords: [
            "contact Andrew Edwards",
            "software engineer contact",
            "hire software developer",
            "software development consulting",
            "React developer contact",
            "TypeScript developer",
            "professional software engineer",
            "technical consulting",
            "software development inquiries",
            "collaboration opportunities",
          ],
          type: "contact",
          image: "/images/contact-banner.jpg", // Create this image
          publishedAt: new Date().toISOString(),
          modifiedAt: new Date().toISOString(),
        }}
        className="min-h-screen relative overflow-hidden"
      >
        <FloatingIcons />
        <div className="relative z-10 w-full min-h-[75vh] flex items-center justify-center px-4">
          <AnimatedComponent
            animationname="slideInFromBottom"
            duration="1s"
            delay="0s"
            iteration={1}
          >
            <div className="w-full max-w-2xl">
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="font-header text-4xl md:text-5xl text-black dark:text-white relative inline-block">
                  Get in Touch
                  <div className="absolute -inset-x-8 h-[2px] -bottom-2 bg-gradient-to-r from-transparent via-lime-500 to-transparent" />
                  <div className="absolute -right-4 top-0 h-16 w-[2px] bg-gradient-to-b from-lime-500/20 to-transparent" />
                </h1>
                <p className="mt-4 font-subheader text-gray-600 dark:text-gray-300">
                  <span className="bg-gradient-to-r from-lime-500 to-emerald-500 bg-clip-text text-transparent">
                    Let's create something amazing together
                  </span>
                </p>
              </div>

              {/* Contact Form */}
              <form
                onSubmit={handleSubmit}
                className="space-y-6 backdrop-blur-sm bg-white/5 p-8 rounded-xl border border-lime-500/20"
              >
                {/* Honeypot field - hidden from real users */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  aria-hidden="true"
                />

                {/* Name Input */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-lime-500/5 rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="block text-sm font-header text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-lime-500" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        maxLength={100}
                        className="w-full pl-12 pr-4 py-3 bg-transparent border border-lime-500/20 rounded-lg font-body 
                        text-gray-900 dark:text-white placeholder-gray-400
                        focus:border-lime-500 focus:ring-1 focus:ring-lime-500
                        transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                </div>

                {/* Email Input */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-lime-500/5 rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="block text-sm font-header text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-lime-500" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        maxLength={100}
                        className="w-full pl-12 pr-4 py-3 bg-transparent border border-lime-500/20 rounded-lg font-body 
                        text-gray-900 dark:text-white placeholder-gray-400
                        focus:border-lime-500 focus:ring-1 focus:ring-lime-500
                        transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-lime-500/5 rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="block text-sm font-header text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-lime-500" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        maxLength={1000}
                        className="w-full pl-12 pr-4 py-3 bg-transparent border border-lime-500/20 rounded-lg font-body 
                        text-gray-900 dark:text-white placeholder-gray-400
                        focus:border-lime-500 focus:ring-1 focus:ring-lime-500
                        transition-all duration-300 resize-none"
                        placeholder="Your message..."
                      />
                    </div>
                  </div>
                </div>

                {/* Error and Success Messages */}
                {error && (
                  <div className="text-red-500 text-sm font-body text-center">
                    {error}
                  </div>
                )}
                {success && (
                  <div className="text-emerald-500 text-sm font-body text-center">
                    Message sent successfully!
                  </div>
                )}

                {/* Submit Button */}
                <div className="relative">
                  <button
                    type="submit"
                    disabled={sending}
                    className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-lime-500/90 to-emerald-500/90 
                    px-4 py-3 text-white font-header
                    hover:from-lime-500 hover:to-emerald-500
                    disabled:opacity-50 disabled:cursor-not-allowed
                    transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative flex items-center justify-center gap-2">
                      {sending ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </AnimatedComponent>
        </div>
      </Page>
    </>
  );
}
