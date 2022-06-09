import React, { useState, useTransition } from "react";

const List = () => {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 10000;

  const handleChange = (e) => {
    setInput(e.target.value);
    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  };
  return (
    <>
      <h6>useTransition Hook</h6>
      <input type='text' value={input} onChange={handleChange} />
      {isPending? "Loading ...." : list.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </>
  );
};

export default List;
