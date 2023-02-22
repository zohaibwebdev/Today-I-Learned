import "./style.css";
import Header from "./Header";
import FactForum from "./FactForum";
import Filter from "./Filter";
import FactList from "./FactList";
import Loader from "./Loader";
import { useEffect, useState } from "react";
import { FormContext } from "./context";
import supabase from "./supabase";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cata, setCata] = useState("all");
  useEffect(
    function () {
      async function getFacts() {
        setLoading(true);

        let query = supabase.from("facts").select("*");
        console.log(cata);

        if (cata !== "all") {
          query = query.eq("catagory", cata);
        }

        const { data: facts, error } = await query;
        error ? alert("something bad happen") : setFacts(facts);

        setLoading(false);
      }
      getFacts();
    },
    [cata]
  );
  return (
    <>
      <FormContext.Provider value={{ showForm, setShowForm }}>
        <Header />
        {showForm ? (
          <FactForum setFacts={setFacts} setShowForm={setShowForm} />
        ) : null}
      </FormContext.Provider>
      <main className="main">
        <Filter CATEGORIES setCata={setCata} />
        {loading ? <Loader /> : <FactList facts={facts} />}
      </main>
    </>
  );
}

export default App;
