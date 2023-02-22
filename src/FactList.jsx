import React from "react";
import { CATEGORIES } from "./catagories";
import supabase from "./supabase";
const FactList = ({ facts, setFacts }) => {
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
                <button
                  onClick={async () => {
                    const { data, error } = await supabase
                      .from("facts")
                      .update({ votesIntresting: fact.votesIntresting + 1 })
                      .eq("id", fact.id)
                      .select();
                    console.log(data);
                    if (!error) {
                      setFacts((facts) =>
                        facts.map((f) => (f.id === fact.id ? data[0] : f))
                      );
                    }
                  }}
                >
                  👍 {fact.votesIntresting}
                </button>
                <button>⛔️ {fact.votesFalse}</button>
                <button>🤯 {fact.votesMindblowing}</button>
              </div>
            </li>
          ))}
        </ul>
        there are curently {facts.length} facts. add yours....
      </section>
    </>
  );
};

export default FactList;
