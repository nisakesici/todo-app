import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
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
        todos.map((x) =>
          x.id === editId
            ? {
                ...x,
                title: text,
              }
            : x
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

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto p-8">
        <div className="bg-slate-900 rounded-[30px] p-10 text-white">
          <h1 className="text-5xl font-bold">👥 User Management</h1>

          <p className="mt-3">Kullanıcı Ekle</p>
        </div>

        <div className="mt-8 bg-white p-8 rounded-[28px]">
          <h2 className="text-3xl mb-6">
            {editId ? "Güncelle" : "Yeni Kullanıcı"}
          </h2>

          <div className="flex gap-3">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Kullanıcı adı"
              className="
              flex-1
              border
              p-4
              rounded-xl
              "
            />

            <button
              onClick={saveUser}
              className="
              bg-teal-600
              text-white
              px-8
              rounded-xl
              "
            >
              Ekle
            </button>
          </div>
        </div>

        <Link
          to="/users"
          className="
          mt-8
          inline-block
          bg-slate-900
          text-white
          px-8
          py-4
          rounded-xl
          "
        >
          Kullanıcı Listesine Git →
        </Link>
      </div>
    </div>
  );
}

export default Home;
