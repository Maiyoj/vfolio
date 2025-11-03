import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "valentinemaiyo.dev@gmail.com",
      href: "mailto:valentinemaiyo.dev@gmail.com"
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+254 717 539 084",
      href: "tel:+254717539084"
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Nairobi, Kenya",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/valentine-maiyo/"
    },
    {
      icon: <Github size={20} />,
      label: "GitHub", 
      href: "https://github.com/Maiyoj"
    }
  ];

  return (
    <PageTransition>
      <section className="section max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-textLight max-w-2xl mx-auto">
            Let's discuss your project and bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info - Clean Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Methods */}
            <div className="card-glass p-6 lg:p-8">
              <h3 className="text-xl font-serif font-bold text-white mb-6">Contact Info</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-card-hover hover:border-accent/40 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-lg bg-card text-accent group-hover:bg-accent group-hover:text-background transition-all flex-shrink-0 mt-1">
                      {item.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-textLight text-sm mb-1">{item.label}</p>
                      <p className="text-white font-semibold group-hover:text-accent transition-colors break-words">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="card-glass p-6 lg:p-8"
            >
              <h3 className="text-lg font-bold text-white mb-4">Follow Me</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex-1 p-3 rounded-xl bg-background text-textLight hover:text-accent hover:bg-card-hover border border-card-hover transition-all duration-300 text-center group"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </div>
                      <span className="text-sm font-medium hidden sm:block">{social.label}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - Clean and Focused */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="card-glass p-6 lg:p-8 h-full">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">Send a Message</h3>
              
              <form className="space-y-6">
                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label className="block text-textLight text-sm mb-3 font-medium">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-card-hover text-white placeholder-textLight focus:outline-none focus:border-accent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-textLight text-sm mb-3 font-medium">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-card-hover text-white placeholder-textLight focus:outline-none focus:border-accent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-textLight text-sm mb-3 font-medium">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-card-hover text-white placeholder-textLight focus:outline-none focus:border-accent transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-textLight text-sm mb-3 font-medium">Message</label>
                  <textarea
                    rows="6"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-card-hover text-white placeholder-textLight focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 rounded-xl bg-accent text-background font-semibold hover:bg-accent-dark transition-all duration-300 shadow-lg accent-glow flex items-center justify-center gap-3 group"
                >
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Simple Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="card-glass p-8 max-w-2xl mx-auto border-2 border-accent/20 rounded-3xl">
            <h3 className="text-xl font-serif font-bold text-white mb-4">
              Ready to start your project?
            </h3>
            <p className="text-textLight mb-6">
              Let's work together to create something amazing.
            </p>
            <motion.a
              href="mailto:valentinemaiyo.dev@gmail.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-background transition-all duration-300"
            >
              <Mail size={18} />
              Email Me Directly
            </motion.a>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
}