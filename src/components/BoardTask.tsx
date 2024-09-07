import {
  CircleOff,
  LayoutList,
  Leaf,
  TableCellsMerge,
  Wind,
} from "lucide-react";

const todos = [
  {
    title: "Criar tela de login",
    done: false,
  },
  {
    title: "Criar tela de cadastro",
    done: false,
  },
];

function BoardTasks() {
  const totalTodo = todos.length;

  return (
    <div className="flex flex-col gap-4 my-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl my-4 inline-flex items-center gap-2 md:text-2xl font-medium ">
          <TableCellsMerge size={26} /> Quadro de tarefas
        </h2>

        {totalTodo === 0 && (
          <span className="text-xs flex items-center rounded-lg bg-emerald-100 gap-2 p-2 h-fit">
            <CircleOff size={16} />
            Nenhuma tarefa encontrada
          </span>
        )}

        {totalTodo > 0 && (
          <span className="text-xs flex items-center rounded-lg bg-emerald-100 gap-2 p-2 h-fit">
            <LayoutList size={16} />
            Total de tarefas: {totalTodo}
          </span>
        )}
      </div>

      {todos.length === 0 ? (
        <span className="w-full  flex flex-col justify-center items-center h-full  bg-emerald-100 p-8 rounded-lg ">
          <span className="inline-flex items-end justify-center ">
            <Wind size={40} />
            <Leaf size={18} />
          </span>
          <p> Nenhuma tarefa registrada</p>
        </span>
      ) : (
        todos.map((todo, index) => <span>{todo.title}</span>)
      )}
    </div>
  );
}

export default BoardTasks;