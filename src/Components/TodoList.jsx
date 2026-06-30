import { useEffect, useState } from "react";
import UserList from "./UserList";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos")) || [];

    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const saveUser = () => {
    if (!text.trim()) return;

    if (editId) {
      setTodos(
        todos.map((item) =>
          item.id === editId
            ? {
                ...item,
                title: text,
              }
            : item
        )
      );

      setEditId(null);
    } else {
      setTodos([
        {
          id: Date.now(),
          title: text,
        },

        ...todos,
      ]);
    }

    setText("");
  };

  const deleteUser = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const editUser = (user) => {
    setText(user.title);

    setEditId(user.id);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto p-8">
        <div className="grid grid-cols-12 gap-6">
          {/* HEADER */}

          <div
            className="
            col-span-12
            bg-slate-900
            rounded-[32px]
            p-10
            text-white
            "
          >
            <div className="text-sm text-slate-400">CRUD PROJECT</div>

            <h1
              className="
              text-5xl
              font-bold
              mt-2
              "
            >
              👥 User Management System
            </h1>

            <p
              className="
              mt-4
              text-slate-400
              "
            >
              Kullanıcı yönetimi ve kayıt işlemleri
            </p>
          </div>

          {/* STATS */}

          <div
            className="
            col-span-4
            grid
            gap-5
            "
          >
            <div
              className="
              bg-white
              rounded-[28px]
              p-8
              shadow-sm
              "
            >
              <div
                className="
                text-5xl
                font-bold
                text-teal-600
                "
              >
                {todos.length}
              </div>

              <div className="mt-2 text-slate-500">Toplam Kullanıcı</div>
            </div>

            <div
              className="
              bg-white
              rounded-[28px]
              p-8
              shadow-sm
              "
            >
              <div
                className="
                text-5xl
                font-bold
                text-orange-500
                "
              >
                {editId ? "1" : "0"}
              </div>

              <div className="mt-2 text-slate-500">Güncelleme Modu</div>
            </div>
          </div>

          {/* FORM */}

          <div
            className="
            col-span-8
            bg-white
            rounded-[28px]
            p-8
            shadow-sm
            "
          >
            <h2
              className="
              text-3xl
              font-bold
              mb-6
              text-slate-800
              "
            >
              {editId ? "🛠 Kullanıcı Güncelle" : "➕ Yeni Kullanıcı"}
            </h2>

            <div className="flex gap-3">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Kullanıcı adı"
                className="
                flex-1
                border
                border-slate-200
                rounded-2xl
                p-4
                outline-none
                "
              />

              <button
                onClick={saveUser}
                className="
                bg-teal-600
                hover:bg-teal-700
                text-white
                px-10
                rounded-2xl
                "
              >
                {editId ? "Güncelle" : "Ekle"}
              </button>
            </div>
          </div>

          {/* USER LIST */}

          <UserList todos={todos} editUser={editUser} deleteUser={deleteUser} />

          {/* FOOTER */}

          <div
            className="
            col-span-12
            bg-slate-800
            text-slate-300
            rounded-[28px]
            p-6
            text-center
            "
          >
            CRUD User Management • React
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
