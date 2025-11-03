import { motion } from "framer-motion";
import heroImg from "../assets/valentine-headshot.jpeg";
import { ArrowRight, Code, Database, Palette, Cloud, Sparkles } from "lucide-react";

export default function Home() {
  const skills = [
    { icon: <Code size={20} />, name: "Frontend", description: "React, TypeScript" },
    { icon: <Database size={20} />, name: "Backend", description: "Laravel, Node.js" },
    { icon: <Cloud size={20} />, name: "DevOps", description: "AWS, Docker, CI/CD" },
    { icon: <Palette size={20} />, name: "UI/UX", description: "Tailwind, Design" }
  ];

  return (
    <section className="section max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left flex-1"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card text-accent text-sm font-medium mb-4 border border-accent/20">
              <Sparkles size={16} />
              Full-Stack & DevOps Engineer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-tight mb-6"
          >
            <span className="gradient-text">Hello, I'm</span>
            <br />
            <span className="text-white">Valentine Maiyo</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl text-textLight max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8"
          >
            A passionate <span className="text-accent font-semibold">Software Engineer</span> specializing in full-stack development and DevOps. I build scalable web applications, robust APIs, and cloud infrastructure that deliver exceptional performance and user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-card-hover text-textLight hover:border-accent/40 transition-all duration-300 group cursor-pointer flex-1 min-w-[140px] max-w-[160px]"
              >
                <div className="text-accent group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-white">{skill.name}</div>
                  <div className="text-xs text-textLight opacity-0 group-hover:opacity-100 transition-opacity">
                    {skill.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.a
              href="./projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 rounded-xl bg-accent text-background font-semibold hover:bg-accent-dark transition-all duration-300 flex items-center justify-center gap-2 shadow-lg accent-glow"
            >
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="./contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-background transition-all duration-300 backdrop-blur-sm"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-6 mt-12 justify-center lg:justify-start"
          >
            {[
              { number: "4+", label: "Years Experience" },
              { number: "10+", label: "Projects" },
              { number: "100%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">{stat.number}</div>
                <div className="text-textLight text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex-1 flex justify-center relative"
        >
          <div className="relative">
            {/* Animated Background Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/10 rounded-3xl blur-xl -z-10"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full"
              animate={{
                y: [0, 10, 0],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />

            {/* Main Image */}
            <motion.img
              src={heroImg}
              alt="Valentine Maiyo - Software Engineer"
              initial={{ scale: 0.9, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.02, rotate: 0 }}
              className="w-72 sm:w-80 md:w-96 lg:w-[28rem] h-auto rounded-3xl object-cover border-4 border-card shadow-2xl relative z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}