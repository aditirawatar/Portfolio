// components/ProjectsSection.jsx
import ProjectCard from './ProjectCard';

const ProjectsSection = ({ projects }) => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center p-12"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;


