import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { Star, FolderOpen, Rocket, ArrowRight } from "lucide-react";

// Import placeholder images from assets
const placeholderImages = {
  vendorPortal: "/assets/projects/vendor-portal.jpg",
  insurancePortal: "/assets/projects/insurance-portal.jpg", 
  leaveManagement: "/assets/projects/leave-management.jpg",
  etimsIntegration: "/assets/projects/etims-integration.jpg",
  hotelBooking: "/assets/projects/hotel-booking.jpg",
  procurement: "/assets/projects/procurement-system.jpg"
};

export default function ProjectsPage() {
  const projects = [
    {
      title: "Vendor Portal with Sage Integration",
      description: "Developed a comprehensive vendor portal that integrates with Sage ERP to streamline invoice processing, payment tracking, and purchase order management for 10,000+ users.",
      tags: ["Laravel", "React", "Sage API", "MySQL", "Redis"],
      links: {
        live: "#",
        github: "#"
      },
      image: placeholderImages.vendorPortal,
      featured: true,
      impact: "Automated invoicing and payment tracking for vendors"
    },
    {
      title: "Insurance Customer Portal",
      description: "Built a customer-facing portal for insurance policy management, enabling clients to view policies, check invoices, access statements, and submit claims with real-time status updates.",
      tags: ["Laravel", "React", "MySQL", "REST API", "JWT"],
      links: {
        live: "#",
        github: "#"
      },
      image: placeholderImages.insurancePortal,
      featured: true,
      impact: "Streamlined customer self-service for insurance operations"
    },
    {
      title: "Leave Management System",
      description: "Created an employee leave tracking application integrated with Norming HR system, featuring automated notifications, approval workflows, and reporting dashboards for 8,000+ employees.",
      tags: ["Laravel", "Vue.js", "MySQL", "HR API"],
      links: {
        live: "#",
        github: "#"
      },
      image: placeholderImages.leaveManagement,
      impact: "Automated leave management across multiple organizations"
    },
    {
      title: "ETIMS Financial Integration",
      description: "Engineered integration tools to migrate financial systems to ETIMS compliance, handling data validation, tax reporting, and seamless data transfer between legacy and new systems.",
      tags: ["Laravel", "Vue.js", "MySQL", "API Integration"],
      links: {
        live: "#",
        github: "#"
      },
      image: placeholderImages.etimsIntegration,
      impact: "Ensured tax compliance for government reporting requirements"
    },
    {
      title: "Hotel Booking Platform",
      description: "Developed a full-stack booking platform for hotels with real-time availability, payment processing, and admin management system for property owners.",
      tags: ["Django", "React", "PostgreSQL", "Payment Gateway"],
      links: {
        live: "#",
        github: "#"
      },
      image: placeholderImages.hotelBooking,
      impact: "Enabled online booking and payment processing for hotels"
    },
    {
      title: "Procurement Management System",
      description: "Built an internal procurement portal for managing vendor relationships, purchase orders, and inventory tracking with automated workflow approvals.",
      tags: ["Laravel", "JavaScript", "MySQL", "Redis"],
      links: {
        live: "#",
        github: "#"
      },
      image: placeholderImages.procurement,
      impact: "Streamlined internal procurement processes and approvals"
    }
  ];

  return (
    <section className="section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Professional Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6"
        >
          <Rocket className="w-10 h-10 text-accent" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
        >
          My <span className="gradient-text">Projects</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl text-textLight max-w-3xl mx-auto leading-relaxed"
        >
          Real-world applications I've built to solve business challenges, from enterprise systems 
          to customer-facing platforms. Each project demonstrates practical problem-solving and technical expertise.
        </motion.p>
      </motion.div>

      {/* Featured Projects */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-16"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="p-3 rounded-xl bg-accent/20 border border-accent/30">
            <Star className="w-6 h-6 text-accent" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-white">
            Key Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.filter(p => p.featured).map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project}
              index={index}
              featured={true}
            />
          ))}
        </div>
      </motion.div>

      {/* All Projects */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="p-3 rounded-xl bg-card border border-card-hover">
            <FolderOpen className="w-6 h-6 text-accent" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-white">
            All Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project}
              index={index}
            />
          ))}
        </div>
      </motion.div>

      {/* Professional Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="text-center mt-20"
      >
        <div className="card-glass p-12 max-w-2xl mx-auto border-2 border-accent/20 rounded-3xl">
          <h3 className="text-2xl font-serif font-bold text-white mb-4">
            Have a project in mind?
          </h3>
          <p className="text-textLight mb-8">
            Let's discuss how we can build your next application with the same level of quality and attention to detail.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-background font-semibold hover:bg-accent-dark transition-all duration-300 shadow-lg accent-glow"
          >
            Start a Conversation
            <ArrowRight size={20} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}