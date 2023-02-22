import { CATEGORIES } from "./catagories";
import React, { useState } from "react";
import supabase from "./supabase";

const FactForum = ({ setFacts, setShowForm }) => {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [catagory, setCatagory] = useState("");
  const textLength = text.length;
  async function submitHandler(e) {
    e.preventDefault();
    console.log(text, source, catagory);
    const { data: newFact, error } = await supabase
      .from("facts")
      .insert([{ text, source, catagory }])
      .select();
    if (!error) setFacts((facts) => [newFact[0], ...facts]);
    setText("");
    setSource("");
    setCatagory("");
    setShowForm(false);
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
        <select value={catagory} onChange={(e) => setCatagory(e.target.value)}>
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
