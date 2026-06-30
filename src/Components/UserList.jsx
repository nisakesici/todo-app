function UserList({ todos, editUser, deleteUser }) {
  return (
    <div className="col-span-12">
      {todos.length === 0 && (
        <div
          className="
             bg-white
             rounded-[28px]
             p-10
             text-center
             "
        >
          Henüz kullanıcı yok
        </div>
      )}

      {todos.map((todo) => (
        <div
          key={todo.id}
          className="
             bg-white
             rounded-[28px]
             p-6
             mb-5
             shadow-sm
             grid
             grid-cols-12
             items-center
             "
        >
          <div className="col-span-8">
            <div
              className="
                 text-2xl
                 font-bold
                 text-slate-800
                 "
            >
              {todo.title}
            </div>

            <div className="text-slate-400">LocalStorage kullanıcısı</div>
          </div>

          <div
            className="
               col-span-4
               flex
               justify-end
               gap-3
               "
          >
            <button
              onClick={() => editUser(todo)}
              className="
                 bg-amber-500
                 text-white
                 px-6
                 py-3
                 rounded-2xl
                 "
            >
              Düzenle
            </button>

            <button
              onClick={() => deleteUser(todo.id)}
              className="
                 bg-rose-700
                 text-white
                 px-6
                 py-3
                 rounded-2xl
                 "
            >
              Sil
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserList;
