import React from "react";
import style from "./card.module.css";
export const Card = ({ name, setData, id }) => {
  const [count, setCount] = React.useState(0);
  const deleteItem = () => {
    setData((pState) => pState.filter((item) => item.id !== id));
  };

  const editItem = () => {
    let newName = prompt("Enter new user name:");
    if (newName) {
      setData((p) =>
        p.map((item) =>
          item.id === id ? { ...item, userName: newName } : { name }
        )
      );
    }
  };

  return (

    <div className={style["title"]}>
      <h1 className={style['text']}>
        {count} {name}
      </h1>
      <button className={style['btn']} onClick={() => setCount(count + 1)}>+</button>
      <button className={style['btn']} onClick={deleteItem}>Delete</button>
      <button className={style['btn']} onClick={editItem}>Edit</button>
    </div>
  );
};
