import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaEdit, FaTrash } from "react-icons/fa";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [tech, setTech] = useState("");
  const [editingId, setEditingId] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/projects", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProjects(res.data);
      } catch (err) {
        console.error("Lỗi khi load project:", err);
        toast.error("Không thể tải dự án!");
      }
    };
    fetchProjects();
  }, [token]);

  const handleSubmit = (e) => {
    editingId ? handleUpdate(e) : handleAdd(e);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/projects",
        { title, tech },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setProjects([...projects, res.data]);
      setTitle("");
      setTech("");
      toast.success("Đã thêm dự án!");
    } catch (err) {
      console.error("Lỗi khi thêm:", err);
      toast.error("Thêm dự án thất bại");
    }
  };

  const handleEdit = (project) => {
    setEditingId(project.id);
    setTitle(project.title);
    setTech(project.tech);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:5000/api/projects/${editingId}`,
        { title, tech },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const updated = projects.map((p) => (p.id === editingId ? res.data : p));
      setProjects(updated);
      setEditingId(null);
      setTitle("");
      setTech("");
      toast.success("Cập nhật thành công!");
    } catch (err) {
      console.error("Lỗi khi cập nhật:", err);
      toast.error("Cập nhật thất bại");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/projects/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProjects(projects.filter((p) => p.id !== id));
      toast.success("Đã xoá dự án!");
    } catch (err) {
      console.error("Lỗi khi xóa:", err);
      toast.error("Xoá dự án thất bại");
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">🎯 Dashboard cá nhân</h1>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-8 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Tên dự án:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Công nghệ:</label>
          <input
            type="text"
            value={tech}
            onChange={(e) => setTech(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow"
        >
          {editingId ? "💾 Cập nhật" : "➕ Thêm dự án"}
        </button>
      </form>

      <div className="grid gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-5 bg-gray-50 border border-gray-200 rounded-lg shadow flex justify-between items-start hover:shadow-md transition"
          >
            <div>
              <h2 className="text-lg font-bold text-gray-800">{project.title}</h2>
              <p className="text-sm text-gray-600">Công nghệ: {project.tech}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(project)}
                className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
              >
                <FaEdit /> Sửa
              </button>
              <button
                onClick={() => handleDelete(project.id)}
                className="flex items-center gap-1 text-red-600 hover:text-red-800"
              >
                <FaTrash /> Xoá
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
