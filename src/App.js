import { Divider } from "antd";
import Title from "antd/lib/typography/Title";
import Filters from "./components/Filters";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className='App'>
      <Title style={{ textAlign: "center" }}>TODO APP with Antd</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
