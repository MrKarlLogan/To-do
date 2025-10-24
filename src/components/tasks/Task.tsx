import type { RefObject } from "react";
import Button from "../button/Button";
import style from "./Task.module.scss";

export interface ITask {
  id: string;
  title: string;
}

export interface ITasks {
  tasks: ITask[];
  setTasks: (tasks: ITask[]) => void;
  localRef: RefObject<Record<string, HTMLDivElement | null>>;
}

const Task = ({ tasks, setTasks, localRef }: ITasks) => {
  // const ref = useRef<Record<string, HTMLDivElement | null>>({});
  const handleDeleteTask = (taskID: string) => {
    const currentRef = localRef.current[taskID];
    const isConfirmed = confirm("Are you sure you want to delete the task?");
    if (isConfirmed) {
      currentRef?.classList.add(style.task__delete);
      setTimeout(() => {
        setTasks(tasks.filter((task: ITask) => task.id !== taskID));
      }, 300);
    }
  };

  return (
    tasks.length !== 0 && (
      <div className={style.tasks}>
        {tasks
          .map((task: ITask) => (
            <div
              key={task.id}
              ref={(element) => {
                localRef.current[task.id] = element;
              }}
              className={style.task}
            >
              <p>{`Task: ${task.title}`}</p>
              <Button
                className={style.task__button}
                type="button"
                onClick={() => handleDeleteTask(task.id)}
              >
                Delete
              </Button>
            </div>
          ))
          .reverse()}
      </div>
    )
  );
};

export default Task;
