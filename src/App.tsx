import Form from "./components/form/Form";
import style from "./App.module.scss";
import styleTasks from "./components/tasks/Task.module.scss";
import Task, { type ITask } from "./components/tasks/Task";
import { useRef, useState, type FormEvent } from "react";
import Button from "./components/button/Button";
import Element from "./components/element/Element";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [inputValue, setInputValue] = useState("");
  const ref = useRef<Record<string, HTMLDivElement | null>>({});

  const isEditText = (value: string) => {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  };

  const onHandleAddTask = (event: FormEvent) => {
    event.preventDefault();
    if (tasks.some((task: ITask) => task.title === inputValue.trim())) {
      alert("A task with this name already exists.");
      return;
    }
    setTasks([
      ...tasks,
      { id: crypto?.randomUUID(), title: isEditText(inputValue.trim()) },
    ]);
    setInputValue("");
  };

  const deleteAllTasks = () => {
    const isConfirmed = confirm("Are you sure you want to delete all tasks?");
    if (isConfirmed) {
      tasks.forEach((task: ITask) => {
        const currentRef = ref.current[task.id];
        currentRef?.classList.add(styleTasks.task__delete);
      });
      setTimeout(() => {
        setTasks([]);
      }, 300);
    }
  };

  return (
    <>
      <header className={style.header}>
        <Element tag="h1" className={style.header__title}>
          To-do list
        </Element>
        <Form
          inputValue={inputValue}
          setInputValue={setInputValue}
          onHandleAddTask={onHandleAddTask}
        />
      </header>
      <main className={style.main}>
        {tasks.length === 0 ? (
          <p className={style.noTasks}>There are no tasks</p>
        ) : (
          <>
            <Task tasks={tasks} setTasks={setTasks} localRef={ref} />
            <Button
              className={style.deleteButton}
              type="button"
              onClick={deleteAllTasks}
            >
              Delete all tasks
            </Button>
          </>
        )}
      </main>
    </>
  );
}

export default App;
