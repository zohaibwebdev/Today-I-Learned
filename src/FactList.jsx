import React from "react";
import { CATEGORIES } from "./catagories";
const FactList = ({ facts }) => {
  console.log(facts);
  return (
    <>
      <section className="section">
        <ul className="facts-list">
          {facts.map((fact) => (
            <li key={fact.id} className="fact">
              <p>
                {fact.fact}
                <a className="source" href={fact.source} target="_blank">
                  source
                </a>
              </p>
              <span
                className="tag"
                style={{
                  backgroundColor: CATEGORIES.find(
                    (cat) => cat.name === fact.catagory
                  ).color,
                }}
              >
                {fact.catagory}
              </span>
              <div className="vote-buttons">
                <button>👍 24</button>
                <button>👎 24</button>
                <button>⛔ 24</button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default FactList;
