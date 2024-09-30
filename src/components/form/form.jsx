import React from "react";
import style from './form.module.css'
export const Form = ({ setData }) => {
  const [inputValue, setInputValue] = React.useState("");
  const submit = (e) => {
    e.preventDefault();

    setData((pState) => {
      return [...pState, { userName: inputValue, id: Date.now() }];
    });

    setInputValue("");
  };

  return (
    <form onSubmit={submit}  className={style['title']}>
      <input className={style['input']}
        onChange={(e) => setInputValue(e.target.value)}
        name="userName"
        type="text"
        value={inputValue}
        placeholder="User name"
      />
      <button className={style['btn']} type="submit">Send</button>
    </form>
  );
};
