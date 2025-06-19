import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col justify-center items-center text-center px-6">
      <img
        src="https://i.imgur.com/4M34hi2.png" // Thay bằng avatar của bạn
        alt="Avatar"
        className="w-32 h-32 rounded-full shadow-lg mb-6 border-4 border-white"
      />
      <h1 className="text-4xl md:text-6xl font-extrabold text-blue-700 mb-4">
        👋 Xin chào, tôi là Cường!
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-6">
        Tôi là một lập trình viên Web Fullstack, đam mê tạo ra giao diện đẹp, trải nghiệm tốt và ứng dụng hiệu quả. Chào mừng bạn đến với portfolio cá nhân của tôi!
      </p>
      <a
        href="#portfolio"
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow transition-all duration-300"
      >
        Xem Portfolio <FaArrowRight />
      </a>
    </div>
  );
};

export default Home;
