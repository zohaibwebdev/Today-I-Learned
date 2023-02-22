import "./style.css";
import Header from "./Header";
import FactForum from "./FactForum";
import Filter from "./Filter";
import FactList from "./FactList";
import { useEffect, useState } from "react";
import { FormContext } from "./context";
import supabase from "./supabase";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);
  useEffect(function () {
    async function getFacts() {
      let { data: facts, error } = await supabase.from("facts").select("*");
      setFacts(facts);
    }
    getFacts();
  }, []);
  return (
    <>
      <FormContext.Provider value={{ showForm, setShowForm }}>
        <Header />
        {showForm ? <FactForum /> : null}
      </FormContext.Provider>
      <main className="main">
        <Filter CATEGORIES />
        <FactList facts={facts} />
      </main>
    </>
  );
}

export default App;
