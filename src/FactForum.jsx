import { CATEGORIES } from "./catagories";
import React, { useState } from "react";

const FactForum = () => {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const textLength = text.length;
  function submitHandler(e) {
    e.preventDefault();
    console.log(text, source, category);
  }
  return (
    <>
      <form className="fact-form" onSubmit={submitHandler}>
        <input
          placeholder="share a fact with world..."
          type="text"
          name=""
          id=""
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <span>{200 - textLength}</span>
        <input
          placeholder="source"
          type="text"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Choose Catgory...</option>
          {CATEGORIES.map((cat) => (
            <option key={cat.name}>{cat.name.toUpperCase()}</option>
          ))}
        </select>
        <button type="submit" className="btn btn-large">
          post
        </button>
      </form>
    </>
  );
};

export default FactForum;
