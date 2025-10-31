import type { FormEvent, KeyboardEvent } from "react";
import style from "./Form.module.scss";
import Button from "../button/Button";

interface IFormProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  onHandleAddTask: (event: FormEvent) => void;
  onHandleKeyDown: (event: KeyboardEvent) => void;
}
const Form = ({
  inputValue,
  setInputValue,
  onHandleAddTask,
  onHandleKeyDown,
}: IFormProps) => {
  return (
    <form name="form" className={style.form}>
      <Button
        className={style.button}
        type="button"
        onClick={onHandleAddTask}
        disabled={inputValue.trim() === ""}
      >
        Add
      </Button>
      <label className={style.label}>
        <input
          name="input"
          className={style.input}
          type="text"
          placeholder="Create a task"
          value={inputValue}
          onChange={(event) => {
            if (event.target.value.trim() === "" && event.target.value !== "")
              return;
            setInputValue(event.target.value);
          }}
          onKeyDown={onHandleKeyDown}
        />
      </label>
    </form>
  );
};

export default Form;
