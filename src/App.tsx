import TodoList from "./features/tasks/TodoList";
import InputBlock from "./features/InputBlock/InputBlock";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>To do List...</h1>
      <TodoList />

      <hr />
      <InputBlock />
    </div>
  );
}

export default App;
