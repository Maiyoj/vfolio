import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { Download, FileText, Zap, ArrowRight, Code, Server, Cloud, Database } from "lucide-react";

// Move static data outside component to prevent re-renders
const SKILL_CATEGORIES = [
  {
    title: "Frontend Development",
    icon: <Code className="w-6 h-6" />,
    skills: [
      { name: "React", emoji: "⚛️", proficiency: 95 },
      { name: "TypeScript", emoji: "🔷", proficiency: 90 },
      { name: "Next.js", emoji: "▲", proficiency: 88 },
      { name: "Tailwind CSS", emoji: "🎨", proficiency: 92 },
      { name: "Vue.js", emoji: "💚", proficiency: 85 },
      { name: "JavaScript", emoji: "🟨", proficiency: 95 },
      { name: "Redux", emoji: "📦", proficiency: 88 },
      { name: "HTML/CSS", emoji: "🌐", proficiency: 90 }
    ]
  },
  {
    title: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    skills: [
      { name: "Node.js", emoji: "🟢", proficiency: 92 },
      { name: "Laravel", emoji: "🐘", proficiency: 88 },
      { name: "Nest.js", emoji: "🦁", proficiency: 85 },
      { name: "Python", emoji: "🐍", proficiency: 80 },
      { name: "GraphQL", emoji: "📊", proficiency: 87 },
      { name: "REST APIs", emoji: "🔗", proficiency: 94 },
      { name: "Express.js", emoji: "🚂", proficiency: 90 },
      { name: "PHP", emoji: "🐘", proficiency: 86 }
    ]
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: "PostgreSQL", emoji: "🐘", proficiency: 89 },
      { name: "MongoDB", emoji: "🍃", proficiency: 85 },
      { name: "Redis", emoji: "🔴", proficiency: 82 },
      { name: "MySQL", emoji: "🐬", proficiency: 88 },
      { name: "Firebase", emoji: "🔥", proficiency: 83 },
      { name: "Prisma", emoji: "⚡", proficiency: 86 },
      { name: "SQLite", emoji: "💡", proficiency: 80 },
      { name: "Sequelize", emoji: "🎯", proficiency: 84 }
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud className="w-6 h-6" />,
    skills: [
      { name: "AWS", emoji: "☁️", proficiency: 85 },
      { name: "Docker", emoji: "🐳", proficiency: 87 },
      { name: "Git", emoji: "📚", proficiency: 95 },
      { name: "CI/CD", emoji: "🔄", proficiency: 83 },
      { name: "Kubernetes", emoji: "⚓", proficiency: 78 },
      { name: "Linux", emoji: "🐧", proficiency: 88 },
      { name: "Terraform", emoji: "🏗️", proficiency: 75 },
      { name: "Nginx", emoji: "⚡", proficiency: 82 }
    ]
  }
];

const PHILOSOPHIES = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Performance",
    description: "Optimizing for speed and efficiency in every solution"
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Reliability",
    description: "Building robust systems that users can depend on"
  }
];

