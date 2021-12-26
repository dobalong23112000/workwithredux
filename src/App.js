import "./App.css";
import NavbarScreen from "./components/NavbarScreen";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <div className="container">
      <NavbarScreen />
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;
