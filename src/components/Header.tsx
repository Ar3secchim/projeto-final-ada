import { LogOutIcon, User2Icon } from "lucide-react";
import Button from "./Button";

const user = {
  name: "User",
}

function Header() {
  return (
    <header className="mx-6 my-2 h-10 flex justify-between lg:w-auto">
      <h1 className="text-3xl text-emerald-700 font-extrabold ">TODO</h1>
      <div className="flex w-30 items-center justify-between gap-3 ">
        <div className="flex flex-col items-end text-base">
          Olá, {user.name}
          <Button className="inline-flex items-center justify-center  m- gap-1">
            <LogOutIcon size={14} />
            Sair
          </Button>
        </div>
        <span className="rounded-full w-10 h-10 bg-slate-300 inline-flex items-center  justify-center">
          <User2Icon size={32} />
        </span>
      </div>

    </header>
  );
}

export default Header;