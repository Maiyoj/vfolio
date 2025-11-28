import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ title, description, tags, links, index, image }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="card-glass p-8 hover:border-accent/40 group cursor-pointer h-full flex flex-col"
    >

      {/* Project Image */}
      {image && (
        <div className="w-full h-48 mb-6 rounded-xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Project Header */}
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-2xl font-serif font-bold text-white group-hover:text-accent transition-colors">
          {title}
        </h3>
        <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
          {links.github && (
            <a 
              href={links.github} 
              className="p-2 rounded-lg bg-card border border-card-hover text-textLight hover:text-accent hover:border-accent/30 transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={18} />
            </a>
          )}
          {links.live && (
            <a 
              href={links.live} 
              className="p-2 rounded-lg bg-card border border-card-hover text-textLight hover:text-accent hover:border-accent/30 transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Project Description */}
      <p className="text-textLight leading-relaxed flex-1 mb-6">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="px-3 py-1 rounded-full bg-background text-textLight text-xs font-medium border border-card-hover"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
