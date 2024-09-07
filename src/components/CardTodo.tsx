import { CheckCircle2Icon, Trash2 } from "lucide-react";

import Button from "./Button";

interface ITodo {
  id: number;
  title: string;
  done: boolean;
}
type CardTaskProps = {
  toogleTodoDone: () => void;
  removeTodo: () => void;
  todos: ITodo;
};


function CardTask({ toogleTodoDone, removeTodo, todos }: CardTaskProps) {
  return (
    <div
      className={`flex justify-between itens-center p-2  rounded-xl border drop-shadow-sm ${todos.done ? "opacity-50 border-emerald-200" : "border-slate-200"}`}
    >
      <div className="flex gap-4 items-center">
        <div>
          <Button
            className="bg-transparent hover:bg-slate-100"
            onClick={() => toogleTodoDone()}
          >
            <CheckCircle2Icon
              color={todos.done ? "#fffF" : "#047857"}
              fill={todos.done ? "#047857" : "#fff"}
            />
          </Button>
        </div>
        <h3
          className={`text-lg font-medium ${todos.done ? "text-emerald-700 line-through " : "border-slate-200 "}`}
        >
          {todos.title}
        </h3>
      </div>
      <div>
        <Button
          className="bg-transparent  hover:bg-slate-100"
          onClick={() => removeTodo()}
        >
          <Trash2 color={todos.done ? "#8ab6aa" : "#e65555"} />
        </Button>
      </div>
    </div>
  );
}

export default CardTask;