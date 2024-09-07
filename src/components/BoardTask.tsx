import {
  CircleOff,
  LayoutList,
  Leaf,
  PaperclipIcon,
  TableCellsMerge,
  Wind,
} from "lucide-react";

import { FormEvent, useRef, useState } from "react";
import Button from "./Button";
import Input from "./Input";

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
  const [todosList, setTodos] = useState(todos);
  const totalTodo = todos.length;

  const inputRef = useRef<HTMLInputElement | null>(null);

  const addTodo = (title: string) => {
    setTodos((prevState) => [...prevState, { title, done: false }]);
  };

  const handlerSubmit = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    if (inputRef.current?.value) {
      addTodo(inputRef.current.value);
      inputRef.current.value = "";
    }
  }

  return (
    <>
      <form onSubmit={handlerSubmit}>
        <button className="text-xl font-medium inline-flex gap-2 items-center lg:justify-start lg:text-3xl">
          <PaperclipIcon size={26} />
          Adicionar uma tarefa
        </button>

        <div className="flex mt-6 justify-between flex-col gap-3  md:flex-row ">
          <Input
            className="w-full"
            placeholder="Digite sua tarefa"
            ref={inputRef}
          />
          <Button className="md:w-60">Adicionar tarefas</Button>
        </div>
      </form>

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

        {totalTodo === 0 ? (
          <span className="w-full  flex flex-col justify-center items-center h-full  bg-emerald-100 p-8 rounded-lg ">
            <span className="inline-flex items-end justify-center ">
              <Wind size={40} />
              <Leaf size={18} />
            </span>
            <p> Nenhuma tarefa registrada</p>
          </span>
        ) : (
          todosList.map((todo, index) => <span>{todo.title}</span>)
        )}
      </div>
    </>
  );
}

export default BoardTasks;