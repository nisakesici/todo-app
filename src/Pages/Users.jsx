import { useEffect, useState } from "react";
import UserList from "../Components/UserList";
import { Link } from "react-router-dom";

function Users() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")) || []);
  }, []);

  const deleteUser = (id) => {
    const updated = todos.filter((x) => x.id !== id);

    setTodos(updated);

    localStorage.setItem("todos", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto p-8">
        <div
          className="
          flex
          justify-between
          items-center
          mb-10
          "
        >
          <div>
            <div className="text-slate-400">USER PAGE</div>

            <h1
              className="
              text-5xl
              font-bold
              "
            >
              👥 Kullanıcı Listesi
            </h1>
          </div>

          <Link
            to="/"
            className="
            bg-slate-900
            text-white
            px-6
            py-4
            rounded-2xl
            "
          >
            ← Kullanıcı Ekle
          </Link>
        </div>

        <UserList todos={todos} editUser={() => {}} deleteUser={deleteUser} />
      </div>
    </div>
  );
}

export default Users;
