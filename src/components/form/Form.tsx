import type { FormEvent } from "react";
import style from "./Form.module.scss";
import Button from "../button/Button";

interface IFormProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  onHandleAddTask: (event: FormEvent) => void;
}
const Form = ({ inputValue, setInputValue, onHandleAddTask }: IFormProps) => {
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
          placeholder="Add a task"
          value={inputValue}
          onChange={(event) => {
            if (event.target.value.trim() === "" && event.target.value !== "")
              return;
            setInputValue(event.target.value);
          }}
        />
      </label>
    </form>
  );
};

export default Form;
