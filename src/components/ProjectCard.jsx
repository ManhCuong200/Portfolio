import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-t-2xl"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition"
        >
          <FaGithub className="text-xl" />
          Xem GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
