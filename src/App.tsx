import BoardTasks from "./components/BoardTask";
import LayoutRoot from "./components/LayoutRoot";


function App() {
  return (
    <LayoutRoot>
      <div className="mx-6 lg:w-3/5 lg:mx-auto">
        <BoardTasks />
      </div>
    </LayoutRoot>
  )
}

export default App
