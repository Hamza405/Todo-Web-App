import { Toaster } from "react-hot-toast";
import AppHeader from "./components/AppHeader";
import PageTitle from "./components/PageTitle";
import TodoList from "./components/TodoList";
import style from "./styles/modules/app.module.scss";

function App() {
  return (
    <>
      <div className="container">
        <PageTitle>Todo List</PageTitle>
        <div className={style.app__wrapper}>
          <AppHeader></AppHeader>
          <TodoList />
        </div>
      </div>
      <Toaster position="bottom-right" />
    </>
  );
}

export default App;
