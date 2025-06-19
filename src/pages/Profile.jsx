import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    axios
      .get("http://localhost:5000/api/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        if (err.response?.status === 401 || err.response?.status === 403) {
          localStorage.removeItem("token");
          navigate("/login");
        } else {
          setError("Không thể tải thông tin người dùng");
        }
      });
  }, [navigate]);

  if (!user) {
    return (
      <p className="text-center mt-10 text-gray-500">Đang tải thông tin...</p>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-12 p-8 bg-white shadow-xl rounded-xl">
      <div className="flex items-center space-x-6 mb-6">
        <img
          src={`https://ui-avatars.com/api/?name=${user.name}&background=0D8ABC&color=fff`}
          alt="avatar"
          className="w-20 h-20 rounded-full shadow-md"
        />
        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-1">
            {user.name}
          </h2>
          <p className="text-gray-600 text-sm">ID người dùng: {user.id}</p>
        </div>
      </div>

      <div className="space-y-4 text-gray-700">
        <div>
          <span className="font-semibold">Tên:</span> {user.name}
        </div>
        <div>
          <span className="font-semibold">Email:</span> {user.email}
        </div>
      </div>

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default Profile;
