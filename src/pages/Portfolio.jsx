import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Blog Cá Nhân",
    description: "Một website chia sẻ bài viết cá nhân với React + Node.js.",
    image: "/assets/project1.png",
    link: "https://github.com/yourusername/blog-project",
  },
  {
    title: "Quản Lý Công Việc",
    description: "App ToDo list dùng React và Firebase.",
    image: "/assets/project2.png",
    link: "https://github.com/yourusername/todo-app",
  },
  // Thêm các dự án khác nếu có
];

const Portfolio = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-4">
          🚀 Dự án của tôi
        </h2>
        <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
          Đây là một số dự án nổi bật mà tôi đã thực hiện, tập trung vào frontend đẹp mắt và backend hiệu quả.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="transform transition duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