// Animation variants for better performance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const skillItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400
    }
  }
};

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2, 
              type: "spring",
              stiffness: 100
            }}
            className="w-20 h-20 lg:w-24 lg:h-24 rounded-3xl bg-gradient-to-br from-accent/20 to-accent/10 border-2 border-accent/30 flex items-center justify-center mx-auto mb-6 lg:mb-8 shadow-2xl"
          >
            <Code className="w-8 h-8 lg:w-10 lg:h-10 text-accent" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white mb-4 lg:mb-6"
          >
            Software <span className="gradient-text">Engineer</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-xl lg:text-2xl text-textLight max-w-3xl mx-auto leading-relaxed font-light px-4"
          >
            Full-Stack Developer & DevOps Specialist with 4+ years building 
            <span className="text-accent font-medium"> scalable web applications and cloud infrastructure</span>.
          </motion.p>
        </motion.div>

        {/* Professional Philosophy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16 lg:mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {PHILOSOPHIES.map((philosophy, index) => (
              <motion.div
                key={philosophy.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="card-glass p-6 lg:p-8 text-center group hover:border-accent/40 transition-all duration-300"
              >
                <motion.div 
                  className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {philosophy.icon}
                </motion.div>
                <h3 className="text-lg lg:text-xl font-bold text-white mb-2 lg:mb-3">
                  {philosophy.title}
                </h3>
                <p className="text-textLight leading-relaxed text-sm lg:text-base">
                  {philosophy.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16 lg:mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-3xl lg:text-4xl font-serif font-bold text-white mb-12 lg:mb-16 text-center"
          >
            Technical <span className="gradient-text">Expertise</span>
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 lg:space-y-12"
          >
            {SKILL_CATEGORIES.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="card-glass p-6 lg:p-8 rounded-2xl lg:rounded-3xl border border-white/10 backdrop-blur-sm"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 lg:gap-4 mb-6">
                  <motion.div 
                    className="p-2 lg:p-3 rounded-xl bg-accent/20 border border-accent/30 text-accent"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-xl lg:text-2xl font-serif font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={skillItemVariants}
                      whileHover="hover"
                      className="flex flex-col p-3 lg:p-4 rounded-xl bg-background/80 border border-white/10 hover:border-accent/40 transition-all duration-300 group cursor-pointer"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-base lg:text-lg">{skill.emoji}</span>
                        <span className="text-white font-semibold text-sm lg:text-base group-hover:text-accent transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      {/* Proficiency Bar */}
                      <div className="w-full bg-white/10 rounded-full h-1.5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 1, delay: 1.2 + skillIndex * 0.05 }}
                          className="h-full bg-accent rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Professional Story */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="card-glass p-8 lg:p-12 xl:p-16 mb-12 lg:mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-48 h-48 lg:w-64 lg:h-64 bg-accent/5 rounded-full -translate-x-1/4 -translate-y-1/4"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 lg:w-48 lg:h-48 bg-accent/5 rounded-full translate-x-1/4 translate-y-1/4"></div>
          
          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-2xl lg:text-3xl xl:text-4xl font-serif font-bold text-white mb-6 lg:mb-8 text-center"
            >
              Professional <span className="gradient-text">Journey</span>
            </motion.h2>
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="space-y-4 lg:space-y-6 text-textLight text-base lg:text-lg leading-relaxed"
              >
                <p>
                  With <span className="text-accent font-semibold">4+ years of professional experience</span>, I've specialized in building enterprise-level applications and system integrations. My work spans full-stack development, API design, and cloud infrastructure.
                </p>
                <p>
                  I focus on creating solutions that solve real business problems, from vendor portals and insurance systems to HR integrations and compliance tools. Each project is approached with attention to scalability, performance, and user experience.
                </p>
                <p>
                  Continuously learning and adapting to new technologies, I stay current with industry best practices to deliver modern, efficient solutions that meet both technical and business requirements.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="flex justify-center"
              >
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-2xl lg:rounded-3xl bg-gradient-to-br from-accent/20 to-accent/10 border-2 border-accent/30 flex items-center justify-center shadow-2xl">
                    <Server className="w-12 h-12 lg:w-16 lg:h-16 text-accent" />
                  </div>
                  <motion.div
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute -inset-4 border-2 border-accent/20 rounded-2xl lg:rounded-3xl"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="text-center space-y-8 lg:space-y-12"
        >
          {/* CV Download */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="card-glass p-8 lg:p-12 xl:p-16 max-w-2xl mx-auto relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 bg-accent/10 rounded-full -translate-y-1/3 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 lg:w-24 lg:h-24 bg-accent/10 rounded-full translate-y-1/3 -translate-x-1/3"></div>
            
            <div className="relative">
              <FileText className="w-12 h-12 lg:w-16 lg:h-16 text-accent mx-auto mb-4 lg:mb-6" />
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-serif font-bold text-white mb-3 lg:mb-4">
                View Full Experience
              </h3>
              <p className="text-textLight text-base lg:text-lg mb-6 lg:mb-8 max-w-md mx-auto">
                Download my complete CV for detailed project experience, technical skills, and professional background.
              </p>
              {/* <motion.a
                href="https://maiyoj.github.io/vfolio/cv.pdf"
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 lg:gap-3 px-8 lg:px-10 py-3 lg:py-4 rounded-xl lg:rounded-2xl bg-accent text-background font-bold text-base lg:text-lg hover:bg-accent-dark transition-all duration-300 shadow-2xl accent-glow"
              >
                <Download size={20} />
                Download CV
              </motion.a> */}
                <motion.a
                  href="/vfolio/cv.pdf"
                  download="Valentine-Maiyo-Resume.pdf"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 lg:gap-3 px-8 lg:px-10 py-3 lg:py-4 
                            rounded-xl lg:rounded-2xl bg-accent text-background font-semibold 
                            text-base lg:text-lg hover:bg-accent/90 transition-all duration-300 
                            shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 
                            focus:ring-accent focus:ring-offset-2"
                >
                  <Download size={22} className="shrink-0" />
                  <span>Download CV</span>
              </motion.a>

            </div>
          </motion.div>

          {/* Professional CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10 rounded-3xl blur-xl"></div>
            <div className="card-glass p-8 lg:p-12 xl:p-20 text-center relative border-2 border-accent/30 backdrop-blur-sm rounded-3xl">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-20 h-20 lg:w-28 lg:h-28 rounded-2xl lg:rounded-3xl bg-gradient-to-br from-accent/20 to-accent/10 border-2 border-accent/30 flex items-center justify-center mx-auto mb-6 lg:mb-8 shadow-2xl"
              >
                <Zap className="w-8 h-8 lg:w-12 lg:h-12 text-accent" />
              </motion.div>
              
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-serif font-bold text-white mb-4 lg:mb-6">
                Ready to <span className="gradient-text">Collaborate?</span>
              </h3>
              
              <p className="text-lg lg:text-xl text-textLight mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed">
                Let's discuss how we can work together to build your next project with professional quality and technical excellence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 lg:gap-3 px-8 lg:px-10 py-3 lg:py-4 rounded-xl lg:rounded-2xl bg-accent text-background font-bold text-base lg:text-lg hover:bg-accent-dark transition-all duration-300 shadow-xl accent-glow flex-1 sm:flex-none justify-center max-w-xs"
                >
                  Start a Project
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                </motion.a>
                
                <motion.a
                  href="/projects"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 lg:gap-3 px-8 lg:px-10 py-3 lg:py-4 rounded-xl lg:rounded-2xl border-2 border-accent text-accent font-bold text-base lg:text-lg hover:bg-accent hover:text-background transition-all duration-300 backdrop-blur-sm flex-1 sm:flex-none justify-center max-w-xs"
                >
                  View My Work
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </PageTransition>
  );
}