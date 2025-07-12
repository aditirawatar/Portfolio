
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, link, tags }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-all"
    >
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block"
      >
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className={`text-sm px-3 py-1 ${tag.color} rounded-full`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectCard;